<!--  -->
<template>
 <div class="gallary" @click="closeGallary()">
     <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item ,index) of imgs" :key="index">
              <img class="gallary-img" :src="item" alt="去哪儿门票">
            </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
     </div>
 </div>
</template>

<script>
export default {
  name: "gallary",
  props:{
      imgs:{
          type:Array,
          default (){
              return []
          }
      }
  },
  data() {
    return {
        swiperOptions:{
            pagination:".swiper-pagination",
            paginationType:"fraction", /*分页形式默认是点-分式1/2 */
            observeParents: true, /* 轮播在显示重渲染是宽度会重新计算，出现问题解决方案 ,自动刷新*/
            observer:true
        }
    };
  },
  components: {},
  methods: {
      closeGallary (){
          this.$emit("close")
      }
  }
};
</script>
<style lang="stylus" scoped>
 .gallary >>> .swiper-container{
     overflow inherit  
 }
 .gallary{
     z-index 99
     position fixed
     left 0
     top 0
     right 0
     bottom 0
     background #000
     display flex
     flex-direction column
     justify-content center
     .wrapper{
         width 100%
         height 0
         padding-bottom 100%
         .gallary-img{
             width 100%
         }
         .swiper-pagination{
             color #ffffff
             bottom -1rem
         }
     }
 }

</style>