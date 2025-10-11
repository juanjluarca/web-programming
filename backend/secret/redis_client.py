import redis
from django.conf import settings

class RedisClient:
    # Cliente de Redis
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.client = redis.Redis(
                host=settings.REDIS_HOST,
                port=settings.REDIS_PORT,
                db=settings.REDIS_DB,
                decode_responses=True
            )
        return cls._instance
    
    def get_client(self):
        return self.client

redis_client = RedisClient().get_client()