<template>
    <div class="page-register">
        <div class="header">
            <header>
                <a href="#" class="site-logo"></a>
                <div class="login">
                    <span>已有美团账号</span>
                    <router-link :to="{name:'login'}">登录</router-link>
                </div>
            </header>
        </div>
        <div class="content">
            <el-form 
            :model="registerForm" 
            status-icon :rules="rules" 
            ref="registerForm" 
            label-width="100px" 
            class="demo-ruleForm"
            >
                <el-form-item label="用户名" prop="userName">
                    <el-input class="elInput" type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input @input="input" class="elInput" type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                    <div class="pw-strength">
                        <div :class="['bar',strengthClass]"></div>
                        <div class="letter">
                            <span>弱</span>
                            <span>中</span>
                            <span>强</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input class="elInput" type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                   
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
import api from '@/api/index.js'
export default {
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                api.register({
                    params:this.registerForm
                }).then(res=>{
                    if(res.data.status == 'success'){
                        this.$router.push({name:'login'});
                    }else{
                        alert(res.data.msg);
                    }
                });
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        input(){
            var reg = /(\w)+/g;
            var regName = /(\d)+/g;
            var reg = /_/g;
            var strongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regStr) && this.registerForm.password.match(regNum);

            if(this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strongth)){
                this.strengthClass = 'strong';
            }else if(this.registerForm.password.length < 6){
                this.strengthClass = 'week';
            }else if(!this.registerForm.password){
                this.strengthClass = ''
            }else{
                this.strengthClass = 'normal';
            }
        }
    },
    data(){
        var validateUser = (rule,value,callback)=>{
            if(value === ''){
                callback(new Error("请输入密码"));
            }else if(value.length < 4 || value.length > 16){
                callback(new Error("用户名必须是4-16位的字母数字下划线组成"));
            }else {
            callback();
            }
        }
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
            if (this.registerForm.rePassword !== '') {
            this.$refs.registerForm.validateField('rePassword');
          }
          callback();
        }
      };
        var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            registerForm:{
                userName:'',
                passWord:'',
                rePassword:''
            },
            strengthClass:'',
            rules: {
                userName:[
                    {validator:validateUser,trigger:"blur"}
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                rePassword: [
                    { validator: validatePass2, trigger: 'blur' }
                ],

            }
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>