<template>
    <div class="tuijian">
        <div class="tilte">
            周末推荐
        </div>
        <ul>
            <li class="tjItem" v-for="(item,index) in weekendList" :key="index">
                <div class="tjImgbox">
                   <img class="tjImg" :src="item.imgUrl">
                </div>
                <div class="tjword">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </div> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"homeRecommend",
    props:{
        weekendList:Array
    },
    data () {
        return{
           
        }
    },
    filters: {
        money: function (value) {
            return "￥"+value+"起";
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl' 
@import '~@/assets/styles/mixins.styl' 
.tuijian{
    margin-top:.1rem
    .tilte{
        line-height:24px;
        background:#f5f5f5
        padding:10px 15px

    } 
    .tjItem{
        padding:10px 15px
        border-bottom:1px solid #cccccc
        .tjImgbox{
            width:100%
            margin-right:10px 
            img{
                width:100% 
            } 
        }
        .tjword{
            line-height:.28rem 
            h3{
                font-size:0.16rem 
            }
            p{
               ellipsis()
            }
        }    
    }
}
</style>

