from django.db import models

# Create your models here.
class Blog(models.Model):
    name = models.CharField(max_length=64, unique=True)
    create_date = models.DateField()

class Post(models.Model):
    blog_name = models.CharField(max_length=64)
    upload_date = models.DateField()
    image_url = models.CharField(max_length=256)
    content = models.CharField(max_length=8192)