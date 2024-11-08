"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, User, Product, Order, Category, Payment, Address
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

@app.route('/user', methods=['GET'])
def get_user():
    users = User.query.all()
    result = [user.serialize() for user in users]
    return jsonify(result), 200

@app.route('/product', methods=['GET'])
def get_product():
    people = Product.query.all()
    result = [product.serialize() for product in products]
    return jsonify(result), 200

@app.route('/order', methods=['GET'])
def get_order():
    people = Order.query.all()
    result = [order.serialize() for order in orders]
    return jsonify(result), 200

@app.route('/category', methods=['GET'])
def get_category():
    people = Category.query.all()
    result = [category.serialize() for category in categories]
    return jsonify(result), 200

@app.route('/payment', methods=['GET'])
def get_payment():
    people = Payment.query.all()
    result = [payment.serialize() for payment in payments]
    return jsonify(result), 200

@app.route('/address', methods=['GET'])
def get_address():
    people = Address.query.all()
    result = [address.serialize() for address in addresses]
    return jsonify(result), 200

@app.route('/user/<int:user_id>', methods=['GET'])
def get_user_id(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'error': 'Person not found'}), 404
    
# @app.route('/favorite/product/<int:product_id>', methods=['POST'])
# def favorite_product(product_id):
#     favorite = Favorite(user_id = 1, product_id = product_id)
#     db.session.add(favorite)
#     db.session.commit()
#     return jsonify(favorite.serialize()), 200

@app.route('/product/<int:product_id>', methods=['POST'])
def product(product_id):
    product = Product(user_id = 1, product_id = product_id)
    db.session.add(product)
    db.session.commit()
    return jsonify(product.serialize()), 200

@app.route('/category/<int:category_id>', methods=['POST'])
def category(category_id):
    category = Category(user_id = 1, category_id = category_id)
    db.session.add(category)
    db.session.commit()
    return jsonify(category.serialize()), 200

@app.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.filter(db.and_(user_id == 1, user_id == user_id)).first()
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'error': 'User not found'}), 404
    
@app.route('/favorite/product/<int:product_id>', methods=['DELETE'])
def delete_favorite(favorite_id):
    favorite = Favorite.query.filter(db.and_(Favorite.user_id == 1, Favorite.product_id == favorite_id)).first()
    if favorite:
        db.session.delete(favorite)
        db.session.commit()
        return jsonify(favorite.serialize()), 200
    else:
        return jsonify({'error': 'Product not found'}), 404
    
@app.route('/product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    favorite = Favorite.query.filter(db.and_(Favorite.user_id == 1, Favorite.product_id == product_id)).first()
    if favorite:
        db.session.delete(favorite)
        db.session.commit()
        return jsonify(favorite.serialize()), 200
    else:
        return jsonify({'error': 'Product not found'}), 404

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
