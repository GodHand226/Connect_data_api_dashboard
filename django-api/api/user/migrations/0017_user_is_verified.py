# Generated by Django 3.2.8 on 2023-09-19 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0016_user_plan'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
    ]
