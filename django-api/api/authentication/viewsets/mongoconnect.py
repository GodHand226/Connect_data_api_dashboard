import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

print(os.getenv("DB_CONNECT_URL"))
myclient = pymongo.MongoClient(os.getenv("DB_CONNECT_URL"))
mydb = myclient["mydatabase"]
mycol = mydb["API"]
