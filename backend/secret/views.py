from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import HideSecretSerializer
from .services import SecretService

class SecretViewSet(viewsets.ViewSet):

    @action(detail=False, methods=['post'], url_path='hide')
    def hide(self, request):
        """
        POST /api/secrets/hide/
        {
            "content": "recibe el contenido del secreto",
            "ttl": 86400  // recibe el time to live de redis (es opcional)
        }
        """
        serializer = HideSecretSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            key = SecretService.hide_secret(
                content=serializer.validated_data['content'],
                ttl=serializer.validated_data.get('ttl', 86400)
            )
            
            return Response({
                'key': key,
                'message': 'Secreto guardado exitosamente'
            }, status=status.HTTP_201_CREATED)
            
        except KeyError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )