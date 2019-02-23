// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css';
import store from './store';
Vue.use(ElementUI);
Vue.config.productionTip = false
/*给document添加点击事件，binding.value就是从select.vue中v-document-click绑定的事件对象*/
Vue.directive('document-click',{
  bind(el,binding,vonde){
    document.addEventListener('click',binding.value,false);
  },
  inserted(){

  },
  update(){

  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



