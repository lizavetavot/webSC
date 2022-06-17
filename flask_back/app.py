# Import the required packages
import os
from flask import Flask, send_from_directory
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename;
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import Flask
from func import _add, first, second, getcodemkb, setcodemkb, delete_bd
from flask import send_from_directory
import json
app = Flask(__name__)
CORS(app)

@app.route('/files', methods=['POST'])
def upload_file():
    f = request.files['file']
    full_path = "med_files//" + f.filename
    f.save(full_path)
    print(f)
    _add(full_path)
    return "файл отправлен", 200

@app.route('/trees', methods=['GET'])
def trees():    
    treeD=first()
    json_string = json.dumps(treeD)
    return json_string, 200

@app.route('/treesmkb', methods=['GET'])
def treesmkb():    
    treeD=second()
    json_string = json.dumps(treeD)
    #print(json_string)
    return json_string, 200

@app.route('/getcodemkb', methods=['GET'])
def get_codemkb():    
    treeD=getcodemkb()
    json_string = json.dumps(treeD)
    #print(json_string)
    return json_string, 200

@app.route('/setcodemkb', methods=['POST'])
def set_codemkb():   
    data = json.loads(request.data)
    code=data["code"]
    name=data["name"]
    setcodemkb(code, name)
    #json_string = json.dumps(treeD)
    #print(json_string)
    return "", 200

@app.route('/funcdelete', methods=['GET'])
def func_delete():   
    delete_bd()
    return "", 200

@app.route('/uploads/<name>')
def download_file(name):
    return send_from_directory(app.config["UPLOAD_FOLDER"], name)

if __name__=='__main__':
    port = int(os.environ.get("PORT", "3000"))
    host = os.environ.get("HOST", "127.0.0.1")
    app.run(port=port, host=host)