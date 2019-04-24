<template>
  <section class="msite on">
    <Header :title="address">
      <span slot="left" class="header-search" @click="goTo('/search')"><i class="iconfont icon-sousuo"></i></span>
      <span slot="right" class="header-login" @click="goTo('/login')">登录|注册</span>
    </Header>
    <nav>
      <div class="swiper-container" v-if="categories.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories, index) in categoriesArr" :key="index">
            <a href="javascript:;" v-for="(category, index) in categories" :key="index">
              <div class="header-nav-image">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url" alt="">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div v-else>
        <img src="./images/msite_back.svg" alt="back">
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
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address', 'categories']),
      categoriesArr () {
        const bigArr = []
        let smallArr = []
        this.categories.forEach(item => {
          if (smallArr.length === 0) {
            bigArr.push(smallArr)
          }
          smallArr.push(item)

          if (smallArr.length === 8) {
            smallArr = []
          }
        })
        return bigArr
      }
    },
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    },
    watch: {
      'categories' () {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
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
