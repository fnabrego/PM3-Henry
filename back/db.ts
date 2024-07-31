//npm install pg
/* const { Pool } = require('pg');

// Configura la cadena de conexión
const connectionString = 'postgresql://usuario_conexion:tu_contraseña@localhost:5432/nombre_de_tu_base_existente';

// Crea una instancia del Pool de PostgreSQL
const pool = new Pool({
  connectionString: connectionString,
});

// Nombre de la nueva base de datos que deseas crear
const nuevaBaseDeDatos = 'nombre_de_tu_nueva_base';

// Query para crear la nueva base de datos
const queryCrearBaseDeDatos = `CREATE DATABASE ${nuevaBaseDeDatos};`;

// Conecta a PostgreSQL y ejecuta la consulta para crear la base de datos
pool.query(queryCrearBaseDeDatos, (error, resultado) => {
  if (error) {
    console.error('Error al crear la base de datos:', error);
  } else {
    console.log('Base de datos creada exitosamente');
  }

  // Cierra la conexión al finalizar
  pool.end();
}); */
