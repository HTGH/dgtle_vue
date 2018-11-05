<style scoped>
    @import "../assets/css/header.css";
    @import "../assets/css/shanyhs.css";
</style>
<template>
    <div>
    <!--头部下方-->
    <div style="width: 100%;min-width:1300px;text-align: center;box-shadow: 0 15px 15px rgba(15,37,64,0.1);background: #FFFFFF;">
        <div class="dgtle-shanhs-nav">
            <div class="left">
                <div class="logo-name">
                    <div class="b">尾巴回收</div>
                    <div class="b-d">旧机换钱更轻松</div>
                </div>
                <!--搜索框-->
                <div class="search">
                    <input type="text" placeholder="搜索机器型号" autocomplete="off" class="el-input__inner" v-model="kw" @keyup.13="search_click()">
                    <a id="mysearch" class="search_img"><img src="http://img.rrcj123.com/detleJQ/img/search.png" alt="" @click="search_click(kw)"/></a>
                </div>
            </div>
            <!-- 右边-->
            <div class="right">
                <a href="#" class="a">个人中心</a>
                <a href="#" class="a">手机回收</a>
                <a href="#" class="a">帮助中心</a>
            </div>
        </div>
    </div>
    <div class="home-section">
        <div style="width:1903px;height: 440px;background-image: url('http://img.rrcj123.com/detleJQ/img/shanyhs/banner.png');position: relative">
            <!--菜单-->
            <div class="select-phone-link-wrapper">
                <ul class="content-list">
                    <li class="content-list-brand class">
                        <span>&nbsp;&nbsp;&nbsp;手机回收&nbsp;&nbsp;&nbsp;</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('苹果','三星')" @mouseleave="leave">
                        <span>苹果</span><span>三星</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('HTC','OPPO')" @mouseleave="leave">
                        <span>HTC</span><span>OPPO</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('vivo','中兴')" @mouseleave="leave">
                        <span>vivo</span><span>中兴</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('乐视','华为')" @mouseleave="leave">
                        <span>乐视</span><span>华为</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('小米','摩托罗拉')" @mouseleave="leave">
                        <span>小米</span><span>摩托罗拉</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('索尼','联想')" @mouseleave="leave">
                        <span>索尼</span><span>联想</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('诺基亚','酷派')" @mouseleave="leave">
                        <span>诺基亚</span><span>酷派</span>
                    </li>
                    <li class="content-list-brand" @mouseenter="cd('金立','魅族')" @mouseleave="leave">
                        <span>金立</span><span>魅族</span>
                    </li>
                    <li class="content-list-brand class">
                        <span>&nbsp;&nbsp;&nbsp;笔记本回收&nbsp;&nbsp;&nbsp;</span>
                    </li>
                    <li class="content-list-brand class">
                        <span>&nbsp;&nbsp;&nbsp;平板回收&nbsp;&nbsp;&nbsp;</span>
                    </li>
                </ul>
                <!--菜单加载-->
                <div class="content-item" v-show="xs">
                    <div class="content-item-first">
                        <div class="left">
                            <span v-html="span1"></span>
                        </div>
                        <div   class="itemjz">
                            <ul class="right" v-for="item1 in list1" >
                                <li class="content-right-item">
                                    <div class="img-wrapper">
                                        <img :src="item1.img">
                                    </div>
                                    <span>{{item1.fname}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-item-two">
                        <div class="left">
                            <span v-html="span2"></span>
                        </div>
                        <div   class="itemjz">
                            <ul class="right" v-for="item2 in list2" >
                                <li class="content-right-item">
                                    <div class="img-wrapper">
                                        <img :src="item2.img">
                                    </div>
                                    <span>{{item2.fname}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 我是分割线:下面是快递导航 -->
    <div style="background: #fff">
        <ul class="step-flow">
            <li class="step-item">
                <img src="http://img.rrcj123.com/detleJQ/img/shanyhs/1.png">
                <p>1.下单</p>
            </li>
            <li class="circle-item"><i class="circle"></i></li>
            <li class="step-item">
                <img src="http://img.rrcj123.com/detleJQ/img/shanyhs/2.png">
                <p>2.顺丰上门取件</p>
            </li>
            <li class="circle-item"><i class="circle"></i></li>
            <li class="step-item">
                <img src="http://img.rrcj123.com/detleJQ/img/shanyhs/3.png">
                <p>3.手机检测</p>
            </li>
            <li class="circle-item"><i class="circle"></i></li>
            <li class="step-item">
                <img src="http://img.rrcj123.com/detleJQ/img/shanyhs/4.png">
                <p>4.坐等收款</p>
            </li>
        </ul>
    </div>
    <!--我是分割线:手机详情-->
    <div  id="sjxq" class="section-container">
        <div class="content">
            <div class="el-tabs__item is-active">手机回收</div>
            <div class="el-tabs__item">平板回收</div>
            <div class="el-tabs__item">电脑回收</div>
        </div>
        <div class="wp" style="background: #fff">
            <div class="el-tabs__nav">
                <div class="el-tabs__item">苹果</div>
                <div class="el-tabs__item">三星</div>
                <div class="el-tabs__item">荣耀</div>
                <div class="el-tabs__item">华为</div>
                <div class="el-tabs__item">小米</div>
                <div class="el-tabs__item">OPPO</div>
                <div class="el-tabs__item">vivo</div>
                <div class="el-tabs__item">魅族</div>
                <div class="el-tabs__item">酷派</div>
                <div class="el-tabs__item">乐视</div>
                <div class="el-tabs__item">ivvi</div>
                <div class="el-tabs__item">中兴</div>
                <div class="el-tabs__item">金立</div>
                <div class="el-tabs__item">锤子</div>
                <div class="el-tabs__item">摩托罗拉</div>
                <div class="el-tabs__item">诺基亚</div>
                <div class="el-tabs__item">联想</div>
                <div class="el-tabs__item">HTC</div>
                <div class="el-tabs__item">索尼</div>
                <div class="el-tabs__item">中国移动</div>
                <div class="el-tabs__item">康佳</div>
                <div class="el-tabs__item">TCL</div>
                <div class="el-tabs__item">美图</div>
                <div class="el-tabs__item">LG</div>
                <div class="el-tabs__item">朵唯</div>
                <div class="el-tabs__item">小辣椒</div>
                <div class="el-tabs__item">一加</div>
                <div class="el-tabs__item">360</div>
                <div class="el-tabs__item">诺亚信</div>
                <div class="el-tabs__item">其他品牌</div>
            </div>
        </div>
    </div>
    <!--动态加载数据-->
    <ul class="hot-phone-card-wrapper" id="phone-list">
        <li class="hot-phone-card" v-for="item in phone_list">
            <div class="el-card">
                <div class="el-card__body" style="height: 320px; width: 232px; box-sizing: border-box; text-align: center; padding: 36px 0 0;">
                    <div class="img-box">
                        <img :src="item.image">
                    </div>
                    <div class="text">
                        <p class="first-phone-name">{{item.name}}</p>
                        <p class="second-price">最高回收价：<span>¥{{item.price}}</span></p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <!-- 分页器-->
    <h6 class="mb-3 p-2 pno small">
        <ul class="pagination mb-0 justify-content-end">
            <li class="page-item " :class="{'disabled':pno==0}">
                <a class="page-link bg-transparent " href="javascript:;" @click="pno_click('previous')">上一页</a>
            </li>
            <li class="page-item" v-for="p in data.pageCount" :class="{active:pno==p-1}" @click="pno_click(p-1)">
                <a style="display: inline-block" class="page-link" href="javascript:;" v-html=p></a>
            </li>
            <li class="page-item" :class="{'disabled':pno==data.pageCount-1}">
                <a class="page-link bg-transparent" href="javascript:;" @click="pno_click('next')">下一页</a>
            </li>
        </ul>
    </h6>
    <!--保障服务-->
    <div class="home-service-wrapper">
        <div class="fw">
            <p class="title">四大服务</p>
            <p class="des">资深检测工程师，保证检测结果的公正性；先进的数据填充技术，保障用户隐私安全</p>
            <ul class="list">
                <li class="item">
                    <div class="item-top">
                        <i class="iconfont icon-full-trust"></i>
                        <p class="title_small">信赖</p>
                        <p class="des">强强联合&nbsp;安全无忧</p>
                    </div>

                    <div class="item-bottom">
                        <p class="des">国内最值得信赖的手机回收平台，与小米、顺丰结成战略合作伙伴，获得中国移动、中国联通、苏宁、迪信通、乐语、恒波等苹果优质经销商APR（最高级）等官方认可。线下门店回收时当面付款，差错率低。</p>
                    </div>
                </li>
                <li class="item">
                    <div class="item-top">
                        <i class="iconfont icon-full-trust"></i>
                        <p class="title_small">环保</p>
                        <p class="des">循环利用&nbsp;价值传承</p>
                    </div>
                    <div class="line"></div>
                    <div class="item-bottom">
                        <p class="des">循环利用，价值传递，爱心传承。手机经多层信息粉碎后，确保安全无忧，有价值的手机将给到有需要的人们，无价值的将被环保拆解。</p>
                    </div>
                </li>
                <li class="item">
                    <div class="item-top">
                        <i class="iconfont icon-full-trust"></i>
                        <p class="title_small">专业</p>
                        <p class="des">收货检测&nbsp;全程监控</p>
                    </div>
                    <div class="line"></div>
                    <div class="item-bottom">
                        <p class="des">您的手机自进入检测工厂，即进入全程监控，包括收货、拆包、检测、数据清理等过程。保障您的个人权益和财产安全。</p>
                    </div>
                </li>
                <li class="item">
                    <div class="item-top">
                        <i class="iconfont icon-full-trust"></i>
                        <p class="title_small">急速</p>
                        <p class="des">一键物流&nbsp;急速付款</p>
                    </div>
                    <div class="line"></div>
                    <div class="item-bottom">
                        <p class="des">一键物流：利用顺丰内部逆向物流，一键下单，无须填写地址和快递单，轻松回收，物流时间缩短一倍。极速付款：收货当天支付回收款。</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!--常见问题-->
    <div class="wt">
        <div class="need-to-know-need-left">
            <div class="left-item">
                <p>回收前备份并清</p>
                <p>理所有个人资料</p>
            </div>
            <div class="left-item">
                <p>回收前解除开机</p>
                <p>密码并注销账户</p>
            </div>
        </div>
        <div class="need-to-know-middle">
            <h3 class="title">回收常见问题</h3>
            <div class="need-to-know-middle-item">1.我的手机/笔记本还值多少钱？</div>
            <div class="need-to-know-middle-item">2.为什么要如实描述手机/笔记本情况？</div>
            <div class="need-to-know-middle-item">3.回收价与评估价一样吗？</div>
            <div class="need-to-know-middle-item">4.找不到要回收的机型怎么办？</div>
        </div>
        <div class="need-to-know-right">
            <div class="item">热门问题</div>
            <div class="question-container">
                <div class="question">
                    <div class="question-title">1.回收的流程是怎样的？</div>
                    <div class="question-content">
                        <p>①顾客自助估价——②提交订单——③顺丰上门取件或顾客自行邮寄机器到尾巴回收——④坐等回收款</p>
                    </div>
                </div>
                <div class="question">
                    <div class="question-title">2.邮寄前需要注意什么？</div>
                    <div class="question-content">
                        <p>1、特别注意，将 手机/笔记本 密码和ID或帐户锁进行解除，以便我们能及时检测和处理您的订单。2、全触摸屏的手机，千万不要把保护膜撕掉了，避免快递途中屏幕的磨损。</p>
                    </div>
                </div>
                <div class="question">
                    <div class="question-title">3.邮寄交易快递费谁承担？</div>
                    <div class="question-content"><p>快递费用由尾巴回收承担，最高承担23元运费（不含公益机和山寨机）。因估价选项不一致而退货的，由您承担退回运费。</p>
                    </div>
                </div>
                <div class="question">
                    <div class="question-title">4.如何保证我的机器不被损坏？</div>
                    <div class="question-content"><p>尾巴回收自收到您的包裹后，从收件拆包开始，您的机器全程处于尾巴回收视频监控中，确保你的机器安全。</p>
                    </div>
                </div>
            </div>
            <div class="white-mask"></div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              xs:false,
              list1:[],list2:[],
              span1:"",span2:"",
              kw:"",pno:0,phone_list:[],data:[],
          }
        },
        methods:{
            //加载菜单
            cd(s1,s2){
                var url="shanyhs/listvue?name="+s1+"&name="+s2;
                this.$http.get(url).then(result=>{
                    this.list1=result.body.splice(0,7);
                    this.list2=result.body.splice(0,7);
                });
                this.span1=s1;this.span2=s2;
                this.xs=true;
            },
            leave(){this.xs=false;},
            //搜索框关键字查询
            search_click(a){
              location.href="#sjxq";
              this.phone();
            },
            //加载手机列表
            phone(){
                var url="shanyhs/pno?kw="+this.kw+"&pno="+this.pno;
                this.$http.get(url).then(result=>{
                    this.phone_list=result.body.phones;
                    this.data=result.body;
                });
            },
            //分页鼠标事件
            pno_click(pn) {
                switch (pn) {
                    case "previous":this.pno--;break;
                    case "next":this.pno++;break;
                    default:this.pno=pn;
                }
                this.phone();
            },
        },
        created() {
            this.phone();
        },
    }
</script>
