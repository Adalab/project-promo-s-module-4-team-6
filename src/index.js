const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

let connection;

mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_projects-team6',
    user: 'freedb_sixonfire',
    password: 'G!mKn4HYfX?@@3Y',
  })
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
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });

server.get('/api/projects/all', (req, res) => {
  let sql = 'SELECT * FROM projects, autors WHERE projects.fkAutors = autors.id_autor ';
  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log('Información recuperada:');
      results.forEach((result) => {
        console.log(result);
      });

      res.json({
        success: true,
        projects: results
      });
    })
    .catch((err) => {
      throw err;
    });
});
