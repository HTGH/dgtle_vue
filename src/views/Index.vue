<style scoped>
    @import "../assets/css/header.css";
    @import "../assets/css/swiper.min.css";
    @import "../assets/css/index.css";
    .swiper-container {
        width: 100%;
        padding-bottom: 50px;
        overflow: visible;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 1200px;
        height: 480px;

    }
</style>
<template>
    <div style="max-width: 2000px;overflow: hidden">
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner1.jpg')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner2.png')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner3.png')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner4.jpg')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner5.jpg')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner6.png')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner7.jpg')"></div>
                <div class="swiper-slide" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/banner8.png')"></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev swiper-button">
                <span class="button-fonts icon-Dgtlex-dgtlexicon-chevron-left"></span>
            </div>
            <div class="swiper-button-next swiper-button">
                <span class="button-fonts icon-Dgtlex-dgtlexicon-chevron-right"></span>
            </div>
        </div>
        <!--热门标签-->
        <div class="hot-floor">
            <!--左-->
            <div class="hot-left">
                <a href="#" target="_blank">
                    <div class="word-img"><img src="https://img.rrcj123.com/detleJQ/img/index/hot-left.jpg" alt=""></div>
                    <p>
                        <i></i>有些任务别无选择。
                        <span>————《碟中谍6：全面瓦解》</span>
                    </p>
                    <div class="pic-from">图片来自《碟中谍6：全面瓦解》官方剧照</div>
                </a>
            </div>
            <!--右-->
            <div class="hot-right">
                <!--title-->
                <div class="hot-title">
                    <h3>热门标签
                        <span>HOT</span>
                    </h3>
                </div>
                <!--六张图-->
                <div class="right-items">
                    <!--中上-->
                    <div class="right-item sx">
                        <a class="sex-img" href="#" style="background-image: url(https://img.rrcj123.com/detleJQ/img/index/hot-center1.png)"></a>
                        <div class="hot-info">
                            <h3><a href="#">#  三星 Galaxy Note 系列 #</a></h3>
                            <h4><a href="#">大屏之外，性能旗舰</a></h4>
                        </div>
                    </div>
                    <!--最右-->
                    <div class="right-item ds">
                        <a class="sex-img" href="#" style="background-image:url(https://img.rrcj123.com/detleJQ/img/index/hot-right.png)"></a>
                        <div class="hot-info">
                            <h3><a href="#">#  尾巴们的「剁手清单」 #</a></h3>
                            <h4><a href="#">值不值得买?听听尾巴们怎么说</a></h4>
                        </div>
                    </div>
                    <!--中小一-->
                    <div class="right-item wx">
                        <a class="sex-img" href="#" style="background-image:url(https://img.rrcj123.com/detleJQ/img/index/hot-center2.jpg)"></a>
                        <div class="hot-info">
                            <h3><a href="#">#  无线 #</a></h3>
                            <h4><a href="#">让充电更优雅</a></h4>
                        </div>
                    </div>
                    <!--中右-->
                    <div class="right-item hs">
                        <a class="sex-img" href="#" style="background-image:url(https://img.rrcj123.com/detleJQ/img/index/hot-center4.png)"></a>
                        <div class="hot-info">
                            <h3><a href="#">#  尾巴回收 #</a></h3>
                            <h4><a href="#">旧手机回收卖钱</a></h4>
                        </div>
                    </div>
                    <!--中小2-->
                    <div class="right-item vlog">
                        <a class="sex-img" href="#" style="background-image:url(https://img.rrcj123.com/detleJQ/img/index/hot-center3.png)"></a>
                        <div class="hot-info">
                            <h3><a href="#">#  Vlog #</a></h3>
                            <h4><a href="#">用视频说故事</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--混合内容-->
        <div class="mix">
            <div style="position:relative;height:2826px;width:1220px;" class="mix-box">
                <!--活动-->
                <ul class="list_group active" style="position: absolute; left:0; top:0;">
                    <li class="img-box">
                        <a class="mix-img" target="_blank" href="#" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/mix/huodong.png')">
                        </a>
                        <a target="_blank" class="forum-type">活动</a>
                    </li>
                </ul>
                <!--文章-->
                <ul class="list_group article" style="position:absolute;left: 0;top:530px;">
                    <li class="list_group_item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/article1.jpg')"></a>
                        <a target="_blank" class="forum-type">其他</a>
                    </li>
                </ul>
                <ul class="list_group article" style="position:absolute;left:610px;top:530px;">
                    <li class="list_group_item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image:url('https://img.rrcj123.com/detleJQ/img/index/mix/article2.jpg')"></a>
                        <a target="_blank" class="forum-type">视频</a>
                    </li>
                </ul>
                <ul class="list_group article" style="position:absolute;left:0;top:940px;">
                    <li class="list_group_item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/article3.jpg')"></a>
                        <a target="_blank" class="forum-type">生活</a>
                    </li>
                </ul>
                <ul class="list_group article" style="position:absolute;left:610px;top:940px;">
                    <li class="list_group-item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/article4.jpg')"></a>
                        <a target="_blank" class="forum-type">旅行</a>
                    </li>
                </ul>
                <ul class="list_group article" style="position:absolute;left:0;top:1350px;">
                    <li class="list_group_item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/article5.jpg')"></a>
                        <a target="_blank" class="forum-type">生活</a>
                    </li>
                </ul>
                <ul class="list_group article" style="position:absolute;left:610px;top:1350px;">
                    <li class="list_group_item img-box">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/article6.jpg')"></a>
                        <a target="_blank" class="forum-type">数码</a>
                    </li>
                </ul>
                <!--新闻-->
                <div class="xw">
                    <ul class="list_group news"  style="height:400px;">
                        <li class="list_group_item img-box"   style="height:100%">
                            <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new1.jpg')"></a>
                            <a target="_blank" class="forum-type">数码</a>
                        </li>
                    </ul>
                    <ul class="list_group news"  style="height:400px;">
                        <li class="list_group_item img-box"   style="height:100%">
                            <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new2.jpg')"></a>
                            <a target="_blank" class="forum-type">人物</a>
                        </li>
                    </ul><ul class="list_group news"  style="height:450px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new3.jpg')"></a>
                        <a target="_blank" class="forum-type">手机</a>
                    </li>
                </ul><ul class="list_group news"  style="height:350px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new4.jpg')"></a>
                        <a target="_blank" class="forum-type">生活</a>
                    </li>
                </ul><ul class="list_group news"  style="height:350px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new5.jpg')"></a>
                        <a target="_blank" class="forum-type">天气</a>
                    </li>
                </ul><ul class="list_group news"  style="height:450px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new6.jpg')"></a>
                        <a target="_blank" class="forum-type">数码</a>
                    </li>
                </ul><ul class="list_group news"  style="height:500px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new7.jpg')"></a>
                        <a target="_blank" class="forum-type">数码</a>
                    </li>
                </ul><ul class="list_group news"  style="height:300px;">
                    <li class="list_group_item img-box"   style="height:100%">
                        <a class="mix-img" href="#" target="_blank" style="background-image: url('https://img.rrcj123.com/detleJQ/img/index/mix/new3.jpg')"></a>
                        <a target="_blank" class="forum-type">手机</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // computed: {
        //     key() {
        //         return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
        //     }
        // },
        mounted() {
            var swiperBanner = new this.swiper('.swiper-container', {
                effect: 'coverflow',
                loop: true,
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',

                loopAdditionalSlides: 3,
                autoplay: true, //自动切换的时间间隔
                speed: 600,
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true
                // },
                //paginationType: 'bullets', //圆点
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // autoplayDisableOnInteraction: false,
                // effect: 'slide',
                // spaceBetween: 20,
                // observer: true,
                // observeParents: true,
                // on: {
                //     transitionEnd: function() {
                //         this.autoplay.start();
                //     }
                // },

                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
            // 点击下一页上一页
            jQuery(document).on('click', '#newBannerSwiper .swiper-slide-prev', function (e) {
                e.preventDefault();
                swiperBanner.slidePrev();
            })
            jQuery(document).on('click', '#newBannerSwiper .swiper-slide-next', function (e) {
                e.preventDefault();
                swiperBanner.slideNext();
            })
            jQuery('#newBannerSwiper .swiper-button-prev').css('left', (document.body.clientWidth - 1200) / 2 + 20);
            jQuery('#newBannerSwiper .swiper-button-next').css('right', (document.body.clientWidth - 1200) / 2 + 20);
            jQuery(function () {
                jQuery(".insertPicture").append("<img src='./template/dgstyle2017/about/static/images/video.png' class='imgTouch'/>");
            });
            window.onload = function () {
                swiperBanner.updateSize();
                swiperBanner.update();
                setTimeout(function () {
                    swiperBanner.updateSize();
                    swiperBanner.update();
                }, 3000)

                jQuery(".insertPicture").append("<img src='./template/dgstyle2017/about/static/images/video.png' class='imgTouch'/>");

            }

            window.onresize = function () {
                jQuery('#newBannerSwiper .swiper-button-prev').css('left', (document.body.clientWidth - 1200) / 2 + 20);
                jQuery('#newBannerSwiper .swiper-button-next').css('right', (document.body.clientWidth - 1200) / 2 + 20);
                swiperBanner.updateSize();
            }

            }
        }
</script>
