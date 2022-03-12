from django.db import models
from account.models import User
# Create your models here.


def get_event_image(self, filename):
    return 'events/{0}/image/{1}'.format(self.creator_id.id, filename)


class Event(models.Model):
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=100)
    offline = models.BooleanField(default=False)
    event_date = models.DateTimeField()
    event_time = models.TimeField()
    event_location = models.CharField(max_length=2000, null=True, blank=True)
    event_link = models.CharField(max_length=200, null=True, blank=True)
    event_description = models.CharField(max_length=2000)
    event_name = models.CharField(max_length=2000)
    event_duration = models.IntegerField()  # no of hours long
    event_image = models.ImageField(
        upload_to=get_event_image, default='no-image')


class EventRegister(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    event_user = models.ForeignKey(User, on_delete=models.CASCADE)
