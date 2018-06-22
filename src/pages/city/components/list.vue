<template>
    <div class="citylist" ref="wrapper">
        <div class="content">
            <div class="area">
           <div class="tilte bodertb">当前城市</div>
           <div class="button-list">
               <div class="button-warp">
                    <div class="button"> {{this.currentCity}}</div>
               </div>
           </div>
       </div>
       <div class="area">
           <div class="tilte bodertb">热门城市</div>
           <div class="button-list">
               <div class="button-warp" v-for="item of hot" :key="item.id" @click="cityClick(item.name)">
                    <div class="button">{{item.name}}</div>
               </div>
           </div>
       </div>
       <!-- 按字母显示 -->
       <div class="area"  v-for="(item, key) of cities" :key="key" :ref="key">
           <div class="tilte bodertb">
              {{key}}
           </div>
           <div class="item-list" v-for="innerItem of item" :key="innerItem.id"  @click="cityClick(innerItem.name)">
               <div class="item">
                   {{innerItem.name}}
               </div>
           </div>
       </div>
       
     </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'  /* 调用vuex的方法做映射 */
export default {
    name:"citylist",
    props:{
       hot: Array,
       cities: Object,
       zimu:String
    },
    computed:{
        ...mapState({
            currentCity:'city'  /* vuex中的state的城市名字city映射给currentCity */
        })
    },
    mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    /* 添加监听字母的变化 */
    watch:{
        zimu (){
            if(this.zimu){
                const element = this.$refs[this.zimu][0];
                this.scroll.scrollToElement(element);
            }
        }
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
  .bodertb:before
        border-color #ccc
  .bodertb:after
        border-color #ccc
  .citylist{
      overflow hidden
      position absolute
      top 0.9rem
      left 0
      right 0
      bottom 0
      .tilte{
      line-height .22rem
      background #f2f2f2
      color #666
      padding 0.05rem 0.1rem
      }   
        .button-list{
                padding 0.05rem
                overflow hidden
                .button-warp{
                    float left
                    width 33%
                    .button{
                        padding 0.05rem 0
                        text-align center
                        margin 0.05rem
                        border 0.01rem solid #ccc
                    }
                }  
            }
            .item-list{
                .item{
                    line-height 0.28rem
                    color #666
                    padding 0.05rem 0.1rem
                    border-bottom:1px solid #f5f5f5
                }
            }
  }     
  
</style>

