<template>
<!--  템플릿의 루트에는 div 하나의 엘리멘트만 존재해야 함-->
  <div>
    {{ str }}
    <AppHeader
        v-bind:propsdata="str"
        v-on:renew="renewStr"
    />
<!--    <app-header></app-header>-->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

// 이렇게 정의했던 걸 컴포넌트로 분리한거임
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }

// new Vue({
//   el: '#app',
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function () {
    return {
      str: 'Header'
    }
  },
  components: {
    AppHeader
    // 'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'Renewed!';
    }
  }

}
</script>

<style lang="scss" scoped>

</style>