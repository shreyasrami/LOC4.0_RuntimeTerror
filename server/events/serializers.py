from re import U
from .models import Event, EventRegister
from rest_framework import serializers
from account.models import User



class EventSerializer(serializers.ModelSerializer):
    creator_id = serializers.IntegerField(required=True,write_only=True)

    class Meta:
        model = Event
        fields = ['id', 'creator_id', 'type', 'offline', 'event_date','event_time','event_location','event_description','event_name','event_duration','event_image']
    
    def create(self,validated_data):
        creator = User.objects.get(id=validated_data['creator_id'])
        validated_data['creator_id'] = creator
        return Event.objects.create(**validated_data)


class EventRegisterSerializer(serializers.ModelSerializer):
    event_id = serializers.IntegerField(required=True,write_only=True)
    event_user = serializers.IntegerField(required=True,write_only=True)

    class Meta:
        model = EventRegister
        fields = ['id', 'event_user', 'event_id']

    def create(self,validated_data):
        user = User.objects.get(id=validated_data['event_user'])
        event_id = Event.objects.get(id=validated_data['event_id'])
        validated_data['event_id'] = event_id
        validated_data['event_user'] = user
        return EventRegister.objects.create(**validated_data)

