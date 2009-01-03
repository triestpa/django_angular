from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView


@ensure_csrf_cookie
class IndexView(TemplateView):
    template_name = 'index.html'
