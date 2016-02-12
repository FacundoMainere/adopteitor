from django.db import models

class enAdopcion(models.Model):
    genero_opciones =  (
    ('m', 'macho'),
    ('h', 'hembra')
    )
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    genero = models.CharField(max_length=1, choices=genero_opciones)
    edad = models.IntegerField()
    desc = models.TextField(max_length=1024)
    def __unicode__(self):
        return "[" + str(self.id) + "] " + self.nombre


class enAdopcionFotos(models.Model):
    def __str__ (self):
        return self.imagen.url
    galgo = models.ForeignKey(enAdopcion, blank=True, null=True, related_name='the_owner_of_this_photo')
    imagen = models.ImageField('File', upload_to='images/')
