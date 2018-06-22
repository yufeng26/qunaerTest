<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- 方法一直接按两页分 -->
           <!--  <swiper-slide>
                <div class="iconbox" v-for="(item,index) in swiperListA" :key="index">
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.name" style="opacity: 1;">
                    </div>
                    <p v-text="item.name"></p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="iconbox" v-for="(item,index) in swiperListB" :key="index">
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.name" style="opacity: 1;">
                    </div>
                    <p v-text="item.name"></p>
                </div>
            </swiper-slide> -->
            <!-- 方法二计算有几页，每页内再循环 -->
             <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="iconbox" v-for="(item,index) in page" :key="index">
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.desc">
                    </div>
                    <p v-text="item.desc"></p>
                </div>
             </swiper-slide>
             <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        </swiper>  
    </div>
</template>
<script>
export default {
    name:"homeIcon",
    props:{
        iconList:Array
    },
    data () {
        return{
            swiperOption:{
              /*   pagination:'.swiper-pagination',
                loop:true, //循环轮播 */
                autoplay:false //自动轮播默认3000毫秒
            }
        }
    },
    computed:{
        /* 方法一 */
         /* swiperListA(){
            return this.iconList.slice(0,8);
         },
         swiperListB(){
            return this.iconList.slice(8);
         } */
         /* 方法二 先判断有几页，在把对应的数据放到对应页*/
         pages (){
             const pages = [];
             this.iconList.forEach((item,index) =>{
                 const page = Math.floor(index / 8)
                 if(!pages[page]){
                     pages[page] = [];
                 }
                 pages[page].push(item);
             });
             return pages;
         }
    }
}
</script>
<style lang="stylus" scoped>
/* 引入样式变量 */
@import '~@/assets/styles/varibles.styl' 
@import '~@/assets/styles/mixins.styl' 
.icons >>> .swiper-container{
    width:100%
    height:0
    padding-bottom:55%
    .iconbox{
        float:left
        width:25%
        height:0 
        padding-bottom:25%
        background:#fff
        text-align:center 
        .icon-img{
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-top:0.1rem 
            img{
                width: 0.6rem;
                height: 0.6rem;
                background: 0;
            }
        }
        p{
            margin-top: .05rem
            color:$darkTextColor
            font-size: .14rem
            ellipsis()
        }   
    }    
}
</style>

