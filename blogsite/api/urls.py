from django.urls import path
from .views import BlogView, GetBlog, GetPost, PostView, CreatePostView

urlpatterns = [
    path('blog', BlogView.as_view()),
    path('getblog', GetBlog.as_view()),
    path('post', PostView.as_view()),
    path('createpost', CreatePostView.as_view()),
    path('getpost', GetPost.as_view())
]
