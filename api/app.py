# from flask import Flask, jsonify, request
# from flask_socketio import SocketIO, emit

# app = Flask(__name__)
# socketio = SocketIO(app)

# notifications = []

# @app.route('/api/notifications', methods=['GET'])
# def get_notifications():
#     return jsonify(notifications)

# @app.route('/api/notifications', methods=['POST'])
# def add_notification():
#     data = request.json
#     notifications.append(data)
#     socketio.emit('new_notification', data)
#     return jsonify(data), 201

# @socketio.on('connect')
# def handle_connect():
#     print('Client connected')

# if __name__ == '__main__':
#     socketio.run(app)


# from flask import Flask, jsonify, request
# from flask_pymongo import PyMongo
# from flask_socketio import SocketIO, emit
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # MongoDB configuration
# app.config["MONGO_URI"] = "mongodb://localhost:27017/parking_db"
# mongo = PyMongo(app)
# socketio = SocketIO(app)

# # Sample data for parking spots
# parking_spots = [
#     {"id": 1, "location": "A1", "available": True},
#     {"id": 2, "location": "A2", "available": True},
#     {"id": 3, "location": "A3", "available": False},
#     {"id": 4, "location": "B1", "available": True},
# ]

# @app.route('/api/parking', methods=['GET'])
# def get_parking_spots():
#     return jsonify(parking_spots)

# @app.route('/api/reserve', methods=['POST'])
# def reserve_parking():
#     data = request.json
#     spot_id = data.get('id')

#     # Check if the spot is available
#     for spot in parking_spots:
#         if spot['id'] == spot_id and spot['available']:
#             spot['available'] = False
#             # Notify all clients about the new reservation
#             socketio.emit('new_reservation', spot)
#             return jsonify(spot), 201
#     return jsonify({"error": "Spot not available"}), 400

# @socketio.on('connect')
# def handle_connect():
#     print('Client connected')

# if __name__ == '__main__':
#     socketio.run(app)


from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://127.0.0.1:27017")
db = client["message"]  # Database name
notifications_collection = db["notifications"]  # Collection for notifications


# Endpoint to get all notifications
@app.route("/notifications", methods=["GET"])
def get_notifications():
    # Fetch all notifications, exclude the MongoDB `_id` field
    notifications = list(notifications_collection.find({}, {"_id": False}))
    return jsonify(notifications)


# Endpoint to create a new notification
@app.route("/notifications", methods=["POST"])
def create_notification():
    # Receive the JSON data from the client
    data = request.json
    notifications_collection.insert_one(data)  # Insert data into the MongoDB collection
    return jsonify({"message": "Notification created"}), 201


if __name__ == "__main__":
    app.run(debug=True)
