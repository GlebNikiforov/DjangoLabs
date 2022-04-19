from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogSerializer, PostSerializer
from .models import Blog, Post

# Create your views here.

class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class PostView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
