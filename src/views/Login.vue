<style scoped>
    @import "../assets/css/header.css";
    @import "../assets/css/login.css";
</style>
<template>
    <div>
    <div id="container">
        <div id="cover" class="rt">
            <form id="form-login">
                <div class="txt">
                    <p><span>登录数字尾巴</span><router-link to="/register">新用户注册</router-link></p>
                    <div class="text">
                        <input type="text" placeholder="请输入您的用户名" name="uname" id="uname" required autofocus v-model="lo_name">
                        <!--<span class="login_span1" v-show="lo_blur" autocomplete="off">用户名不能为空！</span>-->
                    </div>
                    <div class="text">
                        <input type="password" autocomplete="off" placeholder="请输入您的密码" name="upwd" id="upwd" maxlength="15" v-model="lo_pwd">
                        <!--<span class="login_span2" v-show="!lo_pwd">密码不能为空！</span>-->
                    </div>
                    <div class="chose">
                        <input type="checkbox" class="checkbox" id="ck_rmbUser" value="0">自动登录<span>忘记密码？</span>
                    </div>
                    <input class="button_login" type="button" value="登录" id="bt-login" @click="login_button">
                </div>
            </form>
        </div>
        <!--登录失败遮罩层--><!--弹出框-->
        <div class="styleStr" id="shadowDiv" v-show="lof">
            <div id="alertMsg">
                <p id="alertMsg_info">
                    <b>登录失败！</b><br>
                    <b v-html="reson"></b>
                </p>
                <a id="alertMsg_btn" href ="javascript:void(0)"><cite @click="lof_ok">确定</cite></a>
            </div>
        </div>
        <!--登录成功-->
        <div>

        </div>
    </div>
    </div>
</template>
<script>
    import "@/assets/js/qs.min.js"
    export default {
        data(){
            return{
                lo_name:"",
                lo_pwd:"",
                reson:"",
                lof:false,
            }
        },
        methods:{
            //登录按钮监听事件
            login_button(){
                var url="login/signin";
                var obj={uname:this.lo_name,upwd:this.lo_pwd};
                this.$http.post(url,obj,{ emulateJSON : true,withCredentials: true}).then(result=>{
                    if(result.body.code===200){                 //登录成功
                        // this.bus.$emit('uid',result.body.uid);
                        // this.bus.uid=result.body.ui;
                        this.$router.push({path:'/index'});
                        sessionStorage.setItem("uid",result.body.uid);
                    }else if (result.body.code === 201) {       //登录失败
                        this.reson="原因:"+result.body.msg;
                        this.lof=true;
                    }
                });
            },
            lof_ok(){this.lof=false;},//单击确定,隐藏遮罩层
            }
    }
</script>
