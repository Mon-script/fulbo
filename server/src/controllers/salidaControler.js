const connection = require("../models/db");

module.exports.getSalida = (req, res) => {
  //const consult = 'SELECT * FROM SALIDA';
  const consult = `SELECT 
    S.id_salida,
    P.id_producto,
    P.nombre_producto,
    U.id_usuario AS empleado_id,
    U.nombre AS empleado,
    S.fecha,
    S.hora
FROM 
    SALIDA S
JOIN 
    PRODUCTO P ON S.id_productofk = P.id_producto
JOIN 
    USUARIO U ON S.id_usuario= U.id_usuario`;

  try {
    connection.query(consult, (err, results) => {
      if (err) {
        console.log(err);
        res.json(err);
      }
      console.log(results);
      res.json(results);
    });
  } catch (e) {
    console.log(e);
  }
};
 
module.exports.postEntredaSalida = (req, res) => {
  const { id_codigo_barra, id_empleado, fecha, hora, id_entrada } = req.body;

  const consulDelete = `DELETE FROM ENTRADA WHERE id = ?`;

  connection.query(consulDelete, [id_entrada], (err, deleteResult) => {
    if (err) {
      console.log('Error al eliminar entrada:', err);
      return res.status(500).json({ error: 'Error al eliminar entrada' });
    }

    const consultaInsert = `INSERT INTO SALIDA (id_codigo_barrafk, id_empleadofk, fecha, hora) VALUES (?, ?, ?, ?)`;

    connection.query(consultaInsert, [id_codigo_barra, id_empleado, fecha, hora], (err, insertResult) => {
      if (err) {
        console.log('Error al insertar salida:', err);
        return res.status(500).json({ error: 'Error al insertar salida' });
      }

      console.log('Inserción exitosa en salida:', insertResult);
      return res.status(200).json({ message: 'Eliminación de entrada y salida registrada exitosamente' });
    });
  });
};

module.exports.deleteSalida =(req, res)=>{
  const id=req.body
  const consult = `DELETE FROM SALIDA WHERE id= ? `

  try{
    connection.query(consult,[id], (err, results)=>{
      console.log(results)
      res.json(results)
    })
  } catch(e){
    console.log(e)
    res.json(e)
    
  }
}


/*
module.exports.postEntredaSalida = (req, res) => {
  const { id_codigo_barra, id_empleado, fecha, hora, id_entrada } = req.body;

  const consulDelete = `DELETE FROM ENTRADA WHERE id = ?`;

  connection.query(consulDelete, [id_entrada], (err, deleteResult) => {
    if (err) {
      console.log('Error al eliminar entrada:', err);
      return res.status(500).json({ error: 'Error al eliminar entrada' });
    }

    const consultaInsert = `INSERT INTO SALIDA (id_codigo_barrafk, id_empleadofk, fecha, hora) VALUES (?, ?, ?, ?)`;

    connection.query(consultaInsert, [id_codigo_barra, id_empleado, fecha, hora], (err, insertResult) => {
      if (err) {
        console.log('Error al insertar salida:', err);
        return res.status(500).json({ error: 'Error al insertar salida' });
      }

      console.log('Inserción exitosa en salida:', insertResult);
      return res.status(200).json({ message: 'Eliminación de entrada y salida registrada exitosamente' });
    });
  });
};

*/
