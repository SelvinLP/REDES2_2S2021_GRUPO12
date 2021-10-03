var http = require('http');
const mysql   = require('mysql');
const express = require("express");
const cors = require("cors");

const pool = mysql.createPool({
  host:     process.env.MYSQL_HOST      || 'localhost',
  user:     process.env.MYSQL_USER      || 'redes2_g12',
  password: process.env.MYSQL_PASSWORD  || '123g12',
  port:     process.env.MYSQL_PORT      || 3306,
  database: process.env.MYSQL_DB        || 'practica2_g12',
  debug:    false
});

function raw_query(query){
    return new Promise((resolve, reject) => {
          pool.query(query, (err, data)=>{
            if(err) reject(err);
            resolve(data);
          })
    });
}

function wrap_function(anotherFunction, debugInfo = null) {
  return function (req, res) {
      if(debugInfo) console.log(debugInfo);
      anotherFunction(req, res).catch((err) => {
          return res.status(500).send({
          message: err["message"] ? err["message"] : "An error occurred.",
          });
      });
  };
}

async function insertar_reporte(req, res) {
  try {
    const { carnet, nombre, proyecto, cuerpo } = req.body;
    await raw_query(`INSERT INTO Reporte (Carnet, Nombre, Proyecto, Fecha, Cuerpo, Servidor)
     VALUES ('${carnet}', '${nombre}', '${proyecto}', NOW(), '${cuerpo}', '${process.env.MESSAGE}');`);
    res.json({ success: true, message: `Solicitud atendida por el servidor ${process.env.MESSAGE}` });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

async function obtener_reportes(req, res) {
  try {
    var carnet = req.params.carnet;
    var query = (carnet == undefined) ? `SELECT * FROM Reporte;`: `SELECT * FROM Reporte WHERE Carnet = ${carnet};`;
    var data = await raw_query(query);
    res.json({ success: true, message: data });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();

app.set("port", process.env.SERVER_PORT || 8000);
app.use(express.json());
app.use(cors(corsOptions));

app.post("/", wrap_function(insertar_reporte));
app.get("/", wrap_function(obtener_reportes));
app.get("/:carnet", wrap_function(obtener_reportes));

app.listen(app.get("port"), () => {
  console.log(`Servidor ${process.env.MESSAGE} escuchando en el puerto: `, app.get("port"));
});
