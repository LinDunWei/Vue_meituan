<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link :to="{name: 'changeCity'}" class="changeCity">切换城市</router-link>
            [
                <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}}</a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
            <router-link :to="{name: 'register'}" class="register">注册</router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    created(){
        api.getCurPosition().then((res) => {
            this.$store.dispatch('setPosition',res.data.data);
            this.nearCity = res.data.data.nearCity;
        });
    },
    watch:{
        "$store.state.position": function(){
            this.nearCity = this.$store.state.position.nearCity;
        }
    },
    data(){
        return{
            nearCity:[]
        }
    }
}
</script>

<style lang="scss">
</style>