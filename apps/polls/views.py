from django.shortcuts import render, get_object_or_404
from apps.category.models import Category

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from django.db.models.query_utils import Q

from .models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination


class QuestionListView(APIView):
    def get(self, request, format=None):
        if Question.objects.all().exists():
            questions = Question.objects.all()
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(questions, request)
            serializer = QuestionSerializer(results, many=True)
            
            return paginator.get_paginated_response({'questions': serializer.data})
        else:
            return Response({'error', 'No questions found'}, status=status.HTTP_404_NOT_FOUND)
        
        
class QuestionListCategoryView(APIView):
    def get(self, request, category_id, format=None):
        if Question.objects.all().exists():
            category = Category.objects.get(id=category_id)
            questions = Question.objects.all().filter(category=category)
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(questions, request)
            serializer = QuestionSerializer(results, many=True)
            
            return paginator.get_paginated_response({'questions': serializer.data})
        else:
            return Response({'error': 'No questions found'}, status=status.HTTP_404_NOT_FOUND)
        
        
class QuestionDetailView(APIView):
    def get(self, request, question_uuid, format=None):
        question = get_object_or_404(Question, question_uuid=question_uuid)
        question_serializer = QuestionSerializer(question)
        
        choices = Choice.objects.all().filter(question=question)
        choice_serializer = ChoiceSerializer(choices, many=True)
        
        return Response({'question': question_serializer.data,
                         'choices': choice_serializer.data}, status=status.HTTP_200_OK)
    
    
class SearchQuestionView(APIView):
    def get(self, request, search_term):
        matches = Question.objects.filter(
            Q(question_text__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )
        
        paginator = MediumSetPagination
        # results = paginator.paginate_queryset(matches, request)
        serializer = QuestionSerializer(matches, many=True)
        return Response({'filtered_questions': serializer.data}, status=status.HTTP_200_OK)  
    
    
# Solve number of votes in each question ASAP (I think it has to be through React or something) !!!!!!!  
    
# class ResultsView(generic.DetailView):
    # model = Question
    # template_name = 'polls/results.html'


# def vote(request, question_id):
    # return HttpResponse("You're voting on question %s." % question_id)

    # question = get_object_or_404(Question, pk=question_id)
    # try:
        # selected_choice = question.choice_set.get(pk=request.POST['choice'])
    # except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        # return render(request, 'polls/detail.html', {
            # 'question': question,
            # 'error_message': "You didn't select a choice.",
        # })
    # else:
        # selected_choice.votes += 1
        # selected_choice.save()
        # Always return an HttpResponseRedirect after succesfully dealing with POST data.
        # This prevents data from being posted twice if a user hits the back button.
        # return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
