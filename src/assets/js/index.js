window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 1000,
        delay: 3000,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /* progress */
        watchSlidesProgress : true,
        /* swiper4 的语法有大更新，。， */
        on:{
            progress: function() {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide=this.slides.eq(i);
                    var progress = this.slides[i].progress;
                    var translate, boxShadow;
                    translate = progress * this.width * 0.8;
                    scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
                    if (i == this.myIndex) {
                        slide.transform('translate3d(' + (translate) + 'px,0,0) scale(' + scale + ')');
                        slide.css({'z-index':0,'boxShadow':'0px 0px 10px rgba(0,0,0,.5)'});
                    }
                }
            },
            transitionEnd: function() {
                this.myIndex = this.activeIndex;
                for (var i = 0; i < this.slides.length; i++) {
                    var slide=this.slides.eq(i);
                    slide.transform('');
                    slide.css('z-index',1);
                }
                this.mousewheel.enable();
            },
            setTransition: function(speed) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide=this.slides.eq(i);
                    slide.transition(speed + 'ms');
                }
                this.mousewheel.disable();
            }
        }
    })
}