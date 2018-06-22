<template>
    <div class="home">
        <homeHeader :cityName="city"></homeHeader>
        <swiper :swiperList="swiperList"></swiper>
        <homeicon :iconList="iconList"></homeicon>
        <recommend :tjList="tjList"></recommend>
        <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>
import homeHeader from './homeComponent/header'
import homeswiper from './homeComponent/swiper'
import homeIcon from './homeComponent/icons'
import homeRecommend from './homeComponent/recommend'
import homeWeekend from './homeComponent/weekend'
import { mapState } from 'vuex'
export default {
    name:'home',
    components:{
        homeHeader:homeHeader,
        swiper:homeswiper,
        homeicon:homeIcon,
        recommend:homeRecommend,
        weekend:homeWeekend
    },
    data(){
      return{
          swiperList:[],
          iconList:[],
          tjList:[],
          weekendList:[],
          lastCity:""
      }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        
    },
    created () {
        /* 首页请求数据 */
        this.$ajax({
            method: 'get',
            url: '/api/index.json?city='+this.city,
           /*  data: {
                city: this.city
            } */
        })
        .then((res) => {
             console.log(res.data);
             let backData = res.data;
             if(backData.ret && backData.data){
                /*  this.city = backData.data.cityName; */
                 this.swiperList = backData.data.swiperList;
                 this.iconList = backData.data.iconList;
                 this.tjList = backData.data.tjList;
                 this.weekendList = backData.data.weekendList;
             }

         })
    },
    mounted (){
        this.lastCity = this.city;
    },
    /* 当根组件App 使用keep-alive时，组件生命周期会出现一个activated的生命周期的钩子 ，用判断是否重新发起ajax请求更新数据*/
    /* 此处可以在首页的 keep-alive 中用exclude方法去掉缓存 代替*/
    /* activated (){
        if(this.lastCity !== this.city){
            this.$ajax({
                method: 'get',
                url: '/api/index.json?city='+this.city,
            })
            .then((res) => {
                console.log(res.data);
                let backData = res.data;
                if(backData.ret && backData.data){
                    this.swiperList = backData.data.swiperList;
                    this.iconList = backData.data.iconList;
                    this.tjList = backData.data.tjList;
                    this.weekendList = backData.data.weekendList;
                }

            });
            this.lastCity = this.city;
        }
    } */
}
</script>

<style>

</style>

