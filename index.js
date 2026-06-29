const express = require('express');
const app = express();

// Filtro para procesar bloques de datos en formato JSON
app.use(express.json());

// Array inicial de estudiantes basado rigurosamente en la imagen proporcionada
let estudiantes = [
    {
        id: 1,
        firstName: "Francisco",
        lastName: "Martínez",
        age: 20,
        email: "francisco.martinez@gmail.com",
        phone: "+503 7145 0001",
        address: {
            country: "El Salvador",
            city: "Zacatecoluca"
        },
        isActive: true,
        courses: ["Matemáticas", "Programación", "Base de Datos"]
    },
    {
        id: 2,
        firstName: "Margarita",
        lastName: "López",
        age: 18,
        email: "margarita.lopez@hotmail.com",
        phone: "+503 7145 0002",
        address: {
            country: "El Salvador",
            city: "San Vicente"
        },
        isActive: true,
        courses: ["Matemáticas", "Programación", "Base de Datos"]
    },
    {
        id: 3,
        firstName: "Lucía",
        lastName: "Bonilla",
        age: 18,
        email: "lucia.bonilla@yahoo.com",
        phone: "+503 7145 0003",
        address: {
            country: "El Salvador",
            city: "Usulután"
        },
        isActive: true,
        courses: ["Matemáticas", "Base de Datos", "Ciencia y Tecnología"]
    },
    {
        id: 4,
        firstName: "Moisés",
        lastName: "Cárcamo",
        age: 18,
        email: "moises.carcamo@gmail.com",
        phone: "+503 7145 0004",
        address: {
            country: "El Salvador",
            city: "La Libertad"
        },
        isActive: true,
        courses: ["Matemáticas", "Sistemas Operativos", "Ciencia y Tecnología"]
    },
    {
        id: 5,
        firstName: "Elizabeth",
        lastName: "González",
        age: 18,
        email: "elizabeth.gonzalez@yaho.com",
        phone: "+503 7145 0005",
        address: {
            country: "El Salvador",
            city: "Chalatenango"
        },
        isActive: true,
        courses: ["Matemáticas", "Sistemas Operativos", "Ciencia y Tecnología"]
    }
];


// EndPoint 1: hGET - Mostrar todos los estudiantes
app.get('/estudiantes', (req, res) => {
    res.status(200).json(estudiantes);
});


// EndPointt 2: GET - Obtener un estudiante ingresando su ID
app.get('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === id);

    if (!estudiante) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.status(200).json(estudiante);
});


// EndPoint 3: POST - Agregar un estudiante
app.post('/estudiantes', (req, res) => {
    const { firstName, lastName, age, email, phone, address, isActive, courses } = req.body;

    // Validación básica de campos obligatorios
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ error: "Los campos firstName, lastName y email son estrictamente requeridos." });
    }

    // Generación de ID para un nuevo estudiante
    const nuevoId = estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].id + 1 : 1;

    const nuevoEstudiante = {
        id: nuevoId,
        firstName,
        lastName,
        age: age || 0,
        email,
        phone: phone || "",
        address: {
            country: address?.country || "",
            city: address?.city || ""
        },
        isActive: isActive !== undefined ? isActive : true,
        courses: courses || []
    };

    estudiantes.push(nuevoEstudiante);
    res.status(201).json({ mensaje: "Estudiante agregado con éxito", estudiante: nuevoEstudiante });
});


// EndPoint 4: PUT - Actualiza los datos de un estudiante buscando por ID
app.put('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = estudiantes.findIndex(e => e.id === id);

    if (indice === -1) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    const datosActualizados = req.body;

    // Fusión de las propiedades existentes con las nuevas propiedades enviadas
    estudiantes[indice] = {
        ...estudiantes[indice],
        ...datosActualizados,
        id: estudiantes[indice].id, // Asegura que el ID original nunca sea cambbiado por el body
        address: {
            ...estudiantes[indice].address,
            ...(datosActualizados.address || {})
        }
    };

    res.status(200).json({ mensaje: "Estudiante actualizado con éxito", estudiante: estudiantes[indice] });
});


// EndPointt 5: DELETE - Elimina un estudiante ingresando su ID
app.delete('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = estudiantes.findIndex(e => e.id === id);

    if (indice === -1) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    const eliminado = estudiantes.splice(indice, 1);
    res.status(200).json({ mensaje: "Estudiante eliminado correctamente", estudiante: eliminado[0] });
});

app.listen(3000, () => {
    console.log('Juan Francisco Martínez González')
    console.log('Servidor de Administración de Estudiantes ejecutándose en: http://localhost:3000');
});

