# Generated by Django 3.1.5 on 2021-02-22 07:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('review_time', models.DateTimeField(blank=True, default=None, null=True)),
                ('comment', models.TextField(blank=True, null=True)),
                ('in_review', models.BooleanField(default=None, null=True)),
                ('accepted', models.BooleanField(default=False)),
                ('faculty', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.managementprofile')),
                ('student', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.studentprofile')),
            ],
        ),
    ]