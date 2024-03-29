# Generated by Django 3.2.2 on 2022-03-12 13:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import events.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('offline', models.BooleanField(default=False)),
                ('event_date', models.DateTimeField()),
                ('event_time', models.TimeField()),
                ('event_location', models.CharField(
                    blank=True, max_length=2000, null=True)),
                ('event_link', models.CharField(
                    blank=True, max_length=200, null=True)),
                ('event_description', models.CharField(max_length=2000)),
                ('event_name', models.CharField(max_length=2000)),
                ('event_duration', models.IntegerField()),
                ('event_image', models.ImageField(default='no-image',
                 upload_to=events.models.get_event_image)),
                ('creator_id', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EventRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to='events.event')),
                ('event_user', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
