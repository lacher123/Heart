import logging

try:
    import coloredlogs

    coloredlogs.install()
except ImportError:
    pass

logging.basicConfig(level=logging.INFO)
import warnings

warnings.filterwarnings("ignore")
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import base64
import json
import time
import io
import configparser
import os
import platform
from PIL import Image
import tensorflow as tf
import numpy as np
from flask import Flask, request
from flask_cors import CORS
import joblib
import sklearn

os.environ['CUDA_VISIBLE_DEVICES'] = '0'
os.environ['ADJUST_ANGLE'] = '1'
os.environ['CUTTHEBOARDERS'] = '1'

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'


@app.after_request
def add_headers(response):
    response.headers.add('Content-Type', 'application/json')
    response.headers.add('Access-Control-Allow-Origin', request.environ.get('HTTP_ORIGIN', '*'))
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,X-TOKEN,Access-Control-Allow-Origin')
    response.headers.add('Access-Control-Expose-Headers', 'Content-Type,Content-Length,Authorization,X-Pagination')
    return response


@app.route("/", methods=["POST"])
def root_endpoint():
    return json.dumps({'Status': 'Success'})


@app.route("/image", methods=["POST"])
def parse_request():
    if request.method == 'OPTIONS':
        return ""
    data = request.data
    json_data = json.loads(data)


    result = handler(b64_image, model)

    return result


def handler(request: str, model):
    """

    """
    print('Got request at port 5050')

    a = model.predict(request)
    return json.dumps(a)


def error_reply(msg: str):
    a = {'ErrorMsg': msg,
         'Status': 'Failure'
         }
    return a




if __name__ == '__main__':
    print("Start main")

    # conf = configparser.RawConfigParser()
    # conf.read("main.conf")

    # Грузим и греем модель для типов и углов
    print("Loading models ...")
    t = time.time()
    keras_model = tf.keras.models.load_model('DS/kears_model.h5')
    ensemble = joblib.load('DS/ensemble_model_with_nn.joblib')

    print("Models loading time : {}s".format(time.time() - t))

    print("Use HTTP transport at port 5050")
    app.run(host="0.0.0.0",
            port=5050,
            debug=True,
            use_reloader=False,
            threaded=True,
            # ssl_context=('cert.pem', 'key.pem'),
            )
