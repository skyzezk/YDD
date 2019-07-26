<template>
    <div>
        <div>
            <div id='vip'>
                <div class='nav'>
                    <div @click='btnReturn'>
                        <img src="../assets/ico_10.png" alt="">
                    </div>
                    <h1>登录/注册</h1>
                    <div></div>
                </div>
            </div>
            <div :class='hide3'>
                <div class='login'>
                    <div>欢迎光临，登录后体验更多服务</div>
                    <div>
                        <div :class='on1' @click='show(1)'>登录</div>
                        <div :class='on2' @click='show(2)'>注册</div>
                    </div>
                </div>
                <div :class='hide1'>
                    <mt-field placeholder='用户名/手机/电子邮件地址' :attr='{maxlength:12}' v-model='uname'></mt-field><br>
                    <mt-field placeholder='密码' type='password' :attr='{maxlength:12}' v-model='upwd'></mt-field><br>
                    <mt-button size='large' class='mybutton' @click='login'>立即登录</mt-button>
                </div>
                <div :class='hide2'>
                    <mt-field placeholder='请输入用户名' :attr='{maxlength:12}' v-model='uname'></mt-field><br>
                    <mt-field placeholder='请输入密码' :attr='{maxlength:12}' v-model='upwd'></mt-field><br>
                    <mt-field placeholder='请重新输入一遍密码' :attr='{maxlength:12}' v-model='upwd1'></mt-field><br>
                    <mt-button size='large' class='mybutton' @click='reg'>下一步</mt-button>
                </div>
            </div>
            <div :class='hide4' class='islogin'>
                <div>欢迎{{uname}}</div><br>
                <mt-button size='large' class='mybutton' @click='show(4)'>退出登录</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            on1:'active',
            on2:'',
            uname:'',
            upwd:'',
            upwd1:'',
            hide1:'',
            hide2:'hide',
            hide3:'',
            hide4:'hide',
        }
    },
    created(){
        this.axios.get('/user/islogin')
        .then(res=>{
            if(res.data.code==1){
                this.uname=res.data.msg;
                this.show(3);
            }else{
                this.hide3='';
                this.hide4='hide';
                this.uname='';
                this.upwd='';
            }
        })
    },
    methods:{
        btnReturn(){
            this.$router.back();
        },
        show(i){
            if(i==1){
                this.on1='active';
                this.on2='';
                this.hide1='';
                this.hide2='hide';
                this.uname='';
                this.upwd='';
            }else if(i==2){
                this.on1='';
                this.on2='active';
                this.hide1='hide';
                this.hide2='';
                this.uname='';
                this.upwd='';
            }else if(i==3){
                this.hide3='hide';
                this.hide4='';
            }else{
                this.$messagebox.confirm('是否退出登录')
                .then(action=>{
                    this.$messagebox('','退出成功').then(()=>{
                        this.axios.get('/user/out');                   
                        var t=setTimeout(()=>{
                            this.hide3='';
                            this.hide4='hide';
                            this.uname='';
                            this.upwd='';
                            clearTimeout(t);
                        },500)
                    })
                })
                .catch(err=>{})
            }
        },
        login(){
            var uname=this.uname;
            var upwd=this.upwd;
            this.axios.get('/user/login',{params:{uname,upwd}})
            .then(res=>{
                if(res.data.code==1){
                    this.$messagebox('',res.data.msg)
                    this.show(3);
                }else{
                    this.$messagebox('',res.data.msg)
                }
            })
        },
        reg(){
            if(this.upwd==this.upwd1){
                var uname=this.uname;
                var upwd=this.upwd;
                this.axios.get('/user/reg',{params:{uname,upwd}}).then(res=>{
                    if(res.data.code==1){
                        this.$messagebox('',res.data.msg).then(()=>{
                            this.show(1);
                        })
                    }
                    else{
                        this.$messagebox('',res.data.msg);
                    }
                })
            }
            else{
                this.$messagebox('','两次密码不一致')
            }
        }
    }
}
</script>
<style scoped>
    .login{
        margin-top:20px;
        margin-bottom:20px;
        font-size:0.9rem;
        display:flex;
        justify-content: space-between;
        align-items: center
    }
    .login>div:first-child{
        margin-left:10px;
    }
    .login>div:last-child{
        display:flex;
        font-size:1.1rem;
    }
    .login>div>div{
        margin:0px 5px;
        color:#8d8d8d;
        padding:5px;
    }
    .active{
        color:#ff6700 !important;
        border-bottom:2px solid #ff6700;
    }
    .hide{
        display:none;
    }
    .mybutton{
        color:white;
        background:#ff6700;
    }
    .islogin>div{
        text-align: center;
        margin-top:30px;
        font-size:1.5rem;
    }
</style>


