<script setup>
import { ref } from "vue";

const isDel = ref(false);

const btnFunc = () => {
  isDel.value = true;
};
</script>

<template>
  <div id="ani-luck">
    <div class="header">
      <div class="content">
        <img src="../assets/change.png" alt="" />
      </div>
    </div>
    <div :class="`content-center ${isDel ? 'all-out' : ''}`">
      <video src="../../public/ANIMATION.mp4" autoplay="autoplay" loop></video>
    </div>
    <div :class="`bottom ${isDel ? 'all-out' : ''}`">
      <div>点击按钮，让祝福在指尖停驻</div>
      <div>
        <button @click="btnFunc">锁定我的新年运</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
* {
  font-size: 0.4rem;
}

#ani-luck {
  .all-out {
    // animation: all-out 0.2s ease-in-out 0s 1 normal both running;
    display: none;
  }
}

.header {
  display: flex;
  justify-content: center;
  .content {
    width: 4rem;
    padding-top: 1rem;
    animation: all 0.32s ease-in-out 0s 1 normal both running;
  }
}

@keyframes all {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes all-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.content-center {
  width: 100%;
  height: 5rem;
  padding-top: 1rem;
  animation: all 0.02s ease-in-out 0.24s 1 normal both running;
}

.bottom {
  padding-top: 1.5rem;
  animation: all 0.32s ease-in-out 0s 1 normal both running;

  div {
    text-align: center;
    color: #d4a672;

    &:nth-child(2) {
      padding-top: 0.5rem;
    }
  }
}

button {
  width: 3rem;
  height: 2.4em;
  background: #000000;
  color: #fff;
  outline: none;
  border: none;
  // animation: all 0.32s ease-in-out 0s 1 normal both running;
  font-size: 14px;
}
</style>