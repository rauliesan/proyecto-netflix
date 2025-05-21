# Proyecto Netflix API

Este proyecto es una API construida con **FastAPI** y **SQLAlchemy** que simula un sistema de autenticación de usuarios para una aplicación estilo Netflix. Los usuarios pueden registrarse, iniciar sesión y consultar la lista de usuarios.

## Tecnologías usadas

- **FastAPI**: Framework moderno y rápido para la construcción de APIs en Python.
- **SQLAlchemy**: ORM para la base de datos.
- **MySQL**: Base de datos relacional.
- **Uvicorn**: Servidor ASGI para correr FastAPI.
- **Pymysql**: Conector para MySQL desde Python.


## Instalar dependencias
pip install -r requirements.txt

## Ejecutar el servidor 
python -m uvicorn app.main:app --reload