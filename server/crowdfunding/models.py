from django.db import models
import uuid
# Create your models here.


def get_Funding_Image(self, filename):
    return 'images/{0}/{1}'.format(self.creator_id.id, filename)


class Funding(models.Model):
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    fund_cause = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)
    total_fund = models.IntegerField()
    amount_raise = models.IntegerField()
    description = models.CharField(max_length=2000)
    image = models.ImageField(upload_to=get_Funding_Image, default='no-image')


class FundingReviews(models.Model):
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    email = models.EmailField()
    name = models.CharField(max_length=200)
    message = models.CharField(max_length=300)


class Donation(models.Model):
    donar_id = models.ForeignKey(User, on_delete=models.CASCADE)
    funding_id = models.ForeignKey(Funding, on_delete=models.CASCADE)
    email = models.EmailField()
    name = models.CharField()
    amount_donated = models.IntegerField()
