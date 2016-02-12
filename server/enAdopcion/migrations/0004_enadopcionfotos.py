# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enAdopcion', '0003_auto_20160111_1756'),
    ]

    operations = [
        migrations.CreateModel(
            name='enAdopcionFotos',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('imagen', models.ImageField(upload_to=b'images/', verbose_name=b'File')),
                ('galgo', models.ForeignKey(related_name='the_owner_of_this_photo', blank=True, to='enAdopcion.enAdopcion', null=True)),
            ],
        ),
    ]
