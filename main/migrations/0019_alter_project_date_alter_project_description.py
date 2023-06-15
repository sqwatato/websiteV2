# Generated by Django 4.1.2 on 2023-01-21 16:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0018_alter_project_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 1, 21, 16, 1, 11, 917062), null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(max_length=2000),
        ),
    ]
