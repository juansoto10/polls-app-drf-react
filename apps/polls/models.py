import datetime
import uuid

from django.db import models
from django.utils import timezone
from django.contrib import admin

from apps.category.models import Category


def question_directory_path(instance, filename):
    return 'question/{0}/{1}'.format(instance.slug, filename)

# Make question_uuid the primary key of the model Question for production,
# the same with choice_uuid for the model Choice !!!!! IMPORTANT !!!!

class Question(models.Model):
    question_uuid = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    question_text = models.CharField(max_length=280)
    slug =          models.SlugField(unique=True)
    thumbnail =     models.ImageField(upload_to=question_directory_path)
    category =      models.ForeignKey(Category, on_delete=models.PROTECT)
    published =     models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.question_text

    @admin.display(
        boolean=True,
        ordering='published',
        description='Published recently?',
    )
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.published <= now
    
    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''


class Choice(models.Model):
    choice_uuid =   models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    question =      models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text =   models.CharField(max_length=220)
    votes =         models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text

