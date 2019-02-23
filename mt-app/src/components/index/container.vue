<template>
    <div class="m-istyle">
        <dl @mouseover="over" :class="nav.class">
            <dt>{{nav.title}}</dt>
            <dd v-for="(item,index) in nav.list"
                :key="index"
                :data-type="item.tab" 
                :class="{active: kind == item.tab}">{{item.text}}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item,index) in resultsData[kind]" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="newa">
                    <img :src="item.image" class="image">
                    <div class="cbody">
                        <div class="title" :title="item.title">
                            {{item.title}}
                        </div>
                        <div class="sub-title" :title="item.sub_title">
                           {{item.sub_title}}
                        </div>
                        <div class="price-info">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price}}</span>
                            </span>
                            <span class="old-price">门市价¥{{item.price}}</span>
                            <span class="sold bottom-right-info">{{item.subTitle}}</span>
                        </div>
                        <!-- <div class="price-info" v-else-if="!item.rentNum">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                            <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div> -->
                    </div>
                </el-card>
            </li>
            
        </ul>
    </div>

</template>

<script>
import api from '@/api/index.js'
export default {
    created(){
        api.ResultsByKeywords().then( (res)=>{
            this.resultsData = res.data.data;
        });
    },
    props:['nav'],

    methods:{
        over(e){
            let dom = e.target;
            //console.log(e.target);
            let tagName = dom.tagName.toLowerCase(); //获得标签名，toLowerCase（）转化为小写
            if(tagName != 'dd'){
                return false;
            }
            this.kind = dom.getAttribute("data-type");
        }
    },
    data(){
        return {
            resultsData:{},
            kind:'all',
            list:[
                {
                    img: "//p0.meituan.net/msmerchant/3f9100f13c43c2f3eee8a00acb4348442779827.jpeg@460w_260h_1e_1c",
                    title: "口口牛肉火锅城",
                    sub_title: "4-5人牛肉火锅，有赠品",
                    price_info:{
                        current_price: 189,
                        old_price: 218
                    },
                    rentNum: 10,
                    address: '东海大道'
                },
                {
                    img: "//p1.meituan.net/mogu/5c85e35e8d289aac4ae75061d1f8bcfe251908.jpg@460w_260h_1e_1c",
                    title: "子非鱼",
                    sub_title: "子非鱼超级套餐，建议3-4人食用",
                    price_info:{
                        current_price: 148,
                        old_price: 215
                    },
                    rentNum: 10,
                    address: '碣石镇滨海大道'
                },
                {
                    img: "//p0.meituan.net/poi/017a443cc664f38a86e0f56c254d9b21172032.jpg@460w_260h_1e_1c",
                    title: "禾芳寿司(东海马街店)",
                    sub_title: "小吃2选1，提供免费wifi",
                    price_info:{
                        current_price: 6.8,
                        old_price: 8.0
                    },
                    rentNum: 10,
                    address: '马街'
                },
                {
                    img: "//p0.meituan.net/mogu/b6a6ce607daa069be17680104ff06d02114558.jpg@460w_260h_1e_1c",
                    title: "九门督茶",
                    sub_title: "霸气脏脏鲜牛乳1杯",
                    price_info:{
                        current_price: 16.5,
                        old_price: 25
                    },
                    rentNum: 10,
                    address: '陆丰'
                },
                {
                    img: "//p0.meituan.net/scarlett/7c4af736956dcdd4c9eaa5b78de9373c13565.jpg@275w_156h_1e_1c",
                    title: "麦当劳(碣石店)",
                    sub_title: "超级学霸套餐",
                    price_info:{
                        current_price: 68,
                        old_price: 118
                    },
                    rentNum: 0,
                    address: '碣石镇新第一坊第一幢'
                },
                {
                    img: "//p0.meituan.net/mogu/d46d41a9058da069a91e8873947203ab38150.jpg@460w_260h_1e_1c",
                    title: "樱绿特色寿司料理(甲子店)",
                    sub_title: "超级4人套餐，提供免费wifi",
                    price_info:{
                        current_price: 88,
                        old_price: 115
                    },
                    rentNum: 10,
                    address: '甲子'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>