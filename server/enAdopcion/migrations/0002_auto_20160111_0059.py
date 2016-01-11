# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enAdopcion', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enadopcion',
            name='genero',
            field=models.CharField(max_length=2, choices=[(b'm', b'macho'), (b'h ', b'hembra')]),
        ),
    ]
