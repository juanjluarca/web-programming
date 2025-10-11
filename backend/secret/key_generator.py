import secrets
import string

def generate_key(length=12):
    # Se genera una key aleatoria y segura
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def is_valid_key_format(key):
    # Valida que la key ingresada tenga un formato válido
    if not key or len(key) != 12:
        return False
    return all(c in string.ascii_letters + string.digits for c in key)
    