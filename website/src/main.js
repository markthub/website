import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css';


// configure language
locale.use(lang)

// Import components
Vue.use(ElementUI)

// Production tips
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')