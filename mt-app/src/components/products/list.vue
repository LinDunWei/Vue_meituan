<template>
    <div class="m-products-list">
        <ul>
            <li v-for="item in nav" 
                :key="item.key"
                :class="{'s-nav-active':item.active}">{{item.name}}</li>
        </ul>
        <el-row>
            <Item v-for="(item,index) in productList" :key="index" :meta="item" />
        </el-row>
    </div>

</template>

<script>
import Item from './item.vue'
import api from '@/api/index.js'
export default {
  created(){
    api.getProductsList().then(res => {
      this.productList = res.data.data;
    });
  },
    components:{
        Item
    },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList:[]
      // productList: [
      //   {
      //     image: "//p1.meituan.net/merchantpic/d079926d5094fd1f7d64acc5bb9e3abf65590.jpg@275w_156h_1e_1c",
      //     title: "千味涮(陆丰店)",

      //     type: "food",

      //     score: "4.6",

      //     commentNum: 10,

      //     comment: [
      //       {
      //         username: "xxxx",

      //         evalaute: "好吃"
      //       }
      //     ],

      //     tab: ["涮涮锅", "碣石区"],

      //     address: "陆丰市碣石镇玄武路28号",

      //     avgPrice: 54,

      //     dealItems: [
      //       {
      //         title: "单人套餐，提供免费wifi",

      //         price: 88,

      //         counterPrice: 118,

      //         saleNum: 120,

      //         priceType: "元"
      //       }
      //     ]
      //   }
      // ]
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/css/products/list.scss'
</style>