from django.contrib import admin
from django.views.generic import TemplateView
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings

from todo.views import ToDoListView, ToDoDetailView


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='todo/index.html')),
    url(r'^todo/api/$', ToDoListView.as_view()),
    url(r'^todo/api/(?P<pk>[0-9]+)/', ToDoDetailView.as_view()),
    url(r'angular/$', TemplateView.as_view(template_name='todo/angular.html')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)