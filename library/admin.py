from django.contrib import admin
from .models import Author
from .models import Country
from .models import Book
from .models import Chapter
from .models import Review
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

@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    pass

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
