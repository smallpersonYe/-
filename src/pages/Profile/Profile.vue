<template>
  <section class="profile">
    <Header title="个人中心"/>
    <section class="profile-login" @click="goTo('login')">
      <div class="profile-image">
        <i class="iconfont icon-person"></i>
      </div>
      <div class="user-info">
        <p class="user-info-top">登录/注册</p>
        <p>
          <span class="user-icon">
            <i class="iconfont icon-shouji icon-mobile"></i>
          </span>
          <span class="icon-mobile-number">暂无绑定手机号</span>
        </p>
      </div>
      <span class="arrow">
        <i class="iconfont icon-jiantou1"></i>
      </span>
    </section>
    <section class="profile-info-data">
      <ul class="info-data-list">
        <a href="javascript:" class="info-data-link">
          <span class="info-data-top"><span>0.00</span>元</span>
          <span class="info-data-bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info-data-link">
          <span class="info-data-top"><span>0</span>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info-data-link">
          <span class="info-data-top"><span>0</span>分</span>
          <span class="info-data-bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile-my-order">
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my-order-div">
          <span>我的订单</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my-order-div">
          <span>积分商城</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my-order-div">
          <span>外卖会员卡</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile-my-order">
      <a href="javascript:;" class="my-order">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my-order-div">
          <span>服务中心</span>
          <span class="my-order-icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .profile
    .profile-login
      clearFix()
      margin-top 45px
      background #02a774
      padding 20px 10px
      position relative
      .profile-image
        float left
        width 60px
        height 60px
        background #888
        color: #888
        border-radius 50%
        overflow hidden
        .icon-person
          font-size 60px
          line-height 66px
          background #e4e4e4
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-weight: 700
          font-size 18px
          color #fff
          &.user-info-top
            padding-bottom 8px
          .user-icon
            display inline-block
            margin-left -15px
            margin-right 5px
            width 20px
            height 20px
            .icon-mobile
              font-size 30px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
            color #fff
      .arrow
        width 12px
        height 12px
        position absolute
        right 15px
        top 40%
        .icon-jiantou1
          color #fff
          font-size 5px
    .profile-info-data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info-data-list
        clearFix()
        .info-data-link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info-data-top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info-data-bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info-data-link:nth-of-type(2)
          .info-data-top
            span
              color #ff5f3e
        .info-data-link:nth-of-type(3)
          border 0
          .info-data-top
            span
              color #6ac20b
    .profile-my-order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my-order
        top-border-1px(#e4e4e4)
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          justify-content center
          margin-left -10px
          >.iconfont
            font-size 30px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my-order-div
          width 100%
          padding 18px 10px 18px 0
          font-size 16px
          display: flex
          justify-content space-between
          span
            display block
          .my-order-icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
</style>
