from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from api.authentication.models import ActiveSession
from coinbase_commerce.client import Client
from api.authentication.viewsets.mongoconnect import mycol
from django.http import HttpResponse
from core import settings
import logging

value = 0

class PaymentViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        data = request.data
        value = data["alignment"]
        print(value)
        client = Client(api_key=settings.COINBASE_COMMERCE_API_KEY)
        domain_url = 'http://localhost:3000/'
        product = {
        'name': 'Records' + str(value * 20),
        'description': str(value) + '$',
        'local_price': {
            'amount': str(value),
            'currency': 'USD'
        },
        'pricing_type': 'fixed_price',
        'redirect_url': domain_url + 'dashboard/',
        'cancel_url': domain_url + 'billing/',
        'metadata': {
            'customer_id': request.user.id if request.user.is_authenticated else None,
            'customer_username': request.user.username if request.user.is_authenticated else None,
        },
        }
        charge = client.charge.create(**product)
        return Response({"charge" : charge}, status=status.HTTP_200_OK)
