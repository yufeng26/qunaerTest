<!--递归组件的使用，要是使用到组件的name了  -->
<template>
 <div class="listbox">
     <div class="listItem" v-for="(item,index) of listData" :key="index">
         <p class="item-tlt">
             <i class="el-icon-goods"></i>{{item.title}}
         </p>
         <div v-if="item.children" class="item-child">
             <listbox :listData="item.children"></listbox>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  name: "listbox",
  props:{
      listData: Array
  },
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>
<style lang="stylus" scoped>
    .listItem{
        padding  0.15rem
        border-bottom 1px solid #f7f7f7
        color #409eff 
        font-size 0.16rem
    }
</style>