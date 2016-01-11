# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enAdopcion', '0002_auto_20160111_0059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enadopcion',
            name='genero',
            field=models.CharField(max_length=1, choices=[(b'm', b'macho'), (b'h', b'hembra')]),
        ),
    ]
