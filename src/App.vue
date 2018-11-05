<template>
  <div id="app">
    <xz-header></xz-header>
    <!--路由-->
    <router-view></router-view>
    <!--底部-->
    <xz-footer></xz-footer>
  </div>
</template>
<script>
    import XzHeader from "@/components/Header.vue"
    import XzFooter from "@/components/Footer.vue"
    export default {
        components:{XzFooter,XzHeader},
        // watch:{
        //     $route(to,from){
        //         console.log(111);
        //     }
        // },
    }
</script>
<style>
  /*@import "assets/css/header.css";*/
  @import "assets/css/footer.css";
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
