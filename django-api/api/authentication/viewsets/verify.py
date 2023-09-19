import pymongo
import requests
import hashlib
import json
from datetime import datetime
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from api.user.models import User


def VerifyOTP(code, state):
    print(code)
    print(state)
    payload = 'OTP='+ code + '&state_id=' + state
    headers = {
        'X-API-Key': '1b7d6f1b-ea24-4408-ac36-90b40d5a71fd',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    res = requests.post("https://api.mojoauth.com/users/emailotp/verify", data=payload, headers = headers)
    print(res.status_code)
    print(res.text)
    if res.status_code == 200:
        rs = json.loads(res.text)
        email = rs["user"]["identifier"]
        x = User.objects.get(email=email)
        x.is_verified = True
        x.save()
        return True
    return False

class VerifyViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        code = data["code"]
        stateID = data["state_id"]
        if VerifyOTP(code, stateID) == True:
            return Response(
            {
                "success": True,
                "msg": "Verify Successfully",
            },
            status=status.HTTP_200_OK,
            )
        return Response(
            {
                "success": False,
                "msg": "Verification Failed",
            },
            status=status.HTTP_400_BAD_REQUEST,
            )
