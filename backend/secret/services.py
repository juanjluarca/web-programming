from .redis_client import redis_client
from .key_generator import generate_key, is_valid_key_format
from .exceptions import KeyGenerationError, SecretNotFoundError, InvalidKeyFormatError

class SecretService:
    DEFAULT_TTL = 86400  # 24 horas
    MAX_ATTEMPTS = 10    # Intentos máximos para generar key única
    
    @staticmethod
    def hide_secret(content: str, ttl: int = DEFAULT_TTL) -> str:
        # Guarda un secreto en Redis y retorna la key única.
        for _ in range(SecretService.MAX_ATTEMPTS):
            key = generate_key()
            
            # Solo se seteará la key si no existe
            if redis_client.set(key, content, nx=True, ex=ttl):
                return key
        
        raise KeyGenerationError("No se pudo generar una key única")
    
    @staticmethod
    def reveal_secret(key: str) -> str:
        # Accede a un secreto en redis (si existe) y lo elimina
        if not is_valid_key_format(key):
            raise InvalidKeyFormatError("Formato de key inválido")
        
        # el .getdel obtiene y elimina el valor en la misma operación
        content = redis_client.getdel(key)
        
        if content is None:
            raise SecretNotFoundError("El secreto no existe o ya fue revelado")
        
        return content
        