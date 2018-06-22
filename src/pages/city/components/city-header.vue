<template>
    <div class="cityheader">
        城市选择
        <router-link to="/">
            <span class="iconfont back-icon">&#xe647;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"cityHeader"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .cityheader{
    position:relative
    overflow:hidden
    height:$headerHeight
    line-height:$headerHeight 
    background:$bgColor
    color:#fff
    font-size:.18rem 
    text-align:center
    .back-icon{
        position:absolute
        font-size:0.2rem 
        top:0
        left:0
        width:0.32rem
        text-align:center
        color:#fff    
    } 
  }
</style>

