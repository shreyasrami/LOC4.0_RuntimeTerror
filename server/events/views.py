import imp
import re
from django.shortcuts import render
from .serializers import EventSerializer, EventRegisterSerializer
from .models import Event, EventRegister
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from account.models import User

# Create your views here.


class MyEventsView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def get(self, request, *args, **kwargs):
        creator = User.objects.get(email=request.user)
        events = list(Event.objects.filter(creator_id=creator).values())
        return Response(events)


class EventView(generics.GenericAPIView):
    # permission_classes = [IsAuthenticated,]
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def get(self, request, *args, **kwargs):
        events = list(Event.objects.all().values())
        return Response(events)

    def post(self, request, *args, **kwargs):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Event successfully created'})
        else:
            return Response(serializer.errors)


class EventRegisterView(generics.GenericAPIView):
    # permission_classes = [IsAuthenticated,]
    serializer_class = EventRegisterSerializer
    queryset = EventRegister.objects.all()

    def get(self, request, *args, **kwargs):
        registrations = list(EventRegister.objects.all().values())
        return Response(registrations)

    def post(self, request, *args, **kwargs):
        serializer = EventRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Slot booked for the event'})
        else:
            return Response(serializer.errors)
