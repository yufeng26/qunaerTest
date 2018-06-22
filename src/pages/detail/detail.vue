<!--  -->
<template>
 <div class="detailPage">
     <banenrdiv :bannerImg="banner" :sighName="sighName" :bannerfm="bannerImg"></banenrdiv>
     <headerdiv></headerdiv>
     <div class="content">
         <listdiv :listData="list"></listdiv>
     </div>
 </div>
</template>

<script>
import banner from './component/banner'
import header from './component/header'
import list from './component/list'
export default {
  name:"detailPage",
  data() {
    return {
        list:[],
        banner:[],
        sighName:"",
        bannerImg:""
    };
  },
  components: {
      banenrdiv:banner,
      headerdiv:header,
      listdiv:list
  } ,
  methods: {
    getDetailData (){
        this.$ajax({
            method: 'get',
            url: '/api/detail.json?id=' + this.$route.params.id
           /*  data: {
               id:this.$route.params.id
            } */
        })
        .then((res) => {
             console.log(res.data);
             let backData = res.data;
             if(backData.ret && backData.data){
                 this.list = backData.data.categoryList;
                 this.banner = backData.data.gallaryImgs;
                 this.sighName = backData.data.sightName;
                 this.bannerImg = backData.data.bannerImg;
             }

         })
         .catch((error)=>{
           console.log(error);
         })
    }
  },
  mounted (){
     this.getDetailData()
  },
  activated (){
     this.getDetailData()
  }
};
</script>
<style scoped>
.content{
  height: 800px;
}
</style>