import pymongo

myclient = pymongo.MongoClient("mongodb+srv://mangesh:qetBL9rmcmb2Zo1L@cluster1.iurr8uo.mongodb.net/")
mydb = myclient["API"]
mycol = mydb["api_info"]
