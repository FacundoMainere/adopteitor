# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='enAdopcion',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('genero', models.CharField(max_length=1, choices=[(b'm', b'macho'), (b'h ', b'hembra')])),
                ('edad', models.IntegerField()),
                ('desc', models.TextField(max_length=1024)),
                ('foto', models.CharField(max_length=255)),
                ('nombre', models.CharField(max_length=255)),
            ],
        ),
    ]
