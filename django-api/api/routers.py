from api.authentication.viewsets import (
    RegisterViewSet,
    LoginViewSet,
    ActiveSessionViewSet,
    LogoutViewSet,
    ApiViewSet,
    PaymentViewSet,
    WebHookViewSet,
    VerifyViewSet,
    ResendViewSet
)
from rest_framework import routers
from api.user.viewsets import UserViewSet

router = routers.SimpleRouter(trailing_slash=False)

router.register(r"edit", UserViewSet, basename="user-edit")

router.register(r"register", RegisterViewSet, basename="register")

router.register(r"login", LoginViewSet, basename="login")

router.register(r"checkSession", ActiveSessionViewSet, basename="check-session")

router.register(r"logout", LogoutViewSet, basename="logout")

router.register(r"dashboard", ApiViewSet, basename="dashboard")

router.register(r"payment", PaymentViewSet, basename="payment")

router.register(r"webhook", WebHookViewSet, basename="webhook")

router.register(r"verify", VerifyViewSet, basename="verify")

router.register(r"resend", ResendViewSet, basename="resend")

urlpatterns = [
    *router.urls,
]
