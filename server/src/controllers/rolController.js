const connection = require('../models/db');

module.exports.getRol=(req,res)=>{
    const consult = `SELECT * FROM ROL`

    try{
        connection.query(consult,(err,result)=>{
            if(err){
                console.error(err)
                res.status(500).send(err);
            }else{
                console.log(result)
                res.status(200).send(result);
            }
            

        })
    }catch (error) {
        console.error(error);
        res.send(error);
    }
    
}