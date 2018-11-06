import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import axios from 'axios'
Vue.config.productionTip = false;//去掉警告
Vue.prototype.swiper=Swiper;

//引入vue-resource
import VueResource from "vue-resource"//(完整引入)
//加载vue-resource
Vue.use(VueResource);//(完整加载)

// 定义全局(日期格式)过滤器
// 第三方模块 moment 过滤器日期
// 自定义
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
    return new Date(datestr).toLocaleString();
});

// 设置全局ajax访问基础路径
Vue.http.options.root="https://dgtlev.rrcj123.com/";

// 设置全局ajax post访问格式
Vue.http.options.emulateJSON=true;
//axios的问题: 默认不携带cookie，导致session不能用
axios.defaults.withCredentials=true;

var bus = new Vue();
Vue.prototype.bus = bus;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
