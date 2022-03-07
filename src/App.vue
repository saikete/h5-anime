<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
let a = ref(10);

function btnFunc() {
  a.value += 1;
}
</script>

<template>
  <router-view />
</template>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;

  #app {
    width: 100%;
    height: 100%;
    > div {
      width: 100%;
      height: 100%;
    }
  }
}

* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
