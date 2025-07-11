from django.urls import path
from .views import HotelListCreateAPIView

urlpatterns = [
    path('hotels/', HotelListCreateAPIView.as_view(), name='hotel-list-create'),
]
