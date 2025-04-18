# CRUD con MongoDB y TypeScript
Es un proyecto donde practico cómo conectar MongoDB (la base de datos) con TypeScript, y cómo hacer las operaciones más comunes:

Crear un usuario
Leer (ver) usuarios
Actualizar un usuario
Borrar un usuario

Y todo eso sin hacer una API, o sea, sin usar Postman ni un servidor Express. Solo es para practicar desde la consola de Node.js.

#Organizacion del proyecto
TrabajoPracticoBackend/
├── config/           → guarda la conexión a MongoDB
├── controllers/      → tiene las funciones que hacen el CRUD
├── models/           → acá está el esquema del usuario
├── .env              → archivo con la URL de la base de datos
├── index.ts          → donde se ejecutan las funciones para probar

#¿Qué herramientas usé?
Node.js y TypeScript → para programar
MongoDB y Mongoose → para guardar los usuarios.
