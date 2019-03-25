// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui框架
import MintUI from 'mint-ui'

//引入mint-ui的css样式
import 'mint-ui/lib/style.css'

import {store} from './store/store'

//引入公共样式
import './assets/css/reset.css'

//引入字体自适应
import './assets/js/reset'

//配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'http://234j08j718.iok.la/proxy_manage/app/'
Vue.prototype.$axios = Axios;

//安装插件
Vue.use(MintUI)

Vue.prototype.$axios = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
