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

class enAdopcionFotoList(generics.ListCreateAPIView):
    queryset = enAdopcionFotos.objects.all()
    serializer_class = enAdopcionFotoSerializer
    def get_queryset(self):
        queryset = enAdopcionFotos.objects.all()

        galgo_id = self.request.query_params.get('galgo_id', None)
        if galgo_id is not None:
            queryset = queryset.filter(galgo=galgo_id).only('imagen')

        return queryset
