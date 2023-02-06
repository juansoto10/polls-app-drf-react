from rest_framework import serializers
from .models import Question, Choice
from apps.category.serializers import CategorySerializer


class QuestionSerializer(serializers.ModelSerializer):
    thumbnail = serializers.CharField(source='get_thumbnail')
    category = CategorySerializer()
    
    class Meta:
        model = Question
        fields = [
            'question_uuid',
            'question_text',
            'thumbnail',
            'category',
            'published',
        ]
        
        
class ChoiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Choice
        fields = [
            'choice_uuid',
            'question',
            'choice_text',
            'votes',
        ]
        