<style scoped>
    @import "../assets/css/header.css";
    @import "../assets/css/register.css";
</style>
<template>
    <div>
    <div class="parent">
        <div class="container">
            <div class="panel rt">
                <form id="form-register" method=post>
                    <div class="txt">
                        <p><span>新用户注册</span><router-link to="/login">直接登录</router-link></p>
                    </div>
                    <div class="form-group">
                        <label for="uname">用户名：&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input autocomplete required minlength="3" maxlength="12" type="text" placeholder="用户名长度在3到12位之间"
                               name="uname" id="uname" v-model="re_name1" @blur="re_blur_name"/>
                        <span class="msg-error" v-html="re_name2" :class="{'msg-success':re_msg1}"></span>
                    </div>
                    <div class="form-group">
                        <label for="upwd">登录密码：</label>
                        <input required type="password" minlength="6" maxlength="12" placeholder="密码长度在6到12位之间" name="upwd"
                               id="upwd" v-model="re_pwd1" @blur="re_blur_pwd"/>
                        <span class="msg-error" v-html="re_pwd2" :class="{'msg-success':re_msg2}"></span>
                    </div>
                    <div class="form-group">
                        <label for="upwdconfirm">确认密码：</label>
                        <input required type="password" minlength="6" maxlength="12" placeholder="请确认密码" name="upwdconfirm"
                               id="upwdconfirm" v-model="re_pwd11" @blur="re_blur_pwd1"/>
                        <span class="msg-error" v-html="re_pwd22" :class="{'msg-success':re_msg3}">密码长度在6到12位之间</span>
                    </div>
                    <div class="form-group">
                        <label for="email">邮箱：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input autocomplete required type="email" placeholder="请输入邮箱地址" name="email" id="email" v-model="re_email1"/>
                        <span class="msg-default">选填</span>
                    </div>
                    <div class="form-group">
                        <label for="phone">手机号：&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input id="phone" name="phone" placeholder="请输入您的手机号"
                               pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$"
                               required type="text" v-model="re_pho1"/>
                        <span class="msg-default">选填</span>
                    </div>
                    <div class="form-group">
                        <label></label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="提交注册信息" id="bt-register" class="tj" @click="re_button"/>
                    </div>
                </form>
            </div>
            <!--遮罩层--><!--弹出框-->
            <div class="styleStr" id="shadowDiv" v-show="lof">
                <div id="alertMsg">
                    <p id="alertMsg_info">
                        <b v-html="reson1"></b><br>
                        <b v-html="reson"></b>
                    </p>
                    <a id="alertMsg_btn" href ="javascript:void(0)"><cite @click="lof_ok">确定</cite></a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                re_msg1:"", re_name1:"", re_name2:"",
                re_msg2:"", re_pwd1:"", re_pwd2:"",
                re_msg3:"", re_pwd11:"", re_pwd22:"",
                re_pho1:"", re_email1:"",
                reson1:"",reson:"",lof:false,sure:false
            }
        },
        methods:{
            //用户名
            re_blur_name(){
                if(this.re_name1.length<3){
                    this.re_name2="用户名不能少于三位";
                    this.re_msg1=false;
                }
                else{
                    var url="register/check_uname";
                    this.$http.post(url,{uname:this.re_name1}).then(result=>{
                        if(result.body.code===200){
                            this.re_name2=result.body.msg;
                            this.re_msg1=true;
                        }else if (result.body.code === 201) {
                            this.re_name2=result.body.msg;
                            this.re_msg1=false;
                        }
                    });
                }
            },
            //密码
            re_blur_pwd(){
                if(this.re_pwd1.length<6 || this.re_pwd1.length>12){
                    this.re_pwd2="密码格式不规范";
                    this.re_msg2=false;
                }
                else{
                    this.re_pwd2="";
                    this.re_msg2=true;
                }
                this.re_blur_pwd1();
            },
            //确认密码
            re_blur_pwd1(){
                if(this.re_pwd1!=this.re_pwd11){
                    this.re_pwd22="密码不一致";
                    this.re_msg3=false;
                }
                else{
                    this.re_pwd22="";
                    this.re_msg3=true;}
            },
            //提交注册
            re_button(){
                console.log(this.re_msg1 && this.re_msg2 && this.re_msg3);
                if(this.re_msg1 && this.re_msg2 && this.re_msg3){
                var url="register/check_register";
                var obj={'uname':this.re_name1,'upwd':this.re_pwd1,'email':this.re_email1,'phone':this.re_pho1};
                this.$http.post(url,obj).then(result=>{
                    if(result.body.code===200){
                        this.reson1="注册成功!";
                        this.reson="点击“确定”后将跳转到登录页";//注册成功
                        this.lof=true;
			this.sure=true;
                    }else if (result.body.code === 201) {       //注册失败
                        this.reson="注册失败!";
                        this.reson="错误消息：请检查所填内容!";
                        this.lof=true;
                    }
                });
            }else{
                    this.reson="注册失败!";
                    this.reson="错误消息：前三项必填!";
                    this.lof=true;
                }
            },
            lof_ok(){
	    this.lof=false;
	    if(this.sure){this.$router.push({path:'/login'});}
	    else{this.$router.push({path:'/register'});}
	    },//单击确定,隐藏遮罩层
        }
    }
</script>
