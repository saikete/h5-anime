<script setup>
const imgLIst = [
  { url: "./ELEMENTS/camilia.png" },
  { url: "./ELEMENTS/laten.png" },
  { url: "./ELEMENTS/flower2.png" },
  { url: "./ELEMENTS/n5.png" },
  { url: "./ELEMENTS/camilia.png" },
  { url: "./ELEMENTS/flower1.png" },
  { url: "./ELEMENTS/lip.png" },
];

const btnFunc = () => {
  const btn = document.querySelector("button");
  const animaList = document.querySelectorAll(".content-inner-image");
  const text1 = document.querySelector(".content div:nth-child(1)"),
    text2 = document.querySelector(".content div:nth-child(2)"),
    text3 = document.querySelector(".content div:nth-child(3)");

  console.log(animaList);
  animaList[0].classList.add("first-leave");
  animaList[1].classList.add("second-leave");
  animaList[2].classList.add("third-leave");
  animaList[3].classList.add("fourth-leave");
  animaList[4].classList.add("fifth-leave");
  animaList[5].classList.add("sixth-leave");
  animaList[6].classList.add("seventh-leave");
  btn.classList.add("btn-out");
  text1.classList.add("btn-out");
  text2.classList.add("btn-out");
  text3.classList.add("btn-out");
};
</script>

<template>
  <div class="main">
    <div class="anima">
      <div
        class="content-inner-image"
        v-for="(item, index) in imgLIst"
        :key="index"
      >
        <img :src="item.url" alt="" />
      </div>
    </div>

    <div class="content">
      <div>
        <img src="../assets/change.png" alt="" />
      </div>
      <div>香奈儿的新春祝福，滚滚而来</div>
      <div>哪一个，会在指尖停驻</div>
      <div><button @click="btnFunc">碰碰福气</button></div>
    </div>
  </div>
</template>

<style>
img {
  width: 100%;
}

.main {
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-inner-image {
  /* width: 2rem; */
}

.content > div {
  /* width: 100%; */
}

.content > div:nth-child(1) {
  margin-top: 0.5rem;
  animation: all 1s ease-in-out 0.2s 1 normal both running;
}

.content > div:nth-child(1) img {
  width: 4rem;
}

.content > div:nth-child(2) {
  margin-top: 0.3rem;
  font-size: 0.4rem;
  color: #d4a672;
  animation: all 0.8s ease-in-out 1s 1 normal both running;
}

.content > div:nth-child(3) {
  font-size: 0.4rem;
  color: #d4a672;
  margin-top: 0.1rem;
  animation: all 0.8s ease-in-out 1s 1 normal both running;
}

.anima {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translate(0, 0);
  overflow: hidden;
  /* animation: all 1s ease-in-out 0.2s 1 normal both running; */
}

@keyframes all {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* @keyframes text {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
} */
.main .content .btn-out {
  animation: btn-out 0.8s ease-in-out 0s 1 normal both running;
}

@keyframes btn-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

button {
  width: 3rem;
  height: 2.4em;
  background: #000000;
  color: #fff;
  outline: none;
  border: none;
  animation: all 0.7s ease-in-out 1.2s 1 normal both running;
}

.content-inner-image {
  position: absolute;
}

.content-inner-image:nth-child(1) {
  transform: translate(-1.8rem, -1.2rem) rotate(30deg);
  width: 2.8rem;
  animation: first 1s ease-in-out 0.2s 1 normal both running;
}

@keyframes first {
  0% {
    opacity: 0;
    transform: translate(-1.8rem, -1.2rem) rotate(30deg);
  }
  100% {
    opacity: 1;
    transform: translate(-0.85rem, -0.32rem) rotate(0deg);
  }
}

.main .first-leave {
  animation: first-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes first-leave {
  0% {
    opacity: 1;
    transform: translate(-0.85rem, -0.32rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(-1.8rem, -1.2rem) rotate(30deg);
  }
}

.content-inner-image:nth-child(2) {
  width: 4.45rem;
  transform: translate(6.29rem, 0) rotate(-17deg);
  animation: second 1s ease-in-out 0.2s 1 normal both running;
}

@keyframes second {
  0% {
    opacity: 0;
    transform: translate(6.29rem, 0) rotate(-17deg);
  }
  100% {
    opacity: 1;
    transform: translate(3.8rem) rotate(0deg);
  }
}

.main .second-leave {
  animation: second-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes second-leave {
  0% {
    opacity: 1;
    transform: translate(3.8rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(6.29rem, 0) rotate(-17deg);
  }
}

.content-inner-image:nth-child(3) {
  width: 3.4rem;
  transform: translate(-3.5rem, 1.67rem) rotate(20deg);
  animation: third 1s ease-in-out 0.2s 1 normal both running;
}

@keyframes third {
  0% {
    opacity: 0;
    transform: translate(-3.5rem, 1.67rem) rotate(20deg);
  }
  100% {
    opacity: 1;
    transform: translate(-1.59rem, 1.67rem) rotate(0deg);
  }
}

.main .third-leave {
  animation: third-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes third-leave {
  0% {
    opacity: 1;
    transform: translate(-1.59rem, 1.67rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(-3.5rem, 1.67rem) rotate(20deg);
  }
}

.content-inner-image:nth-child(4) {
  transform: translate(-2.96rem, 10.99rem) rotate(-20deg);
  width: 3.45rem;
  animation: fourth 1s ease-in-out 0.2s 1 normal both running;
}

@keyframes fourth {
  0% {
    opacity: 0;
    transform: translate(-2.96rem, 10.99rem) rotate(-20deg);
  }
  100% {
    opacity: 1;
    transform: translate(-0.83rem, 9.42rem) rotate(0deg);
  }
}

.main .fourth-leave {
  animation: fourth-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes fourth-leave {
  0% {
    opacity: 1;
    transform: translate(-0.83rem, 9.42rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(-2.96rem, 10.99rem) rotate(-20deg);
  }
}

.content-inner-image:nth-child(5) {
  transform: translate(2.93rem, 13.18rem) rotate(40deg);
  width: 2.23rem;
  animation: fifth 1s ease-in-out 0.2s 1 normal both running;
}

@keyframes fifth {
  0% {
    opacity: 0;
    transform: translate(2.93rem, 13.18rem) rotate(40deg);
  }
  100% {
    opacity: 1;
    transform: translate(2.93rem, 12.03rem) rotate(0deg);
  }
}

.main .fifth-leave {
  animation: fifth-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes fifth-leave {
  0% {
    opacity: 1;
    transform: translate(2.93rem, 12.03rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(2.93rem, 13.18rem) rotate(40deg);
  }
}

.content-inner-image:nth-child(6) {
  transform: translate(5.04rem, 12.36rem) rotate(30deg);
  width: 3rem;
  animation: sixth 1s ease-in-out 0s 1 normal both running;
}

@keyframes sixth {
  0% {
    opacity: 0;
    transform: translate(5.04rem, 12.36rem) rotate(30deg);
  }
  100% {
    opacity: 1;
    transform: translate(4.84rem, 10.84rem) rotate(0deg);
  }
}

.main .sixth-leave {
  animation: sixth-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes sixth-leave {
  0% {
    opacity: 1;
    transform: translate(4.84rem, 10.84rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(5.04rem, 12.36rem) rotate(30deg);
  }
}

.content-inner-image:nth-child(7) {
  transform: translate(7.11rem, 9.42rem) rotate(28deg);
  width: 3.45rem;
  animation: seventh 1s ease-in-out 0s 1 normal both running;
}

@keyframes seventh {
  0% {
    opacity: 0;
    transform: translate(7.11rem, 9.42rem) rotate(28deg);
  }
  100% {
    opacity: 1;
    transform: translate(5.63rem, 9.65rem) rotate(0deg);
  }
}

.main .seventh-leave {
  animation: seventh-leave 1s ease-in-out 0s 1 normal both running;
}

@keyframes seventh-leave {
  0% {
    opacity: 1;
    transform: translate(5.63rem, 9.65rem) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(7.11rem, 9.42rem) rotate(28deg);
  }
}
</style>