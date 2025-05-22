from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import Usuario
from app.database import SessionLocal, engine, Base
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Crea las tablas automáticamente al iniciar
Base.metadata.create_all(bind=engine)

# Dependencia para inyectar la sesión
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/crear_usuario/")
def crear_usuario(nombre: str, contrasenia: str, db: Session = Depends(get_db)):
    nuevo_usuario = Usuario(nombre=nombre, contrasenia=contrasenia)
    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)
    return nuevo_usuario

@app.get("/iniciar_sesion/")
def iniciar_sesion(nombre: str, contrasenia: str, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.nombre == nombre, Usuario.contrasenia == contrasenia).first()
    if usuario:
        return usuario
    else:
        raise HTTPException(status_code=400, detail="Error con la base de datos")

@app.get("/usuarios/")
def listar_usuarios(db: Session = Depends(get_db)):
    return db.query(Usuario).all()
