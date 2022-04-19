from rest_framework import serializers
from .models import Blog, Post

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('name', 'create_date')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('blog_name', 'upload_date', 'image_url', 'content')