from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from api.authentication.models import ActiveSession
from api.authentication.viewsets.mongoconnect import mycol
from django.http import JsonResponse
import json

class ApiViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        user = request.user
        res = mycol.find_one({"email" : user.email})
        data = {k:str(v) for k, v in res.items()}
        return JsonResponse(data, status=status.HTTP_200_OK)
