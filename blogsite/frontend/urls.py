from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('blog', index),
    path('post', index),
    path('createpost', index)
]
