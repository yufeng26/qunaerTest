<!--  -->
<template>
<div class="banner">
    <div class="bannerbox" @click="clickBanner()">
        <img class="banner-img" :src="bannerfm">
        <div class="bannerPic">
            <i class="el-icon-picture"></i><span>11</span>
        </div>
        <div  class="banner-infor">
            <p>{{sighName}}</p>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="bannerImg" v-show="showGallary" @close="closePic"></common-gallary>
    </fade-animation>
    
</div>
 
</template>

<script>
/* 引入相框组件 */
import commonGallary from 'common/gallary/Gallary'
import fadeAnimation from 'common/fade/fade'

export default {
  name: "banner",
  props:{
      bannerImg:Array,
      bannerfm:String,
      sighName:String
  },
  data() {
    return {
        showGallary:false
    }
  },
  methods:{
      clickBanner (){
          this.showGallary = true;
      },
      closePic (){
          this.showGallary = false;
      }

  },
  components: {
      commonGallary,fadeAnimation
  }
};
</script>
<style lang="stylus" scoped>
.bannerbox{
     height 0
     padding-bottom 55%
     overflow:hidden
     position relative
     .banner-img{
        width  100%;
     }
     .bannerPic{
        position: absolute;
        left: .1rem;
        bottom: .43rem;
        width: .6rem;
        height: .2rem;
        background: rgba(0,0,0,.5);
        border-radius: .1rem;
        font-size: .12rem;
        color: #fff;
        line-height: .2rem;
        text-align: center;
        z-index 1
        span{
            margin-left 10px
        }
     }
     .banner-infor{
        position: absolute;
        bottom: .16rem;
        left: .1rem;
        min-height: .2rem;
        color #ffffff
        font-size: .18rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
        z-index 1
     }
 }
</style>