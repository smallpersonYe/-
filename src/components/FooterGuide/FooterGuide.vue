<template>
  <div class="footerList">
    <span :class="{on: $route.path === '/msite' || $route.path === '/' }" @click="goTo('/msite')">
      <span><i class="iconfont icon-waimai"></i></span>
      <span>外卖</span>
    </span>
    <span :class="{on: $route.path === '/search'}" @click="goTo('/search')">
      <span><i class="iconfont icon-search"></i></span>
      <span>搜索</span>
    </span>
    <span :class="{on: $route.path === '/order'}" @click="goTo('/order')">
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </span>
    <span :class="{on: $route.path === '/profile'}" @click="goTo('/profile')">
      <span><i class="iconfont icon-geren"></i></span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace({path})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .footerList
    top-border-1px(#e4e4e4)
    background #fff
    position fixed
    bottom 0
    left 0
    right 0
    display flex
    z-index: 100
    span
      flex 1
      margin 5px 0
      &.on
        color #02a774
      span
        display block
        font-size 12px
        margin 5px 0
        text-align center
        .iconfont
          font-size 22px
</style>
