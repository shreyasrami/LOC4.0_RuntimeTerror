from attr import validate
from rest_framework import serializers
from .models import *


class CreateFundingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Funding
        fields = ['type', 'fund_cause', 'phone_number', 'total_fund',
                  'amount_raise', 'description', 'image', 'is_closed', 'is_verified', 'ngo_certificate']

    def create(self, validated_data):
        creator = User.objects.get(validated_data['creator_id'])

        fund = Funding.objects.create(
            creator_id=creator,
            type=validated_data['type'],
            fund_cause=validated_data['fund_cause'],
            phone_number=validated_data['phone_number'],
            total_fund=validated_data['total_fund'],
            amount_raise=validated_data['amount_raise'],
            description=validated_data['description'],
            image=validated_data['image'],
            is_closed=validated_data['is_closed'],
            is_verified=validated_data['is_verified'],
            ngo_certificate=validated_data['ngo_certificate']
        )
        return fund


class UpdateFunding(serializers.ModelSerializer):

    class Meta:
        model = FundingUpdates
        fields = '__all__'

    def create(self, validated_data):
        funding = Funding.objects.get(
            funding_id=validated_data['funding_id'])
        validated_data['funding_id'] = funding
        return FundingUpdates.objects.create(**validated_data)


class CommentFunding(serializers.ModelSerializer):

    class Meta:
        model = FundingComments
        fields = '__all__'

    def create(self, validated_data):
        funding = Funding.objects.get(funding_id=validated_data['funding_id'])
        user_id = User.objects.get(id=validated_data['user_id'])
        validated_data['funding_id'] = funding
        validated_data['user_id'] = user_id
        return FundingComments.objects.create(**validated_data)
