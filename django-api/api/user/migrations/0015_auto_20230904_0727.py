# Generated by Django 3.2.13 on 2023-09-04 14:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0014_auto_20230904_0702'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='api_key',
        ),
        migrations.RemoveField(
            model_name='user',
            name='plan',
        ),
    ]
