const connection = require("../models/db");

module.exports.getEntrada = (req, res) => {
  //const consult = 'SELECT * FROM SALIDA';
  const consult = `SELECT 
    E.id_entrada ,
    P.id_producto,
    P.nombre_producto ,
    M.nombre_marca AS marca,
    E.cantidad_producto,
    E.fecha,
    E.hora
FROM 
    ENTRADA E
JOIN 
    PRODUCTO P ON E.id_productofk = P.id_producto
JOIN 
    MARCA M ON M.id_marca= P.id_marca`

   

  try {
    connection.query(consult, (err, results) => {
      console.log(results);
      res.json(results);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports.deleteEntrada =(req, res)=>{
  const id=req.body
  const consult = `DELETE FROM ENTRADA WHERE id= ? `

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