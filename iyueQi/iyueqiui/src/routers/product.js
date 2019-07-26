const express=require('express');
const pool=require('../pool.js')

var router=express.Router();

router.get('/load',function(req,res){
    var sql='select * from product order by salClass asc;'
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
});
router.get('/loadPro',function(req,res){
    var sql='select * from product where pid=?;'
    pool.query(sql,[req.query.pid],(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
});
module.exports=router;
