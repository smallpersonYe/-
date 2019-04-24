<template>
  <section class="order">
    <header class="header">
      <span class="header-title-text">订单</span>
    </header>
    <section class="order-no-login">
      <img src="../../assets/images/others/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Order'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .order
    .header
      bottom-border-1px(#fff)
      height 45px
      width 100%
      background #02a774
      position fixed
      top 0
      left 0
      right 0
      color #fff
      font-size 20px
      .header-title-text
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
    .order-no-login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>
