# Generated by Django 3.2.2 on 2022-03-12 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crowdfunding', '0002_rename_ngo_certficate_funding_ngo_certificate'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Donation',
        ),
    ]