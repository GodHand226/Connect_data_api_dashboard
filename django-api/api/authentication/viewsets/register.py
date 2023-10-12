import pymongo
import requests
import hashlib
import json
from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from api.authentication.serializers import RegisterSerializer
from api.authentication.viewsets.mongoconnect import mycol


def key_generator():
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    api_key = hashlib.sha256(dt_string.encode()).hexdigest()
    return api_key

def insert_api_info(email):
    # myclient = pymongo.MongoClient("mongodb+srv://mangesh:qetBL9rmcmb2Zo1L@cluster1.iurr8uo.mongodb.net/")
    # mydb = myclient["API"]
    # mycol = mydb["api_info"]

    info = {}
    key = key_generator()
    info["email"] = email
    info["API_KEY"] = key
    info["Record"] = 25
    info["Usage"] = []
    info["idList"] = []

    try:
        mycol.insert_one(info)
    except Exception as e:
        print(e)

def SendOTP(mail):
    print(mail)
    payload = {
        "email": mail,
    }
    headers = {
        'X-API-Key': '1b7d6f1b-ea24-4408-ac36-90b40d5a71fd',
        'Content-Type': 'application/json'
    }
    res = requests.post("https://api.mojoauth.com/users/emailotp?language=en", data = json.dumps(payload), headers = headers)
    if res.status_code != 200:
        return ""
    else:
        result = json.loads(res.text)
        return result["state_id"]

class RegisterViewSet(viewsets.ModelViewSet):
    http_method_names = ["post"]
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        insert_api_info(user.email)
        res = SendOTP(user.email)    
        if res != "":
            return Response(
            {
                "success": True,
                "userID": res,
                "msg": "The user was successfully registered",
            },
            status=status.HTTP_200_OK,
            )
        return Response(
            {
                "success": False,
                "userID": "",
                "msg": "Error! Something went wrong",
            },
            status=status.HTTP_400_BAD_REQUEST,
            )
