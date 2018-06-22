<template>
    <div class="citybox">
        <citynav></citynav>
        <searchbox :cities="cities"></searchbox>
        <list :cities="cities" :hot="hotcities" :zimu="letter"></list>
        <zimu :cities="cities" @change="saveletterchange"></zimu>
    </div>
</template>
<script>
import cityheader from './components/city-header'
import citysearch from './components/city-search'
import citylist from './components/list'
import cityM from './components/zimu'
export default {
    name:"city",
    components:{
        citynav:cityheader,
        searchbox:citysearch,
        list:citylist,
        zimu:cityM
    },
    data (){
      return{
          cities:{},
          hotcities:[],
          /* 设置一个变量用于接收子组件传来的值 */
          letter:""  
      }
    },
    created () {
        this.$ajax({
            method: 'get',
            url: '/static/mock/city.json'
           /*  ,
            data: {
                name: 'wise',
                info: 'wrong'
            } */
        })
        .then((res) => {
             console.log(res.data);
             let backData = res.data;
             if(backData.ret && backData.data){
                
                 this.cities = backData.data.cities;
                 this.hotcities = backData.data.hotCities;
                 console.log(this.cities);
             }

         })
    },
    methods:{
        saveletterchange(letter){
            //console.log(letter);
            this.letter = letter;
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>


