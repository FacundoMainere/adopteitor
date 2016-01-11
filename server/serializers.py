from django.contrib.auth.models import User, Group
from enAdopcion.models import enAdopcion
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
        fields = ('id', 'genero', 'edad', 'desc', 'foto', 'nombre')
