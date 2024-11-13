"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Order,Return,Order_details
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email",None)
    password = request.json.get("password",None)
    check_user = User.query.filter_by(email=email).first()

    if check_user is None:
        return jsonify({"msg": "doesnt exist"}),404
    
    if email != check_user.email or password != check_user.password:
        return jsonify({"msg": "clave o email incorrecto"}),401
    
    access_token = create_access_token(identity=check_user.id)
    return jsonify({ "token": access_token, "user_id":  check_user.id })

@api.route('/registre', methods=['POST'])
def signup():
    email =  request.json.get("email",None)
    password = request.json.get("password",None)
    is_active = request.json.get("is_active",None)
    user_exist = User.query.filter_by(email=email).first()

    if user_exist is None:
        new_user= User(email=email,password=password,is_active=is_active)
        db.session.add(new_user)
        db.session.commit()

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id }), 200



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