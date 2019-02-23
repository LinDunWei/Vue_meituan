<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10"><geo/></el-col>
        <el-col :span="14"><MNav/></el-col>
    </el-row>

</template>

<script>
//引入geo组件和nav组件
import geo from './geo.vue';
import MNav from './nav.vue';
export default {
    components:{
        geo,
        MNav
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss'
</style>