from django.db import models

# Create your models here.
class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    create_date = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return self.name

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    blog_name = models.CharField(max_length=64)
    title = models.CharField(max_length=128)
    upload_date = models.DateField(auto_now_add=True)
    image_url = models.CharField(max_length=256)
    content = models.CharField(max_length=8192)

    def __unicode__(self):
        return self.blog_name