<template>
  <div id="header">
    <div class="bg_sit">
      <div class="header">
        <!--logo-->
        <a href="#"><img src="https://img.rrcj123.com/detleJQ/img/logo.png" alt="" class="my_logo_width"></a>
        <!--导航栏-->
        <ul class="header_nav">
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/jingnews">鲸闻</router-link></li>
          <li><router-link to="/index">社区</router-link></li>
          <li><router-link to="/index">兴趣</router-link></li>
          <li><router-link to="/index">直播</router-link></li>
          <li><router-link to="/index">甩甩尾巴</router-link></li>
          <li><router-link to="/shanyhs">尾巴回收</router-link></li>
          <li><router-link to="/index">客户端</router-link></li>
        </ul>
        <ul v-if=!islogin class="r" id="someone">
          <li id="dl"><router-link to="/login" class="dl">登录</router-link></li>
          <li><router-link to="/register" class="dl">注册</router-link></li>
        </ul>
        <div v-else id="dlcg">


            <ul id="zhux"><li style=" color: #9c9c9c;cursor:pointer" v-html="uname"></li></ul>
            <ul id="photo"   @mouseenter="hover2" @mouseleave="leave2">
              <li><img src="https://img.rrcj123.com/detleJQ/img/dlcg.png" alt=""/></li>
              <li id="l2" v-show="isshow2">
                <ul class="photo-text">
                  <li>个人中心</li>
                  <li>我的关注</li>
                  <li>我的收藏</li>
                  <li>设置</li>
                  <li @click="signout">退出</li>
                </ul>
              </li>
            </ul>
            <ul id="lingdang" @mouseenter="hover" @mouseleave="leave" >
              <li><img src="https://img.rrcj123.com/detleJQ/img/lingdang.png" alt=""/></li>
              <li id="l1">
                <ul class="lingdang-text" v-show="isshow">
                  <li>评论</li>
                  <li>赞</li>
                  <li>私信</li>
                  <li>通知</li>
                </ul>
              </li>
            </ul>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "xz-header",
        data() {
            return {
                islogin: false,
                isshow:false,
                isshow2:false,
                uid:"",
                uname:""
            }
        },
        mounted() {
            this.uid=sessionStorage.getItem("uid");
            this.$http.post("login/islogin", {uid: this.uid}).then(result => {
                if(result.body.ok === 1){
                    this.uname=result.body.uname;
                    this.islogin=true;
                }else{
                    this.islogin=false;
                }
            });
        },
        methods: {
            signout(e) {
                e.preventDefault();
                this.uid="";
                this.$http.get("login/signout").then(result => {
                    this.isshow=false;
                    this.isshow2=false;
                    sessionStorage.clear();
                    this.$router.push("/login");
                })
            },
            hover(){this.isshow=true},
            leave(){this.isshow=false},
            hover2(){this.isshow2=true},
            leave2(){this.isshow2=false},
        },
        watch:{
            $route(to,from){
                this.uid=sessionStorage.getItem("uid");
                this.$http.post("login/islogin", {uid: this.uid},{ emulateJSON : true,withCredentials: true}).then(result => {
                    this.uname=result.body.uname;
                    if(result.body.ok === 1){
                        this.uname=result.body.uname;
                        this.islogin=true;
                    }else{
                        this.islogin=false;
                    }
                });
            }
        }

    }
</script>
<style scoped>
  @import "../assets/css/header.css";
</style>
