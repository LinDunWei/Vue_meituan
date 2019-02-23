<template>
    <div>
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city_'+ item">{{item}}</a>
            </dd>
            
        </dl>
        <dl v-for="(item,index) in cityGroup" :key="index" class="m-categroy-section" :id="'city_'+ index">
            <dt>{{index}}</dt>
            <dd>
                <span v-for="(city, i) in item" :key="i" @click = "changeCity(city)">{{city.name}}</span>
            </dd>
        </dl>
    </div>

</template>

<script>
import api from '@/api/index.js'
export default {
    methods:{
        changeCity(item){
            this.$store.dispatch('setPosition',item);
            this.$router.push({name: 'index'})
        }
    },
    data(){
        return {
            list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList:[

            ],
            cityGroup: null
        }
    },

    created(){
        api.getCityList().then(res => {
            var obj={}
            res.data.data.forEach(function(item,index){
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);

            });
            this.cityGroup = obj;
        });

    },

}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/categroy.scss'
</style>