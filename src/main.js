import Vue from 'vue'                     //import是ES6的语法
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false          //关闭浏览器对项目环境的一些提示
Vue.use(ElementUI);                       //安装

new Vue({
  router,
  render: h => h(App),                    //渲染App的组件
}).$mount('#app')         //手动挂载，和el类似
