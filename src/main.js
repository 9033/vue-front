import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'

//antdv에서 사용할 컴포넌트를 지정.
import Button from 'ant-design-vue/lib/button';
import Table from 'ant-design-vue/lib/table';
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
