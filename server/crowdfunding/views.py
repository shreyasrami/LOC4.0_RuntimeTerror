from email.policy import HTTP
from sys import exec_prefix
from django.http import JsonResponse
from django.shortcuts import render
from .models import *
from rest_framework import generics
from .serializers import *
from .permissions import IsAuthenticatedAndIsNGO
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK
import json
# Create your views here.


class CrowdFunding(generics.GenericAPIView):
    permission_classes = (IsAuthenticated)
    serializer_class = CreateFundingSerializer

    def post(self, request, *args, **kwargs):
        serializer = CreateFundingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # data = {
            #     # "funding_id":  fund.creator_id.id,
            #     "creator_id": fund.creator_id,
            #     # "creator_fname": fund.creator_id.fname,
            #     # "creator_lname": fund.creator_id.lname,
            #     "type": fund.type,
            #     "fund_cause": fund.fund_cause,
            #     "phone_number": fund.phone_number,
            #     "total_fund": fund.total_fund,
            #     "amount_raise": fund.amount_raise,
            #     "description": fund.description,
            #     "image": fund.image.path,
            #     "is_closed": fund.is_closed,
            #     "is_verified": fund.is_verified,
            # }
            return JsonResponse({"success": True, "message": 'CrowdFunding Created successfully'}, status=HTTP_200_OK)

        else:
            return JsonResponse({"success": False, "message": "Please try again later"}, status=HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        data = json.loads(json.dumps(request.GET))
        fundings = []
        try:
            getFunding = list(Funding.objects.filter(
                creator_id=data['ngo_id']).values())
            # getFunding = Funding.objects.filter(creator_id=data['ngo_id'])
            # for fund in getFunding:
            #     funding = {}
            #     funding['id'] = fund.id
            #     funding['creator_id'] = fund.creator_id.id
            #     funding['creator_email'] = fund.creator_id.email
            #     funding['creator_fname'] = fund.creator_id.fname
            #     funding['craetor_lname'] = fund.creator_id.lname
            #     funding['type'] = fund.type
            #     funding['fund_cause'] = fund.fund_cause
            #     funding['phone_number'] = fund.phone_number
            #     funding['total_fund'] = fund.total_fund
            #     funding['amount_raise'] = fund.amount_raise
            #     funding['description'] = fund.description
            #     funding['image'] = fund.image
            #     funding['is_closed'] = fund.is_closed
            #     funding['is_verified'] = fund.is_verified
            #     fundings.append(funding)
            # print(fundings)
            return JsonResponse({"success": True, "data": getFunding}, status=HTTP_200_OK)
        except Funding.DoesNotExist:
            return JsonResponse({"success": False, "data": fundings}, status=HTTP_200_OK)


class FundingUpdate(generics.GenericAPIView):
    permission_class = (IsAuthenticated)
    serializer_class = UpdateFundingSerializer

    def post(self, request, *args, **kwargs):
        serializer = UpdateFundingSerializer(data=request.data)
        fundings = []
        if serializer.is_valid():
            # fund_update = serializer.save()
            serializer.save()
            # print(fund_update)
            # for fund in fund_update:
            #     funding = {}
            #     funding['funding_id'] = fund.funding_id.id
            #     funding['message'] = fund.message
            #     funding['message_date'] = fund.message_date
            #     fundings.append(funding)
            return JsonResponse({"success": True, "message": "Update added"}, status=HTTP_200_OK)
        else:
            return JsonResponse({"success": False, "funding_update": fundings, "message": "Please try again after sometime"}, status=HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        data = json.loads(json.dumps(request.GET))
        print(data)
        try:
            funding_update = FundingUpdates.objects.filter(
                funding_id=data['funding_id'])
            fundingUpdate = []
            for fund in funding_update:
                funding = {}
                funding['funding_update_id'] = fund.id
                funding['fundind_id'] = fund.funding_id.id
                funding['message'] = fund.message
                funding['message_timestamp'] = fund.message_date
                fundingUpdate.append(funding)
            return JsonResponse({"success": True, "fundingUpdate": fundingUpdate}, status=HTTP_200_OK)
        except FundingUpdates.DoesNotExist:
            return JsonResponse({"success": False, "fundingUpdate": fundingUpdate}, status=HTTP_200_OK)


class FundingComment(generics.GenericAPIView):
    permission_class = (IsAuthenticated)
    serializer_class = CommentFundingSerializer

    def post(self, request, *args, **kwargs):
        data = json.loads(json.dumps(request.data))

        comment_fund = []
        serializer = CommentFundingSerializer(data=data)
        if serializer.is_valid():
            # comment_funding = serializer.save()
            serializer.save()

            # for funding in comment_funding:
            #     fund = {}
            #     fund['funding_id'] = funding.funding_id
            #     fund['user_id'] = funding.user_id
            #     fund['message'] = funding.message
            #     fund['message_date'] = funding.message_date
            #     comment_fund.append(fund)
            return JsonResponse({"success": True, "message": "Comment added"}, status=HTTP_200_OK)
        else:
            return JsonResponse({"success": False, "message": "Something went wrong try again after sometime"}, status=HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        data = json.loads(json.dumps(request.GET))
        funding = []
        try:
            funding_comment = FundingComments.objects.filter(
                funding_id=data['funding_id'])
            print(funding_comment)
            for fund in funding_comment:
                fundings = {}
                fundings['funding_id'] = fund.funding_id.id
                fundings['user_id'] = fund.user_id.id
                fundings['message'] = fund.message
                fundings['message_date'] = fund.message_date
                funding.append(fundings)
            return JsonResponse({"success": True, "commentFunding": funding}, status=HTTP_200_OK)
        except FundingComments.DoesNotExist:
            return JsonResponse({"success": False, "commentFunding": funding}, status=HTTP_200_OK)
