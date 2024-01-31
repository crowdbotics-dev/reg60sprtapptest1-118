from django.conf import settings
from django.db import models


class SDjbdsj(models.Model):
    "Generated Model"
    sd = models.BigIntegerField()
    rrg = models.PositiveIntegerField()
    feeg = models.CharField(
        max_length=10,
    )
    rel_user_n_n = models.ManyToManyField(
        "users.User",
        blank=True,
        related_name="sdjbdsj_rel_user_n_n",
    )


class Smala(models.Model):
    "Generated Model"
    rel_sdjbdsj_1_1 = models.OneToOneField(
        "home.SDjbdsj",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="smala_rel_sdjbdsj_1_1",
    )
