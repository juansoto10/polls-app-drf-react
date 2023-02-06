from django.urls import path

from .views import *


urlpatterns = [
    path('', QuestionListView.as_view()),
    path('category/<category_id>', QuestionListCategoryView.as_view()),
    path('<question_uuid>', QuestionDetailView.as_view()),
    path('search/<str:search_term>', SearchQuestionView.as_view()),
]
