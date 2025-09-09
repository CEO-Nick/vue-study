import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 애플리케이션이 시작되는 진입점
// 여기서 Vue 앱 인스턴스 생성하고, 필요 설정 로드한 후에,
// 'index.html'의 특정 요소에 앱을 마운트하여 화면에 표시한다.
new Vue({
  render: h => h(App),
}).$mount('#app')
