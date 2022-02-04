from flask import Flask, jsonify, request
from flask_cors import CORS
import json


data= {
    "products": [
        {
            "name": 'Nike Slim Shirt',
            "slug": 'nike-slim-shirt',
            "category": 'shirts',
            "image": '/images/nike_shirt.jpeg',
            "price": '$120',
            "brand": 'Nike',
            "countInStock": "10",
            "rating": "4.5",
            "numReviews": "10",
            "description": 'high quality shirt'
        },
         { "name": 'Reebok Slim Shirt',
            "slug": 'reebok-slim-shirt',
            "category": 'shirts',
            "image": '/images/reebok_shirt.jpeg',
            "price": '$120',
            "brand": 'Reebok',
            "countInStock": "1",
            "rating": "4.5",
            "numReviews": "10",
             "description": 'high quality reebok'
         }
        ]
}


api = Flask(__name__)
CORS(api)


@api.route('/api/products')
def products():
    return json.dumps(data)
