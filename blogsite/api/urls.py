from django.urls import path
from .views import BlogView, PostView, CreatePostView

urlpatterns = [
    path('blog', BlogView.as_view()),
    path('post', PostView.as_view()),
    path('createpost', CreatePostView.as_view())
]
