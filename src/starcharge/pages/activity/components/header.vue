<template>
  <div>
    <div class="header-bg">
      <div class="flex-end">
        <div class="share"><img src="../../../assets/img/fenxiang.png" alt="分享"></div>
        <div class="gift" :class="{'animated':animate ,'bounce':animate}"><img src="../../../assets/img/liping.png" alt="我的奖品"></div>
      </div>
    </div>
    <div class="time-line" :class="{'fixedLine':this.fixed }" :style="{top:-this.pos+'px'}">
      <div class="flex-center">
        <div class="line" style="width: 15%;">
          <span class="text" >08.15-08.19</span>
          <img src="../../../assets/img/hongbao.png" alt="红包活动" v-if="pageIndex == 0" class="animate-pos " :class="{'animated':animate ,'tada':animate}">
          <span v-else class="over">已结束</span>
        </div>
        <div class="line" style="width: 35%;">
          <span class="text" >08.20-08.27</span>
          <img src="../../../assets/img/starIcon.png" alt="点亮星灯" v-if="pageIndex == 1" :class="{'animated':animate ,'rubberBand':animate}" class="animate-pos">
          <span v-if="pageIndex > 1" class="over">已结束</span>
        </div>
        <div class="line" style="width: 35%;">
          <span class="text text-828">08.28 <img src="../../../assets/img/fire.png" alt="火爆" class="animated pulse infinite animate-fire"></span>
          <img src="../../../assets/img/car.png" alt="抽奖" class="car-icon " v-if="pageIndex == 2" :class="{'animated':animate ,'lightSpeedIn':animate}" >
        </div>
        <div class="line" style="width: 15%;"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      pos: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        animate: true,
        pageIndex: 0
      }
    },
    mounted () {
      this.$root.eventBus.$on('scrollEnd', (res) => {
        this.pageIndex = res;
      });
      //   this.timerG = setInterval(() => {
      //   this.animate = !this.animate;
      // }, 2000)
    },
    beforeDestroy () {
      // clearInterval(this.timerG)
      // console.log(this.timerG)
    }
  };
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import '../../../assets/css/mixin.styl';
.fixedLine
  position absolute!important
  left 0
  right 0
  top: 0
  z-index 999
.header-bg
  height rpx(388)
  background-color #543ad0
  background-image url("../../../assets/img/headerBg.png")
  background-size cover
  text-align right
  padding rpx(20)
  .share,.gift
    display inline-block
    padding 0 rpx(8)
    img
      width rpx(48)
      display block
.time-line
  background-color #654ed5
  height rpx(140)
  color #ffffff
  padding rpx(94) rpx(30) 0
  position relative
  box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  .text
    font-size $fontsize-small
    position absolute;
    right 0;
    top rpx(-70)
    transform translateX(50%);
    white-space nowrap
  img
    width rpx(90)
    position absolute;
    right 0;
    top rpx(-36)
    transform translateX(50%);
    z-index 100
  .car-icon
    width rpx(75)
    top rpx(-22)
    right rpx(-32)
  .line
    height rpx(8)
    background-color #a421ff
    border-radius 8px
    position relative
    box-shadow: 1px 3px 9px 0 rgba(49, 10, 108, 0.5)
    &:after
      content ''
      height rpx(22);
      width rpx(22);
      display inline-block;
      background #fff;
      border-radius 100%;
      border rpx(6) solid #a421ff;
      position absolute;
      right rpx(-17);
      top 50%;
      transform translate(0,-50%);
      z-index 99
    &:last-child
      &:after
        height 0
        width 0
        border none
    .over
      font-size $fontsize-small-s
      display: inline-block;
      background: #fe7136;
      padding: rpx(8) rpx(16);
      border-radius: 14px;
      position absolute;
      right 0;
      top rpx(-18)
      transform translateX(50%);
      z-index 100
    .animate-pos
      right rpx(-48)
    .animate-fire
      right rpx(-18)
    .text-828
      display inline-block;
      padding rpx(8) rpx(28);
      background #fff45c;
      border-radius 16px;
      color #543ad0;
      font-weight bold;
      font-size $fontsize-lm;
      top rpx(-75)
      img
        width rpx(36)
        position absolute
        top rpx(-16)
    .yaobai
      transform rotate(15deg)
      transition 0.6s
      transform-origin center center
</style>
