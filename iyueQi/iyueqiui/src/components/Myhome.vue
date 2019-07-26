<template>
    <div>
        <div class='nav'>
            <div @click='goSort'>
                <img src="../assets/ico_02.png" alt="">
            </div>
            <h1>爱乐器官网</h1>
            <div @click='goCart'>
                <img src="../assets/ico_01.png" alt="">
            </div>
        </div>
        <div class='navlist' :class='hide'></div>
        <mt-tabbar fixed style='height:70px;align-items:center;color:#999' v-model='active'>
        <mt-tab-item id='myhome'>
            <div @click="changeurl('/')">
            <img src="../assets/home.png" alt="" slot="icon" ><br>
            <span>首页</span>
            </div>
        </mt-tab-item>
        <mt-tab-item id='sort'>
            <div @click="changeurl('/sort')">
            <img src="../assets/icon_indexn_01.png" alt="" slot="icon"><br>
            <span>分类</span>
            </div>
        </mt-tab-item>
        <mt-tab-item id='search'>
            <div @click="changeurl('/search')">
            <img src="../assets/icon_03.png" alt="" slot="icon"><br>
            <span>搜索</span>
            </div>
        </mt-tab-item>
        <mt-tab-item id='shopcart'>
            <div @click="changeurl('/shopcart')">
            <img src="../assets/icon01.png" alt="" slot="icon"><br>
            <div class='relative'>
                <div class='num'>0</div>
                <span>购物车</span>
            </div>
            </div>
        </mt-tab-item>
            <mt-tab-item id='vip'>
                <div @click="changeurl('/vip')">
                <img src="../assets/icon05.png" alt="" slot="icon"><br>
                <span>会员中心</span>
                </div>
            </mt-tab-item>
        </mt-tabbar>
        <div class='region'>
            <div>
                <a>
                    <img src="../assets/icon_indexn_1.png" alt="">
                    <p>全部分类</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_02.png" alt="">
                    <p>购物车</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_03.png" alt="">
                    <p>客服</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_04.png" alt="">
                    <p>个人中心</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_05.png" alt="">
                    <p>售后</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_06.png" alt="">
                    <p>查询</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_07.png" alt="">
                    <p>分享</p>
                </a>
            </div>
            <div>
                <a>
                    <img src="../assets/icon_indexn_08.png" alt="">
                    <p>电脑版</p>
                </a>
            </div>
        </div>
        <div class='proshow'>
            <div><a><p>精品</p></a></div>
            <ul>
                <li v-for='(elem,i) of goodsList' :key='i'>
                    <a :href="'#/proInfo?pid='+elem.pid">
                        <img :src="'http://127.0.0.1:3000/'+elem.imgUrl">
                        <p>市场价<s>{{elem.oldPic}}元</s><span>{{elem.newPic}}元</span></p>
                        <p>{{elem.pname}}</p>
                    </a>
                </li>
            </ul>
            <div><div><a><p>更多</p></a></div></div>
        </div>
        <div class='proshow'>
            <div><a><p>新品</p></a></div>
            <ul>
                <li v-for='(elem,i) of newList' :key='i'>
                    <a :href="'#/proInfo?pid='+elem.pid">
                        <img :src="'http://127.0.0.1:3000/'+elem.imgUrl">
                        <p>市场价<s>{{elem.oldPic}}元</s><span>{{elem.newPic}}元</span></p>
                        <p>{{elem.pname}}</p>
                    </a>
                </li>
            </ul>
            <div><div><a><p>更多</p></a></div></div>
        </div>
        <div class='proshow'>
            <div><a><p>热卖</p></a></div>
            <ul>
                <li v-for='(elem,i) of sallWellList' :key='i'>
                    <a :href="'#/proInfo?pid='+elem.pid">
                        <img :src="'http://127.0.0.1:3000/'+elem.imgUrl">
                        <p>市场价<s>{{elem.oldPic}}元</s><span>{{elem.newPic}}元</span></p>
                        <p>{{elem.pname}}</p>
                    </a>
                </li>
            </ul>
            <div><div><a><p>更多</p></a></div></div>
        </div>
        <myfooter></myfooter>
        <div style='height:71px;'></div>        
    </div>
</template>
<script>
import './css/Myhome.css'
import Myfooter from './Myfooter.vue'
export default {
    data(){
        return {
            hide:'hide',
            active:'home',
            sallWellList:[],
            goodsList:[],
            newList:[],
        }
    },
    created(){
        this.onload()
    },
    methods:{
        onload(){
            this.axios.get('/pro/load').then(res=>{
                for (var i=0;i<res.data.length;i++){
                    if(res.data[i].salClass==1){
                        this.newList.push(res.data[i]);
                    }else if(res.data[i].salClass==2){
                        this.sallWellList.push(res.data[i]);
                    }else if(res.data[i].salClass==3){
                        this.goodsList.push(res.data[i]);
                    }
                }                
                this.sallWellList.splice(6);
                this.goodsList.splice(6);
                this.newList.splice(6);
            })
        },
        changeurl(url){
            this.$router.push(url)
        },
        navhide(){
            if(!this.hide){
                this.hide='hide';
            }else{
                this.hide='';
            }
        },
        goCart(){
            this.$router.push('/shopcart');
        },
        goSort(){
            this.$router.push('/sort');
        },
        btnReturn(){
            this.$router.back();
        }
    },
    components:{
        'myfooter':Myfooter,
    }
}
</script>

