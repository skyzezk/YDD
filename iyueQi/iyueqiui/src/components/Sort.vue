<template>
    <div>
        <div id='sort'>
            <div class='nav'>
                <div @click='btnReturn'>
                    <img src="../assets/ico_10.png" alt="">
                </div>
                <h1>所有分类页</h1>
                <div></div>
            </div>
        </div>
        <ul class='list'>
            <li>
                <div  @click='showlist(1)'>
                    <img src="./img/list1.png" >
                    <span>民谣与指弹吉他</span>
                    <img src='./img/ico_11.png'>
                    <img src='./img/ico_12.png' class='hide'>
                </div>
                <ul class='list2'>
                    <li><a href="javascript:;">民谣吉他</a></li>  
                    <li><a href="javascript:;">古典吉他</a></li>
                    <li><a href="javascript:;">旅行吉他</a></li>
                    <li><a href="javascript:;">尤克里里</a></li>
                </ul>
            </li>
            <li>
                <div  @click='showlist(2)'>
                    <img src="./img/list2.png" >
                    <span>吉他常用配件</span>
                    <img src='./img/ico_11.png'>
                    <img src='./img/ico_12.png' class='hide'>
                </div>
                <ul class='list2'>
                    <li><a href="javascript:;">吉他配件</a></li>  
                    <li><a href="javascript:;">架子鼓配件</a></li>
                </ul>
            </li>
            <li>
                <div  @click='showlist(3)'>
                    <img src="./img/list3.png" >
                    <span>乐理与吉他教材</span>
                    <img src='./img/ico_11.png'>
                    <img src='./img/ico_12.png' class='hide'>
                </div>
                <ul class='list2'>
                    <li><a href="javascript:;">乐理教材</a></li>  
                    <li><a href="javascript:;">吉他教材</a></li>
                </ul>
            </li>
            <li>
                <div  @click='showlist(4)'>
                    <img src="./img/list4.png" >
                    <span>耳机与音响设备</span>
                    <img src='./img/ico_11.png'>
                    <img src='./img/ico_12.png' class='hide'>
                </div>
                <ul class='list2'>
                    <li><a href="javascript:;">高保真耳机</a></li>  
                    <li><a href="javascript:;">立体音响</a></li>
                    <li><a href="javascript:;">麦克风</a></li>
                </ul>
            </li>
            <li>
                <div  @click='showlist(5)'>
                    <img src="./img/list5.png" >
                    <span>架子鼓与电子鼓</span>
                    <img src='./img/ico_11.png'>
                    <img src='./img/ico_12.png' class='hide'>
                </div>
                <ul class='list2'>
                    <li><a href="javascript:;">电子鼓</a></li>  
                </ul>
            </li>
        </ul>
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
        showlist(i){
            var ul=document.getElementsByClassName('list')[0];
            var imgs=document.querySelectorAll('.list img');
            var listUls=document.getElementsByClassName('list2');
            var first=(3*i-1)-1;
            var second=3*i-1;
            if(!imgs[first].className){
                imgs[first].className='hide';
                imgs[second].className='';
                if(i==1){
                    listUls[i-1].className='list2 show'
                }else{
                    listUls[i-1].className='list2 show1'
                }
            }else{
                imgs[first].className='';
                imgs[second].className='hide';
                listUls[i-1].className='list2'
            }
        }
    }
}
</script>
<style scoped>
    a{
        text-decoration: none;
        font-size:1rem;
        color:#8d8d8d;
    }
    .hide{
        display:none;
    }
    ul{
        list-style:none;
    }
    .list li>div{
        background:#f4f4f4;
        float:left;
        width:100%;
        height:72px;
        border-bottom:0.5px solid #d7d7d8;
    }
    .list li img:first-child{
        float:left;
        margin-top:10px;
        margin-left:10px;
    }
    .list span{
        font-size:1rem;
        float:left;
        margin-top:27px;
        margin-left:10px;
    }
    .list li img:not(:first-child){
        width:16px;
        float:right;
        margin-top:27px;
        margin-right:15px;
    }
    .list2:after{
        content: '';
        display:block;
        clear:both;
    }
    .list2{
        background:#f4f4f4;
        padding-left:30px;
        transition:all .3s linear;
        height:0px;
        overflow:hidden;
        border-bottom:0.5px solid #d7d7d8;
    }
    .show{
        height:144px;
    }
    .show1{
        height:72px;
    }
    .list2>li{
        float:left;
        height:32px;
        width:33%;
        padding:20px 0px;
        
    }
</style>

