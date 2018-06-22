<template>
    <div class="tuijian">
        <div class="tilte">
            热门推荐
        </div>
        <ul>
            <router-link tag="li"  :to=" '/detail/' + item.id " class="tjItem" v-for="(item,index) in tjList" :key="index">
                <div class="tjImgbox">
                   <img class="tjImg" :src="item.imgUrl">
                </div>
                <div class="tjword">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                    <p class="nideMoney">{{item.id | money}}</p>
                </div> 
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"homeRecommend",
    props:{
        tjList:Array
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
        display:flex
        justify-content: flex-start
        align-items:center
        .tjImgbox{
            width:100px
            margin-right:10px 
            img{
                width:100% 
            } 
        }
        .tjword{
            line-height:.28rem 
            h3{
                font-size:0.18rem 
            }
            .nideMoney{
                color:#ff0000 
            }
        }    
    }
}
</style>

