# Generated by Django 4.1 on 2022-09-14 10:20

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_project_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 9, 14, 10, 20, 37, 165458), null=True),
        ),
    ]
