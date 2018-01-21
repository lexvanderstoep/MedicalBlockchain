import arky.rest
import requests
arky.rest.use("dark")

thisSecret = "gadget shoulder napkin betray argue any title nice gadget divert slam involve"
thisKeys = arky.core.crypto.getKeys(thisSecret)
thisPK = thisKeys['publicKey']
thisAddress = arky.core.crypto.getAddress(thisPK)
hashCodes = {"Lex van der Stoep":"123456789"}
print("Secret: " + thisSecret)
print("PK: " + thisPK)
print("Address: " + thisAddress)

def askOwnership(ownSecret, recipientAddress, ID):
    return arky.core.sendToken(amount=100000000, recipientId=recipientAddress, secret=ownSecret,
                               vendorField=(str('1') + ID))

def giveOwnership(ownSecret, recipientAddress, ID):
    'Get the latest hash code belonging to ID'
    hashCode = hashCodes.get(ID, "")
    if (hashCode == ""):
        return

    return arky.core.sendToken(amount=100000000, recipientId=recipientAddress,secret=ownSecret,
                               vendorField=(str('2') + hashCode))

'Returns the blockchain address of a passphrase'
def secretToAddress(secret):
    keys = arky.core.crypto.getKeys(secret)
    publicKey = keys["publicKey"]
    address = arky.core.crypto.getAddress(publicKey)
    return address

'print(giveOwnership(thisSecret, secretToAddress("mule pupil peace among doll spot half define dizzy pole village beef"), "Lex van der Stoep"))'
print(giveOwnership("gadget shoulder napkin betray argue any title nice gadget divert slam involve",
                  secretToAddress("mule pupil peace among doll spot half define dizzy pole village beef"),
                   "Lex van der Stoep"))