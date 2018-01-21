from flask import Flask, request
import flask
from subprocess import Popen, PIPE, call
import psycopg2
import arky.rest

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/get/<key>')
def get(key):
    # fetch off ipfs
    if(key.isalnum()):
        print(key)
        p = Popen(['ipfs', 'cat', key], stdin=PIPE, stdout=PIPE, stderr=PIPE)
        output, err = p.communicate(b" ")
        rc = p.returncode
        resp = flask.Response(output)
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
    else:
        return 'error'

@app.route('/push', methods=['GET', 'POST'])
def push():
    if request.method == 'POST':
        p = Popen(['ipfs', 'add'], stdin=PIPE, stdout=PIPE, stderr=PIPE)
        output, err = p.communicate(request.form['data'].encode())
        rc = p.returncode
        resp = flask.Response(output.split(" ")[1])
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
    else:
        return 'Invalid request'



def getIPFSKeyFromBlockchain(id):
    conn = psycopg2.connect("dbname=ark_devnet user=postgres")
    cur = conn.cursor()
    cur.execute('SELECT * FROM transactions ORDER BY timestamp DESC LIMIT 1 WHERE vendorField LIKE "1%";')
    a = cur.fetchone()
    senderId = a[6]
    recipientId = a[7]
    cur.execute('SELECT * FROM transactions ORDER BY timestamp DESC LIMIT 1 WHERE vendorField LIKE "2%" AND senderId="%s" AND recipientId = "%s";' % (recipientId, senderId))
    b = cur.fetchone()
    vendorField = a[13][1:]
    cur.close()
    conn.close()
    return vendorField

def putIPFSKeyToBlockchain(id, ipfskey):
    
    return 0

@app.route('/getLatest/<id>')
def getFileFromNHS(id):
    # 	get latest ipfs key
    a = getIPFSKeyFromBlockchain(id)
    return get(a)

@app.route('/pushToChain', methods=['GET', 'POST'])
def putFileToNHS():
    if request.method == 'POST':
        p = Popen(['ipfs', 'add'], stdin=PIPE, stdout=PIPE, stderr=PIPE)
        output, err = p.communicate(request.form['data'].encode())
        rc = p.returncode
        ipfskey = output.split(" ")[1]
        res = putIPFSKeyToBlockchain(nhsnum, ipfskey)
        if res == 0:
            resp = flask.Response("Success")
        else:
            resp = flask.Response("Error")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
    else:
        return 'Invalid request'

@app.route('/test')
def test():
    return '<form action="/push" method="post"><input type="text" name="data"><input type="submit"></form>'
