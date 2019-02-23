<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item) in classicList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"></m-select>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item) in areaList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"></m-select>
            </dd>
        </dl>
    </div>

</template>

<script>
import MSelect from './select.vue'
export default {
    components:{
        MSelect
    },
    data(){
        return {
            classicList:[
                {
                    title:"美食",
                    type: "food",
                    sub_list:[
                        {
                            name: "日本菜",
                            id:"Japen"
                        },
                        {
                            name: "饮品店",
                            id: "drink"
                        },
                        {
                            name: "面包甜点",
                            id: "cate"
                        }
                    ]
                },
                {
                    title:"酒店住宿",
                    type: "hotel",
                    sub_list:[
                        {
                            name: "温泉酒店",
                            id: "hot_spring"
                        },
                        {
                            name:"经济酒店",
                            id:"economy"
                        },
                        {
                            name:"高端酒店",
                            id:"high"
                        }
                    ]
                }
            ],
            areaList:[
                {
                    title:"推荐商圈",
                    sub_list:[
                        {
                            name: "京望",
                            id: 120000
                        },
                        {
                            name: "昌平",
                            id: 122222
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>