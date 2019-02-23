<template>
    <div class="page-product">
        <el-row>
            <crumbs class="m-crumbs" />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
                
            </el-col>
            <el-col :span="5">
                map + fav
            </el-col>
        </el-row>
    </div>

</template>

<script>
import crumbs  from '@/components/products/crumbs.vue'
import Categroy  from '@/components/products/categroy.vue'
import list  from '@/components/products/list.vue'

export default {
    components:{
        crumbs,
        Categroy,
        list
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss'
</style>