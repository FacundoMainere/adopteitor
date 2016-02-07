from django.contrib.auth.models import User, Group
from enAdopcion.models import enAdopcion
from enAdopcion.models import enAdopcionFotos
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class EnAdopcionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = enAdopcion
        fields = ('id','nombre', 'genero', 'edad', 'desc')

class EnAdopcionFotosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = enAdopcionFotos
        fields = ('imagen', 'galgo')

class EnAdopcionFotosPorGalgoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = enAdopcionFotos
        fields = ('imagen', 'galgo')
