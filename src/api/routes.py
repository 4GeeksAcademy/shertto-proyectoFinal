from flask import Flask, request, jsonify, url_for, Blueprint, session
from api.models import db, User, Order, Return, Order_details, Cart, Product, Category, CartItems
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    check_user = User.query.filter_by(email=email).first()

    if check_user is None:
        return jsonify({"msg": "User doesn't exist"}), 404

    if password != check_user.password:
        return jsonify({"msg": "Clave o email incorrecto"}), 401
    
    access_token = create_access_token(identity=check_user.id)
    return jsonify({"token": access_token, "user_id": check_user.id})


@api.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)

        if not user:
            return jsonify({"error": "User not found"}), 404

        return jsonify({
            "id": user.id,
            "email": user.email,
            "is_active": user.is_active
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/registre', methods=['POST'])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", True)

    if User.query.filter_by(email=email).first() is not None:
        return jsonify({"msg": "El correo ya está registrado"}), 400

    new_user = User(email=email, password=password, is_active=is_active)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created successfully"}), 201

# Ruta protegida (requiere JWT)
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"id": user.id}), 200


@api.route('/orders/history', methods=['GET'])
@jwt_required()
def get_order_history():
    current_user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=current_user_id).all()
    orders_list = [{
        "id": order.id,
        "status": order.status,
        "items": [
            {"product_id": item.product_id, "quantity": item.quantity, "price": item.price}
            for item in order.items
        ]
    } for order in orders]
    return jsonify(orders_list), 200


@api.route('/returns/history', methods=['GET'])
@jwt_required()
def get_return_history():
    user_id = get_jwt_identity()
    returns = Return.query.filter_by(user_id=user_id).all()
    returns_list = [{
        "id": ret.id,
        "order_id": ret.order_id,
        "date_returned": ret.date_returned,
        "reason": ret.reason
    } for ret in returns]
    return jsonify(returns_list), 200


@api.route('/orders/<int:order_id>/return', methods=['POST'])
@jwt_required()
def create_return(order_id):
    user_id = get_jwt_identity()
    data = request.get_json()
    reason = data.get('reason')

    order = Order.query.filter_by(id=order_id, user_id=user_id).first()
    if not order:
        return jsonify({"error": "Order not found or does not belong to user"}), 404

    new_return = Return(user_id=user_id, order_id=order.id, reason=reason)
    db.session.add(new_return)
    db.session.commit()

    return jsonify({"message": "Return created successfully"}), 201


@api.route('/product', methods=['GET'])
def get_products():
    products = Product.query.all()
    if not products:
        return jsonify({"message": "No hay productos disponibles"}), 404

    products_data = [{
        "id": product.id,
        "name": product.name,
        "description": product.description,
        "price": product.price,
        "category_id": product.category_id
    } for product in products]

    return jsonify(products_data), 200


@api.route('/product', methods=['POST'])
def create_product():
    try:
        # Obtener los datos de la solicitud
        data = request.get_json()

        # Validar que todos los campos necesarios están presentes
        name = data.get('name')
        description = data.get('description')
        price = data.get('price')
        category_id = data.get('category_id')

        if not all([name, price, category_id]):
            return jsonify({"error": "Faltan campos obligatorios"}), 400

        # Crear el nuevo producto
        new_product = Product(name=name, description=description, price=price, category_id=category_id)

        # Agregar el producto a la base de datos
        db.session.add(new_product)
        db.session.commit()

        # Retornar el producto creado como respuesta
        return jsonify(new_product.serialize()), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@api.route('/cart/add', methods=['POST'])
@jwt_required()
def add_to_cart():
    try:
        user_id = get_jwt_identity()
        data = request.json

        product_id = data.get('product_id')
        quantity = data.get('quantity', 1)  

        if not product_id:
            return jsonify({"error": "Se requiere el ID del producto"}), 400

        # Verifica si el producto existe
        product = Product.query.get(product_id)
        if not product:
            return jsonify({"error": "El producto no existe"}), 404

        # Busca el carrito del usuario
        cart = Cart.query.filter_by(user_id=user_id).first()
        if not cart:
            cart = Cart(user_id=user_id)
            db.session.add(cart)
            db.session.commit()

        cart_item = CartItems.query.filter_by(cart_id=cart.id, product_id=product_id).first()

        if cart_item:
            cart_item.quantity += quantity
        else:
            # Agrega un nuevo ítem al carrito
            cart_item = CartItems(cart_id=cart.id, product_id=product_id, quantity=quantity)
            db.session.add(cart_item)

        db.session.commit()

        return jsonify({"msg": "Producto agregado al carrito con éxito"}), 200

    except Exception as e:
        print(f"Error: {str(e)}")  # Log para depuración
        return jsonify({"error": "Hubo un error al agregar el producto al carrito"}), 500


# @api.route('/cart', methods=['POST'])
# @jwt_required()
# def add_to_cart():
#     current_user_id = get_jwt_identity()  # Obtiene el ID del usuario autenticado
#     data = request.get_json()
#     product_id = data.get("product_id")
#     quantity = data.get("quantity", 1)  # Si no se especifica cantidad, por defecto es 1

#     if not product_id or quantity <= 0:
#         return jsonify({"message": "Se requiere un ID de producto válido y cantidad mayor a 0"}), 400

#     # Verificar si el producto existe
#     product = Product.query.get(product_id)
#     if not product:
#         return jsonify({"message": "El producto no existe"}), 404

#     # Buscar el carrito del usuario
#     cart = Cart.query.filter_by(user_id=current_user_id).first()

#     if not cart:
#         # Si no existe el carrito, crearlo
#         cart = Cart(user_id=current_user_id)
#         db.session.add(cart)  # Añadir el carrito a la sesión
#         db.session.commit()  # Cometer los cambios a la base de datos correctamente

#     # Verificar si el producto ya está en el carrito
#     cart_item = CartItems.query.filter_by(cart_id=cart.id, product_id=product_id).first()

#     if cart_item:
#         # Si ya está en el carrito, solo actualizar la cantidad
#         cart_item.quantity += quantity
#     else:
#         # Si no está en el carrito, agregarlo
#         new_item = CartItems(cart_id=cart.id, product_id=product_id, quantity=quantity)
#         db.session.add(new_item)

#     db.session.commit()  # Asegurarse de hacer commit después de modificar la base de datos

#     return jsonify({"message": "Producto agregado al carrito exitosamente"}), 201


@api.route('/cart', methods=['GET'])
@jwt_required()
def get_cart():
    current_user_id = get_jwt_identity()
    cart_items = Cart.query.filter_by(user_id=current_user_id).all()

    if not cart_items:
        return jsonify({"message": "El carrito está vacío"}), 404

    return jsonify([{
        "id": item.id,
        "product_id": item.product_id,
        "product_name": item.product.name,
        "quantity": item.quantity,
        "price": item.product.price
    } for item in cart_items]), 200


@api.route('/category', methods=['POST'])
def create_category():
    try:
        data = request.get_json()
        name = data.get('name')

        if not name:
            return jsonify({"error": "Nombre de la categoría es requerido"}), 400

       
        new_category = Category(name=name)
        db.session.add(new_category)
        db.session.commit()

        return jsonify({"message": "Categoría creada con éxito", "id": new_category.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/category', methods=['GET'])
def get_categories():
    try:
        categories = Category.query.all()
        categories_data = [{"id": category.id, "name": category.name} for category in categories]
        return jsonify(categories_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/category/<int:id>', methods=['GET'])
def get_category(id):
    try:
        category = Category.query.get(id)
        if not category:
            return jsonify({"error": "Categoría no encontrada"}), 404
        
        return jsonify({"id": category.id, "name": category.name}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/category/<int:id>', methods=['PUT'])
def update_category(id):
    try:
        category = Category.query.get(id)
        if not category:
            return jsonify({"error": "Categoría no encontrada"}), 404

        data = request.get_json()
        name = data.get('name')

        if name:
            category.name = name

        db.session.commit()
        return jsonify({"message": "Categoría actualizada con éxito"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api.route('/category/<int:id>', methods=['DELETE'])
def delete_category(id):
    try:
        category = Category.query.get(id)
        if not category:
            return jsonify({"error": "Categoría no encontrada"}), 404
        
        db.session.delete(category)
        db.session.commit()

        return jsonify({"message": "Categoría eliminada con éxito"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@api.route('/order/create', methods=['POST'])
@jwt_required()
def create_order():
    user_id = get_jwt_identity()
    data = request.json

    try:
        cart_items = data.get('cart_items', [])
        sub_amount = sum(item['price'] * item['quantity'] for item in cart_items)
        tax = round(sub_amount * 0.1, 2)  # Supongamos un 10% de impuestos
        total_amount = round(sub_amount + tax, 2)

        # Crear la orden
        new_order = Order(
            user_id=user_id,
            status="pending",
            sub_amount=sub_amount,
            tax=tax,
            total_amount=total_amount
        )
        db.session.add(new_order)
        db.session.commit()

        # Crear los detalles de la orden
        for item in cart_items:
            order_detail = Order_details(
                order_id=new_order.id,
                product_id=item['product_id'],
                price=item['price'],
                quantity=item['quantity'],
                amount=item['price'] * item['quantity'],
                status="pending"
            )
            db.session.add(order_detail)

        db.session.commit()

        return jsonify({"message": "Orden creada exitosamente", "order_id": new_order.id}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@api.route('/product/category/<int:category_id>', methods=['GET'])
def get_products_by_category(category_id):
    try:
        products = Product.query.filter_by(category_id=category_id).all()
        
        # Verificar qué productos se obtuvieron
        print(f"Productos encontrados para categoría {category_id}: {products}")
        
        if not products:
            return jsonify({"message": "No products found for this category"}), 404
        
        products_list = [product.serialize() for product in products]
        return jsonify(products_list), 200
    except Exception as e:
        api.logger.error(f"Error getting products by category {category_id}: {str(e)}")
        return jsonify({"error": "An error occurred while fetching products"}), 500







