import secrets
import string

def generate_key(length=12):
    # Se genera una key aleatoria y segura
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))