"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Order, Return, Order_details
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
# import paypalrestsdk

api = Blueprint('api', __name__)



# Configuración de PayPal (sandbox para pruebas)
# paypalrestsdk.configure({
#     'mode': 'sandbox',  # Cambia a 'live' para producción
#     'client_id': 'AU1dWBeEAWpy3eV3ZOD9TnL-W6RxX10DA3XgyM9nLuRhgyv_Me582aRk7eGwLJ5q932mmRhtYdpDpcQ1',  
#     'client_secret': 'EIyaa_4QWSGH3KAvLIYhSV3y6qTQxaCuXgmpe789Bt8jgjpVh_4i0xv2wteYDIWlBvgVmm46UKVMViyt'  
# })

# Ruta de login
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    check_user = User.query.filter_by(email=email).first()

    if check_user is None:
        return jsonify({"msg": "doesn't exist"}), 404
    
    if email != check_user.email or password != check_user.password:
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




# Ruta de registro
@api.route('/registre', methods=['POST'])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", True)
    user_exist = User.query.filter_by(email=email).first()

    if user_exist is None:
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

# Ruta para ver el historial de órdenes
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

# Ruta para ver el historial de devoluciones
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

# Ruta para crear una devolución
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

# # Ruta para crear una orden de pago en PayPal
# @api.route('/paypal/create-order', methods=['POST'])
# @jwt_required()
# def create_paypal_order():
#     # Obtener la cantidad del pedido
#     data = request.get_json()
#     amount = data.get('amount')

#     if not amount:
#         return jsonify({"error": "Amount is required"}), 400

#     # Crear un objeto de pago en PayPal
#     payment = paypalrestsdk.Payment({
#         "intent": "sale",
#         "payer": {
#             "payment_method": "paypal"
#         },
#         "transactions": [{
#             "amount": {
#                 "total": str(amount), 
#                 "currency": "EU"
#             },
#             "description": "Compra en tu tienda ecommerce"
#         }],
#         "redirect_urls": {
#             "return_url": url_for('api.execute_paypal_payment', _external=True),
#             "cancel_url": url_for('api.cancel_paypal_payment', _external=True)
#         }
#     })

#     if payment.create():
#         # Redirigir a la URL de aprobación proporcionada por PayPal
#         approval_url = next(link.href for link in payment.links if link.rel == "approval_url")
#         return jsonify({
#             "approval_url": approval_url,  # URL de redirección
#             "payment_id": payment.id  # ID del pago
#         })
#     else:
#         return jsonify({"error": "Error creando el pago en PayPal"}), 500

# @api.route('/paypal/execute-payment', methods=['POST'])
# @jwt_required()
# def execute_paypal_payment():
#     # Recuperar paymentId y PayerID de la URL
#     data = request.get_json()
#     payment_id = data.get('paymentId')
#     payer_id = data.get('payerId')

#     if not payment_id or not payer_id:
#         return jsonify({"error": "PaymentId and PayerId are required"}), 400

#     # Buscar el pago en PayPal
#     payment = paypalrestsdk.Payment.find(payment_id)

#     if payment.execute({"payer_id": payer_id}):
#         # Aquí puedes actualizar el estado del pedido como "pagado"
#         return jsonify({"message": "Pago ejecutado exitosamente"}), 200
#     else:
#         return jsonify({"error": "Error al ejecutar el pago"}), 500

# @api.route('/paypal/cancel', methods=['GET'])
# def cancel_paypal_payment():
#     return jsonify({"message": "El pago fue cancelado por el usuario"}), 200


