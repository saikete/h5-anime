<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import IndPage from "./pages/index.vue";
let a = ref(10);

function btnFunc() {
  a.value += 1;
}
</script>

<template>
  <div class="app">
    <IndPage />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
}
</style>
