<template>
  <div class="flex w-full flex-wrap relative">
    <div class="absolute w-full" v-for="(color,index) in sliders" :key="color">
      <transition name="fade">
      <div v-if="currentSlide==index" :class="color" style="height: 350px"></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div v-for="(item,index) in sliders" :key="item" 
        :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'" 
        @click="makeActive(index)" 
        class="w-4 h-4 mx-2 rounded-full shadow-md"></div>
      </div>
    </div>
    <!--<div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
        <h1 v-if="isTitleShowing">Slider Corousel</h1>
        </transition>
        <button @click="isTitleShowing = !isTitleShowing" class="px-2 border rounded">Toggle text</button>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ['bg-blue-500','bg-green-500','bg-yellow-500'],
      interval: '',
      isTitleShowing: true,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide+1;
    }, 1500);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);  
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>