from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import HideSecretSerializer, RevealSecretSerializer
from .services import SecretService
from .exceptions import KeyGenerationError, SecretNotFoundError, InvalidKeyFormatError

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
            
        except KeyGenerationError as e:
            return Response(
                {'error': 'Error al generar la clave del secreto'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        

    @action(detail=False, methods=['post'], url_path='reveal')
    def reveal(self, request):
        # Revela un secreto y lo elimina de Redis
        # POST /api/secrets/reveal/

        serializer = RevealSecretSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            content = SecretService.reveal_secret(
                key=serializer.validated_data['key']
            )
            
            return Response({
                'content': content,
                'message': 'Este secreto ha sido eliminado y no puede volver a ser accedido'
            }, status=status.HTTP_200_OK)
            
        except InvalidKeyFormatError as e:
            return Response(
                {'error': 'El formato de la clave es inválido'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        except SecretNotFoundError as e:
            return Response(
                    {'error': 'El secreto no existe o ya fue revelado'},
                    status=status.HTTP_404_NOT_FOUND
                )