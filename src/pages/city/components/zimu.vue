<template>
    <ul class="listM">
       <!-- <li class="item" v-for="(item,key) of cities" :key="key" @click="letterClick"
       @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">   
           {{key}}
       </li> -->
       <!-- 此处的prevent是阻止手机浏览下拉的默认属性 -->
       <li class="item" v-for="item of letters" :key="item" :ref="item"  
       @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="letterClick">   
           {{item}}
       </li>
    </ul>
</template>

<script>
export default {
    name:"cityM",
    props:{
        cities:Object
    },
    computed:{
        letters (){
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
           // console.log(letters);
        }
    },
    data (){
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated (){
         /* 首字母A距顶部list的高度 */
         this.startY = this.$refs['A'][0].offsetTop;
    },
    methods:{
        letterClick(e){
            //alert(e.target.innerText);
            //向父组件传值
            this.$emit('change',e.target.innerText);
        },
       handleTouchStart(){
           this.touchStatus = true;
       },
       handleTouchMove(e){
           if(this.touchStatus){
               if(this.timer){
                   clearTimeout(this.timer);
               }
              this.timer = setTimeout(() =>{
                   /* 手指触摸屏距顶部list的距离*/
                    const touchY = e.touches[0].clientY - 90;
                    /* 计算当前触摸的是第几个字母 */
                    const index = Math.floor((touchY - this.startY) / 18);
                    //console.log(index);
                    if(index >= 0 && index < this.letters.length){
                            this.$emit('change',this.letters[index]);
                    }
              },16)
           }
       }, 
       handleTouchEnd(){
           this.touchStatus = false;
       }
    }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .listM{
      display flex
      flex-direction column
      justify-content center
      position absolute
      top 0.9rem
      bottom 0
      right 0
      width 0.2rem
      .item{
          line-height 0.18rem
          text-align center
          color $bgColor
      }
  }
</style>

