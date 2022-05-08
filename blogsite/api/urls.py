from django.urls import path
from .views import BlogView, CreateBlogView, RemoveBlogView, GetBlog, GetPost, PostView, CreatePostView, UserCreate, UserList, UserDetail

urlpatterns = [
    path('blog', BlogView.as_view()),
    path('createblog', CreateBlogView.as_view()),
    path('removeblog', RemoveBlogView.as_view()),
    path('getblog', GetBlog.as_view()),
    path('post', PostView.as_view()),
    path('createpost', CreatePostView.as_view()),
    path('getpost', GetPost.as_view()),
    path('users', UserList.as_view()),
    path('users/<int:pk>', UserDetail.as_view()),
    path('createuser', UserCreate.as_view())
]
