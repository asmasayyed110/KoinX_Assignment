

1)URL To Get User Transactions = 43.204.238.101:3000/getCrytoTransactions/0xce94e5621a5f7068253c42558c147480f38b5e0d

API Response Example:
{
    "status": 200,
    "message": "Successfully fetched all transactions of user",
    "Transactions":[
    {
        "blockNumber": "18504760",
        "timeStamp": "1699174607",
        "hash": "0xd9455dcf0bac1228bd831487e21584997e0615f7f1f76dd65663c38e844c3308",
        "nonce": "1624197",
        "blockHash": "0x4906433ada4b356ed154ac3c8ad8b56795972be3cdfd5eca893dd10958569a05",
        "transactionIndex": "84",
        "from": "0x974caa59e49682cda0ad2bbe82983419a2ecc400",
        "to": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
        "value": "20698300000000000",
        "gas": "105000",
        "gasPrice": "15387090537",
        "isError": "0",
        "txreceipt_status": "1",
        "input": "0x",
        "contractAddress": "",
        "cumulativeGasUsed": "7451397",
        "gasUsed": "21000",
        "confirmations": "1189286",
        "methodId": "0x",
        "functionName": ""
    },]}

Database Response Format:
{
    "_id":{"$oid":"662175fafdffeb75579cb682"},
    "blockNumber":"15143026",
    "hash":"0xea9426ac679be9775f81f0f10a27b78b920891d48422870a5477db31681248f1",
    "from":"0x8a8382e0dca6586569e33958f446b129d8e8730d",
    "to":"0xce94e5621a5f7068253c42558c147480f38b5e0d",
    "value":"10500000000000000",
    "__v":{"$numberInt":"0"}
}

2)URL To Get User Balance & Ether Price= 43.204.238.101:3000/getUserBalance/0xce94e5621a5f7068253c42558c147480f38b5e0d

API Response Example:
{
    "status": 200,
    "message": "Successfully fetched balance of user & current Ether price",
    "address": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
    "balance": "40201916993711776",
    "etherPrice": 255648
}

Database Response Example:
{
    "_id":{"$oid":"66234b40598db56798f1392a"},
"Address":"0xce94e5621a5f7068253c42558c147480f38b5e0d",
"balance":"40201916993711776",
"etherPrice":{"$numberInt":"255460"},
"__v":{"$numberInt":"0"}
}

3)URL To Get Ether Price = 43.204.238.101:3000/GetEtherPrices

Note:The updated price gets stored in the database every 10 minutes.There is no response send in this api as scheduler will stop.

Database Format:
{"_id":{"$oid":"6621771079759dc3e697cbd2"},
"price":{"$numberInt":"256060"},
"timestamp":{"$date":{"$numberLong":"1713469200965"}},
"__v":{"$numberInt":"0"}}






