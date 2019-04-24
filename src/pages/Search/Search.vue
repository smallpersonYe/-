<template>
  <section class="search">
    <header class="header">
      <span class="header-title-text">搜索</span>
    </header>
    <form class="search-form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit">
    </form>
  </section>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .search
    width 100%
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
    .search-form
      width 100%
      clearFix()
      margin-top 45px
      background #fff;
      padding 12px 8px
      box-sizing border-box
      input
        height 35px
        border-radius 2px
        font-weight bold
        outline none
        &.search-input
          float left
          width 78%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search-submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
</style>
