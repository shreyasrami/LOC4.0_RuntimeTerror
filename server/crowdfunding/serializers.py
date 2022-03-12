from attr import validate
from rest_framework import serializers
from .models import *


class CreateFundingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Funding
        fields = ['creator_id', 'type', 'fund_cause', 'phone_number', 'total_fund',
                  'amount_raise', 'description', 'image', 'is_closed', 'is_verified', 'ngo_certificate']

    def create(self, validated_data):
        creator = User.objects.get(id=validated_data['creator_id'].id)
        validated_data['created_id'] = creator
        fund = Funding.objects.create(
            creator_id=validated_data['creator_id'],
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


# class FundingCrowdSerializer(serializer.ModelSerializer):
#     image_url = serializers.SerializerMethodField('get_image_url')

#     class Meta:
#         model = Funding
#         fields = ['creator_id', 'type', 'fund_cause', 'phone_number', 'total_fund',
#                   'amount_raise', 'description', 'image', 'is_closed', 'is_verified', 'ngo_certificate', 'image']

#     def get_image_url(self, obj):
#         request = self.context.get("request")
#         return request.build_absolute_uri(obj.image.url)


class UpdateFundingSerializer(serializers.ModelSerializer):

    class Meta:
        model = FundingUpdates
        fields = '__all__'

    def create(self, validated_data):
        funding = Funding.objects.get(
            id=validated_data['funding_id'].id)
        validated_data['funding_id'] = funding
        return FundingUpdates.objects.create(**validated_data)


class CommentFundingSerializer(serializers.ModelSerializer):

    class Meta:
        model = FundingComments
        fields = '__all__'

    def create(self, validated_data):
        funding = Funding.objects.get(id=validated_data['funding_id'].id)
        user_id = User.objects.get(id=validated_data['user_id'].id)
        validated_data['funding_id'] = funding
        validated_data['user_id'] = user_id
        return FundingComments.objects.create(**validated_data)
