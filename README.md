# API REST de Administración de Estudiantes

Esta es una API REST funcional construida con Node.js y Express.js para gestionar información básica de estudiantes. Utiliza un almacenamiento temporal en memoria (Array de JavaScript).

## 🚀 Instalación y Ejecución

1. Clona este repositorio en tu máquina local.
   
3. Abre la terminal en la raíz del proyecto e instala las dependencias:
   ```bash
   npm install

4. Cómo ejecutar cada EndPoint del API REST de Administración de Estudiantes:
   4.a) GET http://localhost:3000//estudiantes
   4.b) GET http://localhost:3000//estudiantes/NumeroID
   4.c) POST http://localhost:3000//estudiantes
   4.d) PUT http://localhost:3000//estudiantes/NumeroID
   4.e) DELETE http://localhost:3000//estudiantes/NumeroID
   
6. Tabla de EndPoint disponibles:
   MÉTODO HTTP   ENDPOINT            DESCRIPCIÓN
   GET           /estudiantes        Obtiene el catálogo completo de alumnos inscritos.
   GET           /estudiantes/:id    Filtra y devuelve un único estudiante por su identificador numérico.
   POST          /estudiantes        Agrega un nuevo registro de estudiante en el arreglo.
   PUT           /estudiantes/:id    Modifica de manera parcial o completa los datos de un estudiante.
   DELETE        /estudiantes/:id    Elimina el registro deun estudiante indicado por el parámetro ID.
   
## 🚀 Realizado por: Juan Francisco Martínez González
## 🚀 Instituto Nacional "José Simeón Cañas" Zacatecoluca

