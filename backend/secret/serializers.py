from rest_framework import serializers

class HideSecretSerializer(serializers.Serializer):
    # Serializer para ocultar un secreto
    
    content = serializers.CharField(
        max_length=10240,  # 10KB máximo
        required=True,
        help_text="Contenido del secreto a ocultar"
    )
    ttl = serializers.IntegerField(
        default=86400,      # 24 horas por defecto
        required=False,
        help_text="Tiempo de vida en segundos"
    )