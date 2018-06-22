<!--  -->
<template>
 <div class="headerbox">
     <router-link tag="div" to="/" class="backBtnspan" v-show="!showbas">
            <i class="el-icon-arrow-left"></i>
     </router-link>
     <div class="header-fixed" v-show="showbas" :style="opacityStyle">
        <router-link tag="span" to="/" class="backBtn">
            <i class="el-icon-arrow-left"></i>
        </router-link>
         景点详情介绍
     </div>
 </div>
</template>

<script>
export default {
  name: "headerbox",
  data() {
    return {
        showbas:false,
        opacityStyle:{
            opacity:0
        }
    };
  },
  components: {},
  methods: {
      handleScroll (){
          const scrollTop = document.documentElement.scrollTop;
          console.log(scrollTop);
          if(scrollTop > 60){
              let opacity = scrollTop / 140;
              opacity = opacity > 1 ? 1 :opacity;
              this.opacityStyle = { 
                  opacity:opacity
              }
              this.showbas = true;
          }else{
              this.showbas = false;
          }

      }
  },
  /** 页面即将展现 根组件使用keep-alive时生成的钩子*/
  activated (){
      window.addEventListener('scroll',this.handleScroll);
  },
  /** 页面即将隐藏 解绑全局监听事件*/
  deactivated (){
     window.removeEventListener('scroll',this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.backBtnspan{
         width 0.3rem
         height 0.3rem
         text-align center
         line-height 0.3rem
         position absolute
         left 0.1rem
         top 0.15rem
         background: rgba(0,0,0,.5);
         border-radius: 50%
         color #ffffff
         font-size 0.24rem
}
.header-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #ffffff;
    background: $bgColor;
    font-size: 0.16rem;

    .backBtn {
        position: absolute;
        top: 0;
        left: 0.1rem;
        font-size: 0.24rem;
    }
}
</style>