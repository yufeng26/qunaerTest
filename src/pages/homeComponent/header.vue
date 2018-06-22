<template>
    <div class="headerbox">
        <div class="headerLeft">
           <span class="iconfont back-icon">&#xe647;</span>
        </div>
        <div class="headerInput">
            <span class="iconfont">&#xe615;</span>输入城市/景点/主题
           <!--  <input type="text"> -->
        </div>
        <router-link to="/city">
            <div class="headerRight">
               <!--  {{this.$store.state.city}} -->
                {{this.city}}
                <span class="iconfont">&#xe610;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'homeHeader',
    props:{
        cityName:String
    },
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
 .headerbox{
    display:flex
    justify-content: flex-start
    align-items:center 
    height:$headerHeight 
    background:$bgColor
    color:#fff
    .headerLeft{
       width: 0.32rem
       float: left
       padding-left:0.1rem 
       .back-icon{
           font-size:0.2rem 
       }
    } 
    .headerInput{
       flex :1
       background:#fff
       margin-left:0.1rem 
       border-radius:0.05rem
       line-height:0.28rem
       color:#ccc  
       .iconfont{
           padding:0 0.1rem 
       } 
    }
    .headerRight{
        min-width: 0.62rem
        padding 0.05rem
        float:right
        text-align:center
        color:#fff 
        .iconfont{
            font-size:0.16rem 
        }
    }
      
 }
        
</style>