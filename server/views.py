from django.contrib.auth.models import User, Group
from enAdopcion.models import enAdopcion
from enAdopcion.models import enAdopcionFotos
from rest_framework import viewsets
from serializers import UserSerializer, GroupSerializer, EnAdopcionSerializer, EnAdopcionFotosSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class enAdopcionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = enAdopcion.objects.all()
    serializer_class = EnAdopcionSerializer

class enAdopcionFotosViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = enAdopcionFotos.objects.all()
    serializer_class = EnAdopcionFotosSerializer
