from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('blog/<int:postId>', index),
    path('post/<int:postId>', index),
    path('createpost', index),
    path('createblog', index)
]
