const express = require('express')

const router = express.Router();

const connection = require('../util/mysql')

connection.connect();
let sql = 'select * from test_user'
let str = "";
const query = function(){
    
    connection.query(sql,(err,result)=>{
        if(err){
            console.log('[SELECT ERROR]:',err.message);
            return;
        }
        str = JSON.stringify(result);
    })
}

router.get('/login',(req,res)=>{
    query()
    console.log(str);
    res.send(str)
})



module.exports = router;