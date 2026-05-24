# EDU-STRATEGY

EDU-STRATEGY es una aplicación web fullstack desarrollada con el objetivo de apoyar la organización, planificación y seguimiento académico de estudiantes mediante herramientas digitales modernas.

El proyecto integra frontend, backend y base de datos en una arquitectura fullstack utilizando React, Node.js, Express y PostgreSQL implementado mediante Supabase.

---

# Tecnologías utilizadas

## Frontend

* React.js
* CSS
* React Router DOM

## Backend

* Node.js
* Express.js
* JWT
* bcrypt

## Base de datos

* PostgreSQL
* Supabase

## Herramientas de calidad y desarrollo

* ESLint
* Prettier
* Thunder Client
* Git y GitHub
* Vercel
* Railway

---

# Funcionalidades principales

* Registro de usuarios
* Inicio de sesión seguro
* Gestión académica de estudiantes
* Organización de asignaturas
* Persistencia de datos
* Consumo de API REST
* Validación de credenciales
* Arquitectura fullstack integrada

---

# Estructura de la base de datos

El sistema cuenta con las siguientes tablas principales:

* credencial
* estudiante
* asignatura
* semestre
* tipo_actividad
* hito

Adicionalmente, la tabla administrador quedó planteada como mejora futura del sistema.

---

# Instalación del proyecto

## Clonar repositorio

```bash
git clone https://github.com/roxxana-creator/edu-estrategy.git
```

## Instalar dependencias frontend

```bash
npm install
```

## Ejecutar frontend

```bash
npm start
```

## Instalar dependencias backend

```bash
cd backend-edustrategy
npm install
```

## Ejecutar backend

```bash
npm run dev
```

---

# Variables de entorno

Crear un archivo `.env` dentro del backend con las siguientes variables:

```env
PORT=5000
DATABASE_URL=tu_url_postgresql
JWT_SECRET=tu_clave_secreta
```

---

# Pruebas del sistema

Las pruebas de los endpoints fueron realizadas mediante Thunder Client verificando:

* Registro de usuarios
* Inicio de sesión
* Conexión con PostgreSQL
* Persistencia de datos
* Validación de errores
* Respuestas HTTP

---

# Calidad del código

El proyecto implementa ESLint y Prettier para mantener buenas prácticas de desarrollo, consistencia en el código y trabajo colaborativo dentro del equipo.

---

# Despliegue

## Frontend

* Vercel

## Backend

* Railway

## Base de datos

* Supabase PostgreSQL

---

# Equipo de desarrollo

Proyecto académico desarrollado por el equipo EDU-STRATEGY para la asignatura de desarrollo de aplicaciones web e integración fullstack.

---

# Mejoras futuras

* Gestión completa de hitos académicos
* Módulo administrador
* Fotos de perfil
* Panel avanzado de métricas académicas
* Integración de notificaciones
* Mejoras en seguridad y validación

---
