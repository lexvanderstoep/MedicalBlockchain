# Medical Blockchain
*A project for Cambridge Hackathon 2018*

**Medical Blockchain** is a distributed file sharing system for medical services.
It combines the powers of blockchain technology (powered by ARK) and the Interplanetary File System.

## Use case
A medical service (e.g., a general practitioner) owns medical records of his patients. 
Nowadays, to share that data with another medical service, it requires physical file sharing or some other unsafe or slow form of access approval.
Medical Blockchain uses the IPFS to have a shared, decentralized file system containing all the medical records. 
Access to a medical record can then be requested using a transaction on the blockchain, permission is given likewise.
The use of the blockchain allows the file sharing system to be supervised.

## Features
* The medical records are stored securely using the IPFS.
* A medical record is owned by exactly one person at a time. 
* The owner of the medical record of a patient are by reading the ledger and following the transaction for his/her NHS ID. 
Permission can then be requested by asking the owner of that medical record to transfer the access codes.
* The blockchain is called MedNet, a private blockchain used solely for the Medical Blockchain project.
* Medical records are stored using the FHIR format (standardised JSON for medical records).

## Implementation
A website is provided which illustrates the way medical services can interact with the system.
It shows the medical records of patients managed by a particular medical service. These records can be viewed, and updated.
It contains example NHS records provided by TTP.
