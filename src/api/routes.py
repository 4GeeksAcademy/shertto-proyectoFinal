"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token


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
        return jsonify({"msg": "this is not the password"}),401
    
    access_token = create_access_token(identity=email)
    return jsonify({"access_token": access_token})

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
        access_token = create_access_token(identity=email)
        return jsonify({"access_token": access_token})


