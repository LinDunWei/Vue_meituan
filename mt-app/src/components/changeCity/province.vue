<template>
    <div>
        <span class="name">按省份选择</span>
        <m-select :list = 'provinceList'
                  
                  title="省份"
                  :value = 'province'
                  :showWrapperActive = "provinceActive"
                  @change_active="changeProvinceActive"
                  className="province" 
                  @change="changeProvince"/>
        <m-select :list = 'cityList'
                  title="城市"
                  :value = 'city'
                  :showWrapperActive = "cityActive"
                  @change_active="changeCityActive" 
                  :disabled="cityDisabled"
                  className="city"
                  @change="changeCity"/>
        <span>直接搜索：</span>
        <!-- 远程搜索框，element组件库里拿 -->
        <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市中文或拼音"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
            v-for="item in searchList"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
    </div>

</template>

<script>
import MSelect from '@/components/changeCity/select.vue'
import api from '@/api/index.js'
export default {
    created(){
        api.getProvinceCity().then(res => {
            this.provinceList = res.data.data.map((item) => {
                item.name = item.provinceName;
                return item;
            });
        });
    },
    components:{
        MSelect
    },
    methods:{
        remoteMethod(){
            //请求后端接口
        },
        changeProvinceActive(flag){
            this.provinceActive = flag;
            if(flag){
                this.cityActive = false;
            }
        },
        changeCityActive(flag){
            this.cityActive = flag;
            if(flag){
                this.provinceActive = false;
            }
        },
        changeProvince(item){
            this.province = item.name;
            this.cityDisabled = false;
            this.cityList = item.cityInfoList;
        },
        changeCity(item){
            this.city = item.name;
             this.$store.dispatch('setPosition',item);
             this.$router.push({name: 'index'});
        }
    },
    data(){
        return {
            cityDisabled: true,
            searchWord:'',
            searchList:['阿拉善盟','鞍山','安庆','安阳','阿坝','安顺','阿里',
                        '安康','阿克苏','阿勒泰','中国澳门','安吉','安丘','安岳',
                        '安平','安溪','安宁','安化','阿拉尔','安福','阿勒泰市','阿图什市','安州区',
                        '阿荣旗','安陆市','阿城区','克州','黑河','牡丹江','博尔塔拉','齐齐哈尔','日喀则',
                        '安阳','绵阳','赤峰','克州'], //放城市名
            provinceList: [],

            province: '省份',

            cityList:[],
            city: "城市",

            provinceActive: false,
            cityActive: false

        }
    }
}
</script>

<style lang = "scss">
     @import '@/assets/css/changecity/iselect.scss'
</style>