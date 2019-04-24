<template>
  <div>
    <div class="shop-content" v-if="shops.length>0">
      <div class="shop-list" @click="go(shops.length)" v-for="(item, index) in shops" :key="index">
        <div class="shop-list-left">
          <img :src="'https://fuss10.elemecdn.com' + item.image_path" alt="">
        </div>
        <div class="shop-list-right">
          <section class="shop-detail-header">
            <h4 class="shop-title ellipsis" >{{item.name}}</h4>
            <ul class="shop-detail-ul">
              <li class="supports" v-for="(support, index) in item.supports" :key="index">{{support.icon_name}}</li>
            </ul>
          </section>
          <section class="shop-rating-order">
            <section class="shop-rating-order-left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating-section">
                {{item.rating}}
              </div>
              <div class="order-section">
                月售{{item.recent_order_num}}单
              </div>
            </section>
            <section class="shop-rating-order-right">
              <span class="delivery-style delivery-left">{{item.delivery_mode.text}}</span>
              <span class="delivery-style delivery-right">准时达</span>
            </section>
          </section>
          <section class="shop-distance">
            <p class="shop-delivery-msg">
              <span>¥{{item.float_minimum_order_amount}}起送</span>
              <span class="segmentation">/</span>
              <span>{{item.piecewise_agent_fee.tips}}</span>
            </p>
          </section>
        </div>
      </div>
    </div>
    <div v-else>
      <li>
        <img src="./images/shop_back.svg" alt="back">
      </li>
      <li>
        <img src="./images/shop_back.svg" alt="back">
      </li>
      <li>
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['shops'])
    },
    methods: {
      go (len) {
        console.log(len)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  .shop-content
    margin-bottom 50px
    .shop-list
      bottom-border-1px(#f1f1f1)
      width 100%
      clearFix()
      padding-right 10px
      box-sizing border-box
      .shop-list-left
        float left;
        width 25%
        height 25%
        padding 10px
        box-sizing border-box
        img
          width 100%
          height 100%
      .shop-list-right
        padding-top 10px
        float right
        width 75%
        .shop-detail-header
          clearFix()
          width 100%
          .shop-title
            float left
            width 140px
            color #333
            font-size 16px
            font-weight 700
            &::before
              content '品牌'
              font-size 11px
              line-height 11px
              color #333
              background-color #ffd930
              padding 2px 2px
              border-radius 4px
              margin-right 5px
          .shop-detail-ul
            float right
            .supports
              display inline-block
              font-size 10px
              color #999
              border 1px solid #f1f1f1
              padding 0 2px
              border-radius 2px

        .shop-rating-order
          clearFix()
          width 100%
          margin-top 18px
          margin-bottom 8px
          .shop-rating-order-left
            float left
            color #ff9a0d
            .star
              float left
              font-size 0
              .star-item
                display inline-block
                background-repeat no-repeat
                width 10px
                height 10px
                margin-right 3px
                background-size cover
                &:last-child
                  margin-right 0
                &.on
                  bg-image('star24_on')
                &.half
                  bg-image('star24_half')
                &.off
                  bg-image('star24_off')
            .rating-section
              float left
              font-size 10px
              color #ff6000
              margin-left 4px
            .order-section
              float left
              font-size 10px
              color #666
              transform scale(.8)
          .shop-rating-order-right
            float right
            font-size 0
            .delivery-style
              transform-origin 35px 0
              transform scale(.7)
              display inline-block
              font-size 12px
              padding 1px
              border-radius 2px
            .delivery-left
              color #fff
              margin-right -10px
              background-color #02a774
              border 1px solid #02a774
            .delivery-right
              color #02a774
              border 1px solid #02a774
        .shop-distance
          width 100%
          font-size 12px
          .shop-delivery-msg
            float left
            transform-origin 0
            transform scale(.9)
            color #666
          .segmentation
            color #ccc
</style>
