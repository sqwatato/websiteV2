# Generated by Django 4.1 on 2022-08-16 18:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_project_github_project_website_link_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 16, 18, 40, 37, 478196, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='projecttag',
            name='name',
            field=models.TextField(max_length=25),
        ),
    ]
