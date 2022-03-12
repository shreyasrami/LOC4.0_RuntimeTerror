import imp
from django.db import models
from account.models import User
from crowdfunding.models import Funding

# Create your models here.


class Donation(models.Model):
    donar_id = models.ForeignKey(User, on_delete=models.CASCADE)
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    amount_donated = models.IntegerField()
    donation_date = models.DateTimeField(auto_now=True)
    donation_payment_id = models.CharField(max_length=100)
    isPaid = models.BooleanField(default=False)
    donation_message = models.CharField(max_length=1000, null=True, blank=True)