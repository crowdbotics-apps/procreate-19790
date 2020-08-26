from rest_framework import serializers
from task.models import Task, Message, TaskTransaction, Rating


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"


class TaskTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskTransaction
        fields = "__all__"
