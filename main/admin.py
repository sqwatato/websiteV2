from django.contrib import admin
from .models import *
# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "featured", "date")
    filter_horizontal = ("tags",)

class ProjectTagAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    filter_horizontal = ("projects",)

admin.site.register(Project ,ProjectAdmin)
admin.site.register(ProjectTag, ProjectTagAdmin) 
# admin.site.register(Contact)