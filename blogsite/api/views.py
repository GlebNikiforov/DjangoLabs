from re import T
from turtle import pos
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import BlogSerializer, PostSerializer, CreatePostSerializer, CreateBlogSerializer
from .models import Blog, Post
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class RemoveBlogView(generics.DestroyAPIView):
    serializer_class = BlogSerializer
    lookup_url_kwarg = 'id'
    
    def destroy(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            blog = Blog.objects.filter(id=id)
            if len(blog) > 0:
                blog[0].delete()
                return Response({"Blog destroyed"}, status=status.HTTP_200_OK)
            return Response({"Blog not found": "Invalid blog id."}, status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)

class GetBlog(APIView):
    serializer_class = BlogSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            blog = Blog.objects.filter(id=id)
            if len(blog) > 0:
                data = BlogSerializer(blog[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({"Blog not found": "Invalid blog id."}, status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)

    
class CreateBlogView(APIView):
    serializer_class = CreateBlogSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            queryset  = Blog.objects.filter(name=name)

            if queryset.exists():
                blog = queryset[0]
                blog.name = name
                blog.save(update_fields=['name'])
                return Response(BlogSerializer(blog).data, status=status.HTTP_200_OK)
            else:
                blog = Blog(name=name)
                blog.save()
            
                return Response(BlogSerializer(blog).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class GetPost(APIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            post = Post.objects.filter(id=id)
            if len(post) > 0:
                data = PostSerializer(post[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({"Post not found": "Invalid post id."}, status=status.HTTP_404_NOT_FOUND)
        return Response({"Bad request": "Id parameter not found in request"}, status=status.HTTP_400_BAD_REQUEST)
    
class CreatePostView(APIView):
    serializer_class = CreatePostSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            blog_name = serializer.data.get('blog_name')
            image_url = serializer.data.get('image_url')
            content   = serializer.data.get('content')
            title     = serializer.data.get('title')
            queryset  = Post.objects.filter(title=title)

            if queryset.exists():
                post = queryset[0]
                post.blog_name = blog_name
                post.image_url = image_url
                post.content = content
                post.save(
                    update_fields=['blog_name', 'image_url', 'content'])
                return Response(PostSerializer(post).data, status=status.HTTP_200_OK)
            else:
                post = Post(
                    blog_name=blog_name,
                    image_url=image_url,
                    content=content,
                    title=title)
                post.save()
            
                return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)