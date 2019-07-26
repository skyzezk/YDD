<template>
  <div>   
    <router-view/>  
  </div>
</template>
<script>
import './components/css/App.css'
export default {
  data(){
    return {

    }
  },
  created(){
    this.$router.push('/')
  },
}
</script>


