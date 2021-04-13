<template>
  <div class="flex flex-col items-center mx-auto">
    <h1 class="text-2xl my-2 text-center">Reaction Timer</h1>
    <button class="border px-2 rounded-lg text-xl my-2 bg-blue-200" @click="start" :disabled="isPlaying">Play</button>
    <Block v-if='isPlaying' :delay='delay' @end='endGame'/>
    <Result v-if="showResults" :score='score'/>
  </div>
</template>

<script>
import Block from '../components/Block'
import Result from '../components/Result'

export default {
  name: 'App',
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random()*3000;
      this.isPlaying = true;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style scoped>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>