import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import less from 'less';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.use(less)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
