<template>
<!--  .prevent 붙이면 submit에 대한 기본 동작을 막겠다는 의미-->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      // submit 버튼 누르면 페이지 리로드 되는 기본 동작 막기
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password,
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
          alert('Login successful!');
        })
        .catch(function(error) {
          console.error(error);
          alert('Login failed!');
        });
    }
  }

}
</script>

<style lang="scss" scoped>

</style>