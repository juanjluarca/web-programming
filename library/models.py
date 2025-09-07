from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    birth_date = models.DateField()


class Country(models.Model):
    name = models.CharField(max_length=50)
    population = models.PositiveBigIntegerField()
    territorial_area = models.FloatField()

