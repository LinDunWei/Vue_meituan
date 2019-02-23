<template>
    <div class="layout-default">
        <el-container>
            <el-header height="">
                <my-header/>
            </el-header>
            <el-main>
                <!-- 这里使用page文件夹中的index.vue这个路由，记得加上router-view -->
                <router-view />
            </el-main>
            <el-footer height="">
                <my-footer/>
            </el-footer>
        </el-container>
    </div>

</template>

<script>
//引入组件
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
export default {
    components:{
        MyHeader,
        MyFooter
    }
};
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>