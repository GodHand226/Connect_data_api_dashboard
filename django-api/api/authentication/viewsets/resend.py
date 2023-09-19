import pymongo
import requests
import hashlib
import json
from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

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

class ResendViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        data = request.data
        email = data["email"]
        print(email)
        res = SendOTP(email)
        if res != "":
            return Response(
            {
                "success": True,
                "userID": res,
                "msg": "Resend Successfully",
            },
            status=status.HTTP_200_OK,
            )
        return Response(
            {
                "success": False,
                "userID": res,
                "msg": "Error! Something went wrong",
            },
            status=status.HTTP_400_BAD_REQUEST,
            )
