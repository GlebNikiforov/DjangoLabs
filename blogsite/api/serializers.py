from rest_framework import serializers
from .models import Blog, Post

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'name', 'create_date')

class CreateBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('name',)

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'blog_name', 'title', 'upload_date', 'image_url', 'content')

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('blog_name', 'title', 'image_url', 'content')