
<template>
    <div>
        <h2>子组件</h2>
        <p>{{num}}</p>
        <button @click='btn'>点击</button>
    </div>
</template>

<script>
    export default{
        name:"app",
        data(){
        return {
            num: 0
        }
    },
         methods: {
            btn() {
            this.num++
        }
    }
    }
</script>
<style>
   p{
       color:red;
   }
</style>