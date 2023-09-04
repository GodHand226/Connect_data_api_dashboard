from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from api.user.models import User
# Create your views here.
class DashboardViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):

    def list(self, request, *args, **kwargs):
        return Response("9b212709a28eac924b262a2fd6fdb66cd0f3ec6c7ef587e90e36dfdfbe97959b", status.HTTP_200_OK)
