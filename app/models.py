from sqlalchemy import Column, Integer, String
from app.database import Base

class Usuario(Base):
    __tablename__ = "usuario"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(50), nullable=False, unique=True)
    contrasenia = Column(String(100), nullable=False)
