from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from flask_jwt_extended import create_access_token, get_jwt_identity, get_jwt, JWTManager, jwt_required, unset_jwt_cookies
from datetime import datetime, timedelta, timezone
import sqlite3


connection=sqlite3.connect('database.db')

connection.execute('CREATE TABLE user_data( id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)')
connection.close()

api = Flask(__name__)
CORS(api)

api.config["JWT_SECRET_KEY"] = 'this is secret key'
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)

@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response


@api.register('/register', methods=["POST"])

def register():

    try:
        firstName = request.json.get("firstName", None)
        LastName = request.json.get("lastName", None)
        email = request.json.get("email", None)
        email = request.json.get("password", None)

        with sql.connect('database.db') as conn:
            curr = conn.cursor
            curr.execute(("INSERT INTO user_data(firstName, lastName, email, password) VALUES (?,?,?,?)",(firstName,LastName,email,email) ))
            conn.commit()
            msg = "Record successfully added"
    except:
        conn.rollback()
        msg = "error in insert operation"
    finally:
        access_token = create_access_token(identity=email)
        response = {"access_token":access_token}
        conn.close()
        return response
        

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route('/profile')
@jwt_required()
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body


