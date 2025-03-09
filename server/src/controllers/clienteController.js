const connection = require('../models/db');


module.exports.getClientes = (req, res) => {
  const consult = `
    SELECT 
      C.id_cliente,
      C.nombre,
      C.apellido,
      C.email_cliente,
      C.dni_cliente,
      C.cuil_cliente,
      C.genero_cliente,
      C.telefono_cliente,
      C.direccion_cliente,
      C.activo,
      P.nombre_provincia,
      U.nombre AS nombre_usuario,
      U.apellido AS apellido_usuario,
      U.id_rol AS nombre_rol
    FROM 
      CLIENTE C
    JOIN 
      PROVINCIA P ON C.id_provinciafk = P.id_provincia
    JOIN 
      USUARIO U ON C.id_usuario = U.id_usuario
  `;

  try {
    connection.query(consult, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(results);
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

module.exports.postCliente = (req, res) => {
  const {  nombre, apellido, email_cliente, dni_cliente, cuil_cliente, genero_cliente, telefono_cliente, direccion_cliente, nombre_provincia, id_usuario, nombre_empresa } = req.body;
nombre_provincia
  const consult = `
    INSERT INTO CLIENTE ( nombre, apellido, email_cliente, dni_cliente, cuil_cliente, genero_cliente, telefono_cliente, direccion_cliente, id_provinciafk, id_usuario, nombre_empresa, activo) 
    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    connection.query(consult, [ nombre, apellido, email_cliente, dni_cliente, cuil_cliente, genero_cliente, telefono_cliente, direccion_cliente, nombre_provincia, id_usuario, nombre_empresa,1], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json({ message: 'Cliente creado con éxito',results});
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

module.exports.updateCliente = (req, res) => {
  const { id_cliente, nombre, apellido, email_cliente, dni, cuil, genero_cliente, telefono_cliente, direccion, id_provinciafk, id_usuario, nombre_empresa, activo } = req.body;

  const consult = `
    UPDATE CLIENTE SET  
      nombre = ?, 
      apellido = ?, 
      email_cliente = ?, 
      dni = ?, 
      cuil = ?, 
      genero_cliente = ?, 
      telefono_cliente = ?, 
      direccion_cliente = ?, 
      id_provinciafk = ?, 
      id_usuario = ?, 
      nombre_empresa = ?, 
      activo = ?
    WHERE 
      id_cliente = ?
  `;

  try {
    connection.query(consult, [nombre, apellido, email_cliente, dni, cuil, genero_cliente, telefono_cliente, direccion, id_provinciafk, id_usuario, nombre_empresa, activo, id_cliente], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(results);
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

module.exports.reactivarCliente = (req, res) => {
    const id_cliente = req.body;
  
    const consult = `
      UPDATE USUARIO SET activo=? WHERE id_usuario = ?
    `;
  
    try {
      connection.query(consult, [1,id_cliente], (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err });
        }
        res.json(results);
      });
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  };

module.exports.deleteCliente = (req, res) => {
  const id_cliente = req.body;

  const consult = `
    UPDATE USUARIO SET activo=? WHERE id_usuario = ?
  `;

  try {
    connection.query(consult, [0,id_cliente], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(results);
    });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};