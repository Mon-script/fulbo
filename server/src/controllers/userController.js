const bcrypt = require('bcrypt');
const connection = require('../models/db'); // Asegúrate de que esta conexión esté correctamente configurada
const jwt = require('jsonwebtoken');

const saltRounds = 10; // Número de rondas para el hashing con bcrypt

module.exports.registrarUsuario = async (req, res) => {
    const { nombre, apellido, usuario, contrasena, id_rol,email_usuario,telefono_usuario, fecha_inicio} = req.body;

    // Hashear la contraseña antes de almacenarla
    try {
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        // Consulta para insertar el usuario
        const consult = 'INSERT INTO USUARIO (nombre, apellido, usuario, contrasena, id_rol, email_usuario, telefono_usuario ,fecha_inicio,activo) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)';

        connection.query(consult, [nombre, apellido, usuario, hashedPassword,id_rol,email_usuario,telefono_usuario,fecha_inicio,1], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al registrar el usuario');
            }

            // Enviar respuesta de éxito
            res.status(200).send('Usuario registrado exitosamente');
        });
    } catch (error) {
        console.error('Error al hashear la contraseña:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
};

module.exports.getUsuarios =(req,res)=>{
    const consult = `
    SELECT 
      U.id_usuario,
      U.nombre,
      U.apellido,
      U.usuario,
      U.contrasena,
      R.id_rol,
      R.nombre_rol,
      U.email_usuario,
      U.telefono_usuario,
      U.fecha_inicio,
      U.activo
    FROM 
      USUARIO U
    JOIN 
      ROL R ON U.id_rol = R.id_rol
  `;
    try{
        connection.query(consult,(err,result)=>{
            if(err){
                console.error(err)
                res.status(500).send(err);
            }else{
                res.status(200).send(result);
            }
            

        })
    }catch (error) {
        console.error(error);
        res.send(error);
    }


}

module.exports.updateUsuario = (req, res) => {
    const {id_usuario, nombre, apellido, usuario, contrasena, id_rol, email_usuario, telefono_usuario, fecha_inicio, activo } = req.body;
  
    const consult = `
      UPDATE USUARIO SET 
        nombre = ?, 
        apellido = ?, 
        usuario = ?, 
        contrasena = ?, 
        id_rol = ?, 
        email_usuario = ?, 
        telefono_usuario = ?, 
        fecha_inicio = ?, 
        activo = ?
      WHERE 
        id_usuario = ?
    `;
  
    try {
      connection.query(consult, [ nombre, apellido, usuario, contrasena, id_rol, email_usuario, telefono_usuario, fecha_inicio, activo, id_usuario], (err, results) => {
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
module.exports.deleteUsuario = (req, res) => {
    const consult = `UPDATE USUARIO
                    SET activo = 0
                    WHERE id = (?);`;
    try {
        connection.query(consult, [req.params.id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else if (result.affectedRows > 0) {
                res.status(200).send('Usuario deshabilitado');
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar la solicitud');
    }
};

module.exports.reintegroUsuario = (req, res) => {
    const consult = `UPDATE USUARIO
                    SET activo = 1
                    WHERE id = (?);`;
    try {
        connection.query(consult, [req.params.id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else if (result.affectedRows > 0) {
                res.status(200).send('Usuario habilitado');
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar la solicitud');
    }
};

