import arky.rest
arky.rest.use("dark")

thisSecret = "gadget shoulder napkin betray argue any title nice gadget divert slam involve"
thisKeys = arky.core.crypto.getKeys(thisSecret)
thisPK = thisKeys['publicKey']
thisAddress = arky.core.crypto.getAddress(thisPK)
stdTransaction = 100000000
print("Secret: " + thisSecret)
print("PK: " + thisPK)
print("Address: " + thisAddress)

def getLatestHashCode(ID):
    'TODO: implement this properly'
    if (ID == "Lex van der Stoep"):
        return "Lex' hash"
    else:
        return ""

def askOwnership(ID):
    'implement this'

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

print(giveOwnership(thisSecret, secretToAddress("mule pupil peace among doll spot half define dizzy pole village beef"), "Lex van der Stoep"))