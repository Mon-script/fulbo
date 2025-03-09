const connection = require('../models/db');

module.exports.getProvincias =(req,res)=>{

    const consult = `SELECT * FROM PROVINCIA`

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