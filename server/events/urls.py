import imp
from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter


urlpatterns = [
    
    path('',EventView.as_view(),name='events'),
    path('myevents/',MyEventsView.as_view(),name='myevents'),
    path('registrations/',EventRegisterView.as_view(),name='registrations')
    
]    