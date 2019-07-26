<template>
    <div>
        <div class='nav'>
            <div @click='btnReturn'>
                <img src="../assets/ico_10.png" alt="">
            </div>
            <h1>商品详情</h1>
            <div></div>
        </div>
        <div class='pro'>
            <div class='textCenter'><img :src='imgUrl'></div> 
            <div>
                <h1>{{pname}}</h1>
                <div>{{ptitle}}</div>
                <div style='margin-bottom:0.5rem;'><span>本店售价:</span>
                    <b>{{newPic}}</b>
                    <s>{{oldPic}}</s>
                </div>
                <span>销量:{{salNum}}</span>
            </div>
        </div>
        <div class='choose'>
            <div>商品总价:<span>{{total}}</span></div>
            <div>数量:</div>
            <div>
                <button @click='numChange(-1)'>－</button>
                <span>{{num}}</span>
                <button @click='numChange(1)'>＋</button>
            </div>
            <ul class='btns'>
                <li><button @click="toUrl('/shopcart')">立即购买</button></li>
                <li><button @click="toUrl('/shopcart')">加入购物车</button></li>
            </ul>
        </div>
    </div>
</template>
<script>
import './css/ProductInfo.css'
export default {
    data(){
        return {
            proInfo:'',
            imgUrl:'',
            pname:'',
            ptitle:'',
            newPic:'',
            oldPic:'',
            salNum:'',
            total:0,
            num:0,
        }
    },
    created(){
        this.loadPro();
        
    }
    ,
    methods:{
        btnReturn(){
            this.$router.back();
        },
        loadPro(){
            var pid=this.$route.query.pid;
            this.axios.get('/pro/loadPro',{params:{pid}}).then(res=>{
                this.proInfo=res.data[0];
                this.imgUrl=this.proInfo.imgUrl;
                this.pname=this.proInfo.pname;
                this.oldPic=this.proInfo.oldPic;
                this.newPic=this.proInfo.newPic;
                this.salNum=this.proInfo.salNum;
                this.ptitle=this.proInfo.ptitle;
            })
        },
        numChange(i){      
            this.num+=i;
            if(this.num<0){
                this.num=0;
            }
            this.total=this.num*this.newPic;
        },
        toUrl(url){
            this.$router.push(url);
        }
    }
}
</script>
