from django.urls import path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from .views import RegisterUserView, LoginUserView, UserDetailsView



urlpatterns = [

    path('register/', RegisterUserView.as_view(),name='register_user'),
    path('login/', LoginUserView.as_view(), name='token_obtain_pair'),
    path('user-details/<user_id>', UserDetailsView.as_view(), name='user_details'),
]
