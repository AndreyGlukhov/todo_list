# Generated by Django 2.0.5 on 2018-05-24 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDoElements',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo_text', models.CharField(max_length=200)),
                ('done', models.BooleanField()),
            ],
        ),
    ]
