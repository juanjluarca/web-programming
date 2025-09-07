from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    birth_date = models.DateField()
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, null=True, blank=True)


class Book(models.Model):
    title = models.CharField(max_length=75)
    publication_date = models.DateField()
    pages = models.PositiveIntegerField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)


class Chapter(models.Model):
    title = models.CharField(max_length=100)
    number = models.IntegerField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE)


class Country(models.Model):
    name = models.CharField(max_length=50)
    population = models.PositiveBigIntegerField()
    territorial_area = models.FloatField()

