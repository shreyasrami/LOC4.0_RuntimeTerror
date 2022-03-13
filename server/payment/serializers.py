from rest_framework import serializers
from account.models import User
from .models import Donation


class DonationSerializer(serializers.ModelSerializer):
    donation_date = serializers.DateTimeField(format="%d %B %Y %I:%M %p")

    class Meta:
        model = Donation
        fields = '__all__'
        depth = 2