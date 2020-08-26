from django.contrib import admin
from .models import Task, Message, TaskTransaction, Rating

admin.site.register(Task)
admin.site.register(Message)
admin.site.register(Rating)
admin.site.register(TaskTransaction)

# Register your models here.
