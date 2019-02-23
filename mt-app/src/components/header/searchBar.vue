<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <!-- 使用组件库 -->
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input = "input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="item + '_'+ index">
                            <router-link  :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                   <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                </p>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      searchWord: "",
      isfocus: false,
      hotPlaceList:[],
      SearchList:[],
      suggestList:[],
    };
  },
  created(){
      api.getSearchHotWork().then(res =>{
          this.hotPlaceList = res.data.data;
          this.suggestList = res.data.data;
      });
  },
  computed:{
      isHotPlace: function(){
          return this.isfocus && !this.searchWord
      },
      isSearchList: function(){
          return this.isfocus && this.searchWord
      }
  },
  methods:{
      //聚焦
      focus(){
          this.isfocus = true
      },
      //失焦
     blur() {
        var self = this;
        setTimeout(function() {
            self.isfocus = false;
        }, 200)
    },
    input(){
        api.getSearchList().then(res=>{
            this.SearchList = res.data.data;
        });
    }
  }
};
</script>

<style lang="scss">
    @import "@/assets/css/public/header/search.scss";
</style>