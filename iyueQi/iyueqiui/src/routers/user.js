const express=require('express');
const pool=require('../pool.js');
const session=require('express-session');

var router=express.Router();
router.get('/login',function(req,res){
    var obj=req.query;
    var sql='select uid from login where uname=? and upwd=?'
    pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            session.uid = result[0].uid;
            res.send({code:1,msg:'登录成功'})
        }else{
            res.send({code:0,msg:'用户名或者密码错误'})
        }
    })
});
router.get('/reg',function(req,res){
    var sql='select uid from login where uname=?'
    pool.query(sql,[req.query.uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:0,msg:'用户名已经存在'});
            return;
        }
        var sql="insert into login values ('',?,?)"
        pool.query(sql,[req.query.uname,req.query.upwd],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:'注册成功'})
            }else{
                res.send({code:0,msg:'注册失败'})
            }
        })
    })
})
router.get('/islogin',function(req,res){
    var sql='select uname from login where uid=?';
    pool.query(sql,[session.uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result[0].uname})
        }else{
            res.send({code:0})
        }
    }) 
})
router.get('/out',function(req,res){
    session.uid=-1;
})

module.exports=router;