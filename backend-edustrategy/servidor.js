import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import saludRutas from './src/rutas/saludRutas.js';
import autenticacionRutas from './src/rutas/autenticacionRutas.js';
import usuarioRutas from './src/rutas/usuarioRutas.js';

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

// Rutas principales
app.use('/api/salud', saludRutas);
app.use('/api/autenticacion', autenticacionRutas);
app.use('/api/usuario', usuarioRutas);

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor EDU-STRATEGY ejecutándose en el puerto ${PORT}`);
});