from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from api.authentication.models import ActiveSession
from api.authentication.viewsets.mongoconnect import mycol
from django.http import JsonResponse
from datetime import datetime
import hashlib
import json

def key_generator():
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    api_key = hashlib.sha256(dt_string.encode()).hexdigest()
    return api_key

class RotateViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        user = request.user
        new_key = key_generator()
        newvalues = { "$set": { "API_KEY": new_key } }
        query = {"email" : user.email}
        
        mycol.update_one(query, newvalues)
        return Response({"success": True, "key": new_key}, status=status.HTTP_200_OK)
