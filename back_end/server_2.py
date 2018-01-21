from flask import Flask, request
import flask
from subprocess import Popen, PIPE, call
import psycopg2
import arky.rest
import json
import fhirclient.models.patient as p

alice = "physical credit typical broken meat hidden funny pumpkin pass decline network park"
bob = "rail million song dance robust flight april fresh detect reunion scorpion erupt"

secret = alice

arky.rest.use("med")

'Returns the blockchain address of a passphrase'
def secretToAddress(secret):
    keys = arky.core.crypto.getKeys(secret)
    publicKey = keys["publicKey"]
    address = arky.core.crypto.getAddress(publicKey)
    return address


def askOwnership(ownSecret, recipientAddress, ID):
    return arky.core.sendToken(amount=100000000, recipientId=recipientAddress, secret=ownSecret, vendorField=(str('1') + ID))

def giveOwnership(ownSecret, recipientAddress, ID, hashCode):
    'Get the latest hash code belonging to ID'
    return arky.core.sendToken(amount=100000000, recipientId=recipientAddress,secret=ownSecret, vendorField=(str('2') + ID + "." + hashCode))

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
    conn = psycopg2.connect("dbname=ark_mednet user=postgres")
    cur = conn.cursor()
    cur.execute('SELECT "senderId", "recipientId" FROM transactions WHERE "vendorField"=\'1'+id+'\' ORDER BY timestamp DESC LIMIT 1;')
    (senderId, recipientId) = cur.fetchone()
    print('SELECT "vendorField" FROM transactions WHERE "vendorField" LIKE \'2' + id + '.%\' AND "senderId"=\'' + recipientId + '\' AND "recipientId" = \'' + senderId + '\' ORDER BY timestamp DESC LIMIT 1 ')
    cur.execute('SELECT "vendorField" FROM transactions WHERE "vendorField" LIKE \'2' + id + '.%\' AND "senderId"=\'' + recipientId + '\' AND "recipientId" = \'' + senderId + '\' ORDER BY timestamp DESC LIMIT 1 ')
    b = cur.fetchone()
    vendorField = b[0].split(".")[1]
    print(vendorField)
    cur.close()
    conn.close()
    return vendorField

def putIPFSKeyToBlockchain(id, ipfskey):
    print(askOwnership(secret, secretToAddress(secret), id))
    print(giveOwnership(secret, secretToAddress(secret), id, ipfskey))
    return 0

@app.route('/getLatest/<id>')
def getFileFromNHS(id):
    # 	get latest ipfs key
    try:
        a = getIPFSKeyFromBlockchain(id)
        return get(a)
    except:
        resp = flask.Response("Error, not found")
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

@app.route('/pushToChain/<nhsnum>', methods=['GET', 'POST'])
def putFileToNHS(nhsnum):
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

@app.route('/addToRecord/<nhsnum>', methods=['GET', 'POST'])
def addToRecord(nhsnum):
    input = json.load(request.get_json(force=True))
    pjs = getFileFromNHS(nhsnum)
    patient = p.Patient(pjs)
    print(patient.name[0].given)
    # add to diagnosis part
    resp = flask.Response()
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/test')
def test():
    return '<form action="/push" method="post"><input type="text" name="data"><input type="submit"></form>'

@app.route('/test2/')
def test2():
    return '<form action="/pushToChain/111111112" method="post"><input type="text" name="data"><input type="submit"></form>'
