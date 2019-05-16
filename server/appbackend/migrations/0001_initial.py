# Generated by Django 2.2 on 2019-05-15 23:25

import appbackend.models
from django.db import migrations, models
import django.db.models.deletion
import enumfields.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('classroom', models.CharField(max_length=20)),
                ('time', models.CharField(max_length=20)),
                ('semester', models.IntegerField()),
                ('year', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Enrollment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('status', models.CharField(max_length=50)),
                ('finalGrade', models.CharField(max_length=5, null=True)),
                ('graduated', models.BooleanField(default=True)),
                ('class_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='class_group', to='appbackend.ClassGroup')),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50, null=True)),
                ('role', enumfields.fields.EnumField(enum=appbackend.models.Role, max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='TransferRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', enumfields.fields.EnumField(enum=appbackend.models.TransferStatus, max_length=1)),
                ('enrollment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrollment', to='appbackend.Enrollment')),
                ('target_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='target_group', to='appbackend.ClassGroup')),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('class_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appbackend.ClassGroup')),
            ],
        ),
        migrations.AddField(
            model_name='enrollment',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appbackend.Person'),
        ),
        migrations.AddField(
            model_name='classgroup',
            name='collaborators',
            field=models.ManyToManyField(to='appbackend.Person'),
        ),
        migrations.AddField(
            model_name='classgroup',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appbackend.Course'),
        ),
        migrations.AddField(
            model_name='classgroup',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='teacher', to='appbackend.Person'),
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appbackend.Lesson')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appbackend.Person')),
            ],
        ),
    ]
