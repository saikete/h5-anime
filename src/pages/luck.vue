<script setup>
import { ref } from "vue";

const isDel = ref(false);

const btnFunc = () => {
  isDel.value = true;
};
const watchFunc = () => {
  isDel.value = true;
};
</script>

<template>
  <div id="ani-luck">
    <div class="header">
      <div class="content">
        <img src="../../public/change.png" alt="" />
      </div>
    </div>
    <div :class="`content-center ${isDel ? 'all-out' : ''}`">
      <video src="../../public/ANIMATION.mp4" autoplay="autoplay" loop></video>
    </div>
    <div :class="`content-center ${isDel ? 'ani-show' : 'all-out'}`">
      <!-- <video src="../../public/ANIMATION.mp4" autoplay="autoplay" loop></video> -->
      <img src="../../public/ANIMATION/animation-4.jpg" alt="" />
    </div>
    <div :class="`bottom ${isDel ? 'text-dis' : ''}`">
      <div>点击按钮，让祝福在指尖停驻</div>
      <div>
        <button @click="btnFunc">锁定我的新年运</button>
      </div>
    </div>
    <div :class="`bottom ${isDel ? '' : 'all-out'}`">
      <div :class="`${isDel ? 'text-top' : ''}`">
        <div>恭喜你成功锁定</div>
        <div>这份香奈儿专属祝福</div>
      </div>
      <div :class="`${isDel ? 'text-down' : ''}`">
        <button @click="watchFunc">查看祝福</button>
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
    display: none;
    animation: all-out 1s ease-in-out 0s 1 normal both running !important;
  }

  .ani-show {
    animation: all-in 0.88s ease-in-out 0s 1 normal both running !important;
  }

  .text-dis {
    display: none;
    animation: all-out 0.4s ease-in-out 0s 1 normal both running !important;
  }

  .text-top {
    animation: all-out 0.8s ease-in-out 0.62s 1 normal both running !important;
  }

  .text-down {
    animation: all-out 0.8s ease-in-out 0.7s 1 normal both running !important;
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

@keyframes all-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes all-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.content-center {
  width: 100%;
  height: 6rem;
  padding-top: 1rem;
  animation: all 0.02s ease-in-out 0.24s 1 normal both running;

  &:nth-child(2) {
    transform: scale(0.8);
  }
}

.bottom {
  animation: all 0.32s ease-in-out 0s 1 normal both running;

  > div {
    text-align: center;
    color: #d4a672;

    &:nth-child(1) {
      padding-top: 0.8rem;
    }
    &:nth-child(2) {
      padding-top: 0.5rem;
    }
  }
}

.dis {
  display: none;
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