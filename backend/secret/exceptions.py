class SecretNotFoundError(Exception):
    # Se lanza cuando un secreto no existe o ya fue revelado
    pass

class KeyGenerationError(Exception):
    # Se lanza cuando no se puede generar una key única
    pass

class InvalidKeyFormatError(Exception):
    # Se lanza cuando el formato de la key es inválido
    pass