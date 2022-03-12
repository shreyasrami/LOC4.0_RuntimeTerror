import email
import json

import environ
import razorpay
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Donation, Funding
from .serializers import DonationSerializer
from account.models import User

env = environ.Env()

environ.Env.read_env()


@api_view(['POST'])
def start_payment(request):

    amount = request.data['amount_donated']
    funding_id = request.data['funding_id']
    donation_message = request.data['donation_message']
    donar = User.objects.get(email=request.user)

    client = razorpay.Client(auth=(env('PUBLIC_KEY'), env('SECRET_KEY')))

    payment = client.order.create({"amount": int(amount) * 100, "currency": "INR", "payment_capture": "1"})
    funding = Funding.objects.get(id=funding_id)

    donation = Donation.objects.create(funding_id=funding, donar_id=donar, amount_donated=amount, donation_payment_id=payment['id'], donation_message=donation_message)

    serializer = DonationSerializer(donation)

    """order response will be 
    {'id': 17, 
    'order_date': '23 January 2021 03:28 PM', 
    'order_product': '**product name from frontend**', 
    'order_amount': '**product amount from frontend**', 
    'order_payment_id': 'order_G3NhfSWWh5UfjQ', # it will be unique everytime
    'isPaid': False}"""

    data = {
        "payment": payment,
        "donation": serializer.data
    }
    return Response(data)


@api_view(['POST'])
def handle_payment_success(request):

    res = json.loads(request.data["response"])

    """res will be:
    {'razorpay_payment_id': 'pay_G3NivgSZLx7I9e', 
    'razorpay_order_id': 'order_G3NhfSWWh5UfjQ', 
    'razorpay_signature': '76b2accbefde6cd2392b5fbf098ebcbd4cb4ef8b78d62aa5cce553b2014993c0'}
    this will come from frontend which we will use to validate and confirm the payment
    """

    ord_id = ""
    raz_pay_id = ""
    raz_signature = ""

    for key in res.keys():
        if key == 'razorpay_order_id':
            ord_id = res[key]
        elif key == 'razorpay_payment_id':
            raz_pay_id = res[key]
        elif key == 'razorpay_signature':
            raz_signature = res[key]

    donation = Donation.objects.get(donation_payment_id=ord_id)

    data = {
        'razorpay_order_id': ord_id,
        'razorpay_payment_id': raz_pay_id,
        'razorpay_signature': raz_signature
    }

    client = razorpay.Client(auth=(env('PUBLIC_KEY'), env('SECRET_KEY')))

    check = client.utility.verify_payment_signature(data)

    if check is not None:
        return Response({'success':False,'error': 'Something went wrong!'})

    donation.isPaid = True
    donation.save()

    rs = {
        'success': True,
        'message': 'Donation Successful'
    }

    return Response(rs)
