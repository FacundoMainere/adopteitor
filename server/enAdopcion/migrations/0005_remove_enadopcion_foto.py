# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enAdopcion', '0004_enadopcionfotos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='enadopcion',
            name='foto',
        ),
    ]
