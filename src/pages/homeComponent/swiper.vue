<template>
   <div class="wrap">
       <!-- 这里加个v-if可以确保有数据了在渲染swiper -->
        <swiper :options="swiperOption" v-if="swiperList.length">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swipe-img" v-bind:src="item.imgUrl" alt="去哪儿门票">
        </swiper-slide>
       <!--  <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1804/e5/82b53c47166cfc02.jpg_750x200_0d3a0066.jpg" alt="去哪儿门票">
        </swiper-slide>
        <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg" alt="去哪儿门票">
        </swiper-slide>
        <swiper-slide>
        <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg" alt="去哪儿门票">
        </swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
   </div>
   
</template>

<script>
export default {
    name:'homeSwiper',
    props:{
        swiperList:Array
    },
    data () {
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true, //循环轮播
                autoplay:false //自动轮播默认3000毫秒
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
/* css样式穿透 使用>>> */
.wrap >>> .swiper-pagination-bullet-active{
    background:#fff
}
.wrap{
    overflow: hidden;
    width:100%;
    height: 0;
    padding-bottom:31.25%;
    .swipe-img{
        width:100% 
    }
}
</style>

