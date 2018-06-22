<template>
  <div class="main">
       <div class="citysearch">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
       </div>
       <div class="searchContent" ref="search" v-show="keyword">
           <ul>
               <li class="searchItem" v-for="item of list" :key="item.id" @click="cityClick(item.name)">{{item.name}}</li>
               <li class="searchItem" v-show="NoData">
                   没有匹配到数据
               </li>
           </ul>
       </div>
  </div>
   
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'  /* 调用vuex的方法做映射 */
export default {
    name:"citysearch",
    props:{
        cities:Object
    },
    data (){
        return{
           keyword:"",
           list:[] ,
           timer:null
        }
    },
    computed:{
        NoData(){
            return  !this.list.length;
        }
    },
    watch:{
        keyword (){
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.keyword){
                this.list = [];
                return
            }
            this.timer = setTimeout(() =>{
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            },100)
        }
    },
    mounted (){
        this.scroll = new Bscroll(this.$refs.search);
    },
    methods:{
        /* cityClick(city){
            this.$store.dispatch("changeCity",city); 
            this.$store.commit("changeCity",city);
            this.$router.push("/"); //回到首页
        }*/
        cityClick(city){
            this.changeCity(city);
            this.$router.push("/"); //回到首页
        },
        ...mapMutations(['changeCity']) /* vuex中的mutations中changeCity方法映射给本组件 */
    }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .citysearch{
      height 0.36rem
      padding 0.05rem
      background $bgColor
      .search-input{
          box-sizing border-box
          width 100%
          height 0.31rem
          line-height 0.31rem
          padding 0 .1rem
          text-align center
          border-radius 0.04rem
          color #666
      } 
  }
  .searchContent{
      overflow hidden
      position absolute
      top 0.9rem
      bottom 0
      left 0
      right 0
      z-index 2
      background #f5f5f5
      .searchItem{
          color #666
          border-bottom 1px solid #ccc
          line-height 0.24rem
          padding 0.05rem 0.1rem 
          box-sizing border-box 
          background #fff  
      }
  }
</style>

