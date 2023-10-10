import pymongo

myclient = pymongo.MongoClient("mongodb+srv://data78966:FbHlEAqwiW6gqfj1@cluster0.7rkjs.mongodb.net/")
mydb = myclient["mydatabase"]
mycol = mydb["API"]
