<template>
    <div>
        <div id="shopcart">
            <div class='nav'>
            <div @click='btnReturn'>
                <img src="../assets/ico_10.png" alt="">
            </div>
            <h1>购物车</h1>
            <div>
            </div>
            </div>
        </div>
        <div class='infoList'>
            <div>1.购物车列表</div>
            <div>2.确认订单</div>
            <div>3.购物成功</div>
        </div>
        <div class='bgImg'></div>
        <p>没有宝贝哦，不如去添加宝贝</p>
        <div class='btns'>
            <button @click="toUrl('/')">去购物</button>
            <button @click="toUrl('/vip')">查看收藏夹</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        btnReturn(){
            this.$router.back();
        },
        toUrl(url){
            this.$router.push(url);
        }
    }
}
</script>
<style scoped>
    .infoList{
        display:flex;
        justify-content: space-around;
        width:100%;
        height:2.4rem;
        background:#fff;
        text-align: center;
        line-height:2.4rem;
    }
    .infoList div{
        width:33%;
        color:#333;
        font-size:0.8rem;
        height:100%;
    }
    .infoList div:first-child{
        color:#ff6700;
        border-bottom: 1px solid #ff6700;
    }
    .bgImg{
        width:100%;
        height:10rem;
        margin-top:3rem;
        background:url('../assets/ico_13.png') 50% 50% no-repeat;
    }
    p{
        margin-top:1rem;
        margin-bottom: 2rem;
        color:#333;
        font-size:1rem;
    }
    .btns{
        display:flex;
        justify-content: space-around;
    }
    .btns button{
        width:35%;
        height:2.5rem;
        border-radius:8px;
        color:#fff;
    }
    .btns button:first-child{
        background: #b9d11a;
    }
    .btns button:last-child{
        background: #ff6700;
    }
</style>
