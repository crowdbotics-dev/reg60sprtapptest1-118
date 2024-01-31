# Generated by Django 3.2.23 on 2024-01-31 05:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='SDjbdsj',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sd', models.BigIntegerField()),
                ('rrg', models.PositiveIntegerField()),
                ('feeg', models.CharField(max_length=10)),
                ('rel_user_n_n', models.ManyToManyField(blank=True, related_name='sdjbdsj_rel_user_n_n', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Smala',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rel_sdjbdsj_1_1', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='smala_rel_sdjbdsj_1_1', to='home.sdjbdsj')),
            ],
        ),
    ]
