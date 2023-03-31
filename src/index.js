const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));

const serverPort = 4000;

// Define en qué puerto escucha el servidor de backend las peticiones: 
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

let connection;

// Crea la "petición" de conexión con la base de datos (freedb):
mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_projects-team6',
    user: 'freedb_sixonfire',
    password: 'G!mKn4HYfX?@@3Y',
  })
  // Si tiene "permiso" para conectar recibimos el objeto "conn" que usaremos para establecer la conexión:
  .then(conn => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(`Conexión establecida con la base de datos (identificador=${connection.threadId})`);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  // Si no tiene "permiso", hemos configurado algo mal: 
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

// Definimos un endpoint (/) para poder utilizar con el método GET. Y así en el navegador cuando ponemos http://localhost:4000/ recibimos el mensaje "Hola Adalabers!".
server.get('/', (req, res) => {
  res.send("Hola Adalabers!");
});

// Definimos un endpoint para poder utilizar con el método GET. Y si ponemos en el navegador http://localhost:4000/api/projects/all funciona = no nos da un error 404:
server.get('/api/projects/all', (req, res) => {

  //Guardamos en la variable "sql" un string con una query SQL:
  let sql = 'SELECT * FROM projects, autors WHERE projects.fkAutors = autors.id_autor ';

  connection
    // Usamos la conexión a la base de datos y ejecutamos la query que acabamos de definir:
    .query(sql)

    // Si la ejecución de la query ha funcionado, aquí tendremos la respuesta:
    .then(([results, fields]) => {
      console.log('Información recuperada:');
      results.forEach((result) => {
        console.log(result);
      });

      // Devolvemos el resultado de la query a quien haga la petición:
      res.json({
        success: true,
        projects: results
      });
    })
    // Si no ha ido bien la ejecución de la query, salta un error:
    .catch((err) => {
      throw err;
    });
});
