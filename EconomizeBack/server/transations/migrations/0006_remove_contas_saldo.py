# Generated by Django 3.2.9 on 2021-11-22 23:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transations', '0005_auto_20211120_1947'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contas',
            name='saldo',
        ),
    ]
