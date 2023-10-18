from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from api.user.models import User

class ResetPasswordViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        email = request.data.get("email", None)
        password = request.data.get("password", None)
        user = User.objects.get(email=email)
        if not user:
            return Response({
                "success": False,
                "msg": "Email does not exist",
            }, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(password)
        user.save()
        return Response({
                "success": True,
                "msg": "Reset Successfully",
            }, status=status.HTTP_200_OK)
