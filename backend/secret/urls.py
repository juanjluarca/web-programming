from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SecretViewSet

router = DefaultRouter()
router.register(r'secrets', SecretViewSet, basename='secret')

urlpatterns = [
    path('', include(router.urls)),
]