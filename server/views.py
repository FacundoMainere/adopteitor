from django.contrib.auth.models import User, Group
from enAdopcion.models import enAdopcion
from enAdopcion.models import enAdopcionFotos
from rest_framework import viewsets, generics
from serializers import UserSerializer, GroupSerializer, EnAdopcionSerializer, enAdopcionFotoSerializer


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
    def get_queryset(self):
        queryset = enAdopcion.objects.all()
        galgo_id = self.request.query_params.get('galgo_id', None)
        if galgo_id is not None:
            queryset = enAdopcion.objects.filter(id=galgo_id)

        return queryset
