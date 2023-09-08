import pymongo
from datetime import datetime
import hashlib
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
    info["Record"] = 100

    try:
        mycol.insert_one(info)
    except Exception as e:
        print(e)

class RegisterViewSet(viewsets.ModelViewSet):
    http_method_names = ["post"]
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        insert_api_info(user.email)        

        return Response(
            {
                "success": True,
                "userID": user.id,
                "msg": "The user was successfully registered",
            },
            status=status.HTTP_201_CREATED,
        )
