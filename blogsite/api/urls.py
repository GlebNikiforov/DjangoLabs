from django.urls import path
from .views import BlogView, PostView

urlpatterns = [
    path('blog', BlogView.as_view()),
    path('post', PostView.as_view())
]
