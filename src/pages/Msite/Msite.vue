<template>
  <section class="msite on">
    <Header title="深圳市宝安区西部硅谷B区">
      <span slot="left" class="header-search"><i class="iconfont icon-sousuo"></i></span>
      <span slot="right" class="header-login">登录|注册</span>
    </Header>
    <nav>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/2.jpg" alt="">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/3.jpg" alt="">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/4.jpg" alt="">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/5.jpg" alt="">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/6.jpg" alt="">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/7.jpg" alt="">
              </div>
              <span>预定早餐</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/8.jpg" alt="">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/9.jpg" alt="">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/10.jpg" alt="">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/11.jpg" alt="">
              </div>
              <span>预定早餐</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/12.jpg" alt="">
              </div>
              <span>土豪推荐</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/13.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/14.jpg" alt="">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/5.jpg" alt="">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;">
              <div class="header-nav-image">
                <img src="./images/nav/4.jpg" alt="">
              </div>
              <span>简餐</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <footer>
      <div class="shop-header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop-header-title">附近商家</span>
      </div>
      <shopList/>
    </footer>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import shopList from '../../components/shopList/shopList.vue'
  export default {
    props: ['shopList'],
    mounted () {
      /* eslint-disable no-new */
       new Swiper('.swiper-container', {
         loop: true,
         pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    components: {
      shopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .msite
    >nav
      margin-top 45px
      background: #fff;
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            display: flex
            flex-wrap wrap
            a
              width 25%
              margin 10px 0
              .header-nav-image
                width 100%
                text-align center
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          position static
          .swiper-pagination-bullet
            margin-bottom 5px
          .swiper-pagination-bullet-active
            background #02a774

    >footer
      top-border-1px(#f1f1f1)
      margin-top 10px
      background #fff
      .shop-header
        padding 10px 10px 0
        color: #999
        .iconfont
        .shop-header-title
          font-size 14px
</style>
