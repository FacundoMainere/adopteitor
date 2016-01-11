from django.db import models

class enAdopcion(models.Model):
    genero_opciones =  (
    ('m', 'macho'),
    ('h ', 'hembra')
    )
    id = models.AutoField(primary_key=True)
    genero = models.CharField(max_length=1, choices=genero_opciones)
    edad = models.IntegerField()
    desc = models.TextField(max_length=1024)
    foto = models.CharField(max_length=255)
    nombre = models.CharField(max_length=255)
