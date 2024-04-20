URL To Get Ether Price = 43.204.238.101:3000/GetEtherPrices

URL To Get User Transactions = 43.204.238.101:3000/getCrytoTransactions/0xce94e5621a5f7068253c42558c147480f38b5e0d

URL To Get User Balance = 43.204.238.101:3000/getUserBalance/0xce94e5621a5f7068253c42558c147480f38b5e0d

Response Examples:
1)GET EtherPrice: The price get updated in the database every 10 minutes.There is no response send in Postman. It simply enters updated price.

{"_id":{"$oid":"6622fe7ae29f830042fb0a07"},
"price":{"$numberInt":"254133"},
"timestamp":{"$date":{"$numberLong":"1713569402046"}},
"__v":{"$numberInt":"0"}}


2)GET User Transactions:

[
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
    },]


3)GET User Balances:

{
    "address": "0xce94e5621a5f7068253c42558c147480f38b5e0d",
    "balance": "40201916993711776",
    "etherPrice": 254400
}
