from django.contrib import admin
from .models import Author
from .models import Country
from .models import Book
# Register your models here.

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    pass

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    pass

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass
