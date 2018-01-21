import arky.rest
import requests
arky.rest.use("dark")

thisSecret = "gadget shoulder napkin betray argue any title nice gadget divert slam involve"
thisKeys = arky.core.crypto.getKeys(thisSecret)
thisPK = thisKeys['publicKey']
thisAddress = arky.core.crypto.getAddress(thisPK)
stdTransaction = 100000000
print("Secret: " + thisSecret)
print("PK: " + thisPK)
print("Address: " + thisAddress)

'Get records in sets of 50 in JSON format'
def getTransactions(offset):
    headers = {
        'accept': 'application/json',
        'nethash': '6e84d08bd299ed97c212c886c98a57e36545c8f5ca7eeae63a8bd62d8988',
        'version': '1.0.1',
        'port': '4001',
    }
    params = (
        ('offset', '0'),
        ('vendorField', 'Thank you for voting.'),
    )
    response = requests.get('http://138.197.165.165:4002/api/transactions', headers=headers, params=params)
    return response.text

def getLatestHashCode(ID):
    'Get the transactions in sets of 50 in json format.'
    for i in range(1,10):
        getTransactions(i*50)

def askOwnership(ID):
    'implement this'
    return 0

def giveOwnership(ownSecret, recipientAddress, ID):
    'Get the latest hash code belonging to ID'
    hashCode = getLatestHashCode(ID)
    if (hashCode == ""):
        return

    return arky.core.sendToken(amount=100000000, recipientId=recipientAddress,secret=ownSecret,
                               vendorField=getLatestHashCode(ID))

'Returns the blockchain address of an NHS ID'
def secretToAddress(NHSID):
    keys = arky.core.crypto.getKeys(NHSID)
    publicKey = keys["publicKey"]
    address = arky.core.crypto.getAddress(publicKey)
    return address

'print(giveOwnership(thisSecret, secretToAddress("mule pupil peace among doll spot half define dizzy pole village beef"), "Lex van der Stoep"))'
print(getTransactions(0))
getLatestHashCode(0)
print("done")