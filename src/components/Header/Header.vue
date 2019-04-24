<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title">{{title}}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .header
    bottom-border-1px(#fff)
    z-index 10
    height 45px
    width 100%
    background #02a774
    position fixed
    top 0
    left 0
    right 0
    color #fff
    .header-search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      .iconfont
        font-size 25px
    .header-title
      width 45%
      text-align center
      overflow hidden
      white-space nowrap
      text-overflow: ellipsis
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      font-size 20px
    .header-login
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      font-size 14px
</style>
