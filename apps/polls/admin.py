from django.contrib import admin

from .models import Question, Choice


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 18


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['question_uuid', 'question_text', 'slug', 'thumbnail', 'category']}),
        ('Date information', {'fields': ['published']}),
        # ('Date information', {'fields': ['published'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'slug', 'thumbnail', 'category', 'published', 'was_published_recently')
    list_filter = ['published']
    search_fields = ['question_text']


admin.site.register(Question, QuestionAdmin)
