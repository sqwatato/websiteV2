# Generated by Django 4.1.2 on 2022-11-17 22:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_alter_project_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 11, 17, 22, 15, 54, 211220), null=True),
        ),
    ]
