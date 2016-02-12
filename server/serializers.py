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
    the_owner_of_this_photo = serializers.StringRelatedField(many=True)
    class Meta:
        model = enAdopcion
        fields = ('id','nombre', 'genero', 'edad', 'desc','the_owner_of_this_photo')

class enAdopcionFotoSerializer(serializers.ModelSerializer):
    the_owner_of_this_photo = serializers.StringRelatedField(many=True)
    class Meta:
        model = enAdopcion
        fields = ('id','the_owner_of_this_photo')
