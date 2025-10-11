from .redis_client import redis_client
from .key_generator import generate_key

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
        
        raise KeyError("No se pudo generar una key única")