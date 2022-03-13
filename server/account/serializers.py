from .models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['fname', 'lname', 'email', 'password', 'is_NGO']

    def save(self):
        user = User(
            fname=self.validated_data['fname'],
            lname=self.validated_data['lname'],
            email=self.validated_data['email'],
            is_NGO=self.validated_data['is_NGO']
        )
        password = self.validated_data['password']
        user.set_password(password)
        user.save()
        return user


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=50)
    password = serializers.CharField(
        style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password']


class UserDetailsSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ['id', 'fname', 'lname', 'email']
