<template>
  <div>
    <header>
      <h1>{{ propsdata }}</h1>
      <button v-on:click="sendEvent">send</button>
    </header>
  </div>
</template>

<script>
export default {
  props: [
    'propsdata'
  ],
  methods: {
    // renew라는 이벤트를 부모로 올림
    sendEvent: function() {
      this.$emit('renew');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>