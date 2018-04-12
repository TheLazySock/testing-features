<template>
  <div id="app">
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./assets/styles";

  body {
    background: url('./assets/images/background.jpg') no-repeat center center fixed;
    background-size: cover;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #ffffff;
      opacity: 0.6;
      z-index: -1;
    }

    .application {
      background: none;
    }
  }
</style>
