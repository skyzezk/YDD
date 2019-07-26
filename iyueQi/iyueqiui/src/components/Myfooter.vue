<template>
    <div>
        <div class='myfooter'>
            <div>
                <a href="./"><img src="../assets/ico_05.png" alt=""></a>
            </div>
            <div class='searchf'>
                <div>
                    <input type="text" class='focusnone'>
                    <button  class='focusnone'>
                        <img src="../assets/ico_07.png" alt="">
                    </button>
                </div>
            </div>
            <div class='top'>
                <a href="#top"><img src="../assets/ico_06.png" alt=""></a> 
            </div>
        </div>
        <p>
            ICP备案证书号:
            <a href="javascript::"> 粤ICP备14088480号-1</a>
            © 2005-2019 爱乐器官网 版权所有，并保留所有权利。 
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .myfooter{
        height:45px;
        display:flex;
        justify-content:space-between;
    }
    .myfooter>div:not(:nth-child(2)){
        background:#a1a1a1;
        width:14%;
        border:1px solid #a1a1a1;
        padding:5px;
        text-align: center
    }
    .myfooter>div:not(:nth-child(2)) img{
        width:30px;
    }
    .searchf{
        width:100%;
        background:#B9B9B9;
        position: relative;
    }
    .searchf input{
        width: 80%;
        height: 1.9rem;
        line-height: normal;
        border: none;
        font-size: 1rem;
    }
    .searchf button{
        background: url(../assets/ico_07.png) no-repeat 50% 50%;
        position: absolute;
        top: 27%;
        right: 8%;
        width: 1.2rem;
        height: 1.2rem;
        border: none;
    }
    .searchf img{
        width:20px;
    }
    .searchf div{
        margin:auto auto;
        width:90%;
        height:73%;
        background:#fff;
        border-radius:20px;
        margin-top:0.4rem;
        text-align:center;
    }
    .focusnone:focus{
        outline:none;
    }
    p{
        margin-top:5px;
        text-align: center;
        line-height: 1.3rem;
        color:rgb(180, 180, 180);
        font-size:10px;
    }
    a{
        color:rgb(180, 180, 180);
        font-size:10px;
    }
</style>


