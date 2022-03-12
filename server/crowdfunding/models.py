from django.db import models
from account.models import User
# Create your models here.


def get_Funding_Image(self, filename):
    return 'funding/{0}/image/{1}'.format(self.creator_id.id, filename)


def get_ngo_certificate(self, filename):
    return 'funding/{0}/certificate/{1}'.format(self.creator_id.id, filename)


class Funding(models.Model):
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=200)
    fund_cause = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)
    total_fund = models.IntegerField()
    amount_raise = models.IntegerField()
    description = models.CharField(max_length=2000)
    image = models.ImageField(upload_to=get_Funding_Image, default='no-image')
    is_closed = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    ngo_certificate = models.ImageField(
        upload_to=get_ngo_certificate, default='no-image')


class FundingUpdates(models.Model):
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    message = models.CharField(max_length=300)
    message_date = models.DateTimeField(auto_now=True)


class FundingComments(models.Model):
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.CharField(max_length=1000)
    message_date = models.DateTimeField(auto_now=True)


class Donation(models.Model):
    donar_id = models.ForeignKey(User, on_delete=models.CASCADE)
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    amount_donated = models.IntegerField()
    donation_time = models.DateTimeField(auto_now=True)
    donation_message = models.CharField(max_length=1000, null=True, blank=True)
