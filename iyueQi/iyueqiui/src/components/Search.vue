<template>
    <div>
        <div id='search'>
            <div class='nav'>
                <div @click='btnReturn'>
                    <img src="../assets/ico_08.png" alt="">
                </div>
            </div>
        </div>
        <div class='search'>
            <table></table>
            <div>
                <input type="text" class='focusnone' v-model='val'>
                <button  class='focusnone' @click='searchall'>
                    <img src="../assets/ico_07.png" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:'',
        }
    },
    methods:{
        searchall(){
            if(this.val){
                console.log(this.val)
            }          
        }, 
        btnReturn(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .search{
        height:55px;
        width:100%;
        background:#B9B9B9;
        position: relative;
    }
    .search input{
        width: 80%;
        height: 1.9rem;
        line-height: normal;
        border: none;
        font-size: 1rem;
    }
    .search button{
        background: url(../assets/ico_07.png) no-repeat 50% 50%;
        position: absolute;
        top: 20%;
        right: 5%;
        width: 1.2rem;
        height: 1.2rem;
        border: none;
    }
    .search img{
        width:100%;
    }
    .search div{
        width:90%;
        height:60%;
        background:#fff;
        border-radius:20px;
        text-align:center;
        position: absolute;
        top:20%;
        left:5%;
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
