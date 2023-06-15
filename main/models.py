from django.db import models
from django.utils.timezone import now
from django.urls import reverse

# Projects
class Project(models.Model):
    title = models.TextField(max_length=100)
    blurb = models.TextField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField(default=now, blank=True, null=True)
    featured = models.BooleanField(default=False)
    image = models.TextField(max_length=30)
    website_link = models.URLField(default=None, blank=True, null=True)
    github = models.URLField(default=None, blank=True, null=True)
    slug = models.SlugField(null=True)
    htmlLink = models.CharField(default="", blank=True, max_length=200)
    
    def __str__(self) -> str:
        return self.title
    
    def get_absolute_url(self):
        return reverse("project_page", kwargs={"slug": self.slug})
    

# Tags for Projects
class ProjectTag(models.Model):
    name = models.TextField(max_length=25)
    projects = models.ManyToManyField(Project, related_name="tags", blank=True)
    
    def __str__(self) -> str:
        return self.name

# # Contact Message Object
# class Contact(models.Model):
#     name = models.CharField(max_length=255)
#     email = models.EmailField()
#     subject = models.CharField(max_length=255)
#     message = models.TextField()
    
#     def __str__(self) -> str:
#         return self.message