import arky.rest
import requests
arky.rest.use("med")

thisSecret = "chapter index pilot job stumble lava seminar clown jealous front vote document"
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

def giveOwnership(ownSecret, recipientAddress, hashCode):
    'Get the latest hash code belonging to ID'
    hashCode = hashCodes.get(ID, "")
    if (hashCode == ""):
        return

    return arky.core.sendToken(amount=100000000*1000, recipientId=recipientAddress,secret=ownSecret,
                               vendorField=(str('2') + hashCode))

'Returns the blockchain address of a passphrase'
def secretToAddress(secret):
    keys = arky.core.crypto.getKeys(secret)
    publicKey = keys["publicKey"]
    address = arky.core.crypto.getAddress(publicKey)
    return address

print(giveOwnership("point ticket collect side grape daughter flat cook divert rural paddle swap", "DS6UtXXYos8j6iPh1iPKf86Vy1wzAaEGXD", "Lex van der Stoep"))
print(giveOwnership("point ticket collect side grape daughter flat cook divert rural paddle swap", "D9KpZz4Dp4uQQHWT1GSFVx4L19tmLZBhNP", "Lex van der Stoep"))
print(giveOwnership("point ticket collect side grape daughter flat cook divert rural paddle swap", "DCRrTwLcL2LzdXH9bn96VTEt8MFm3Pxkw9", "Lex van der Stoep"))


