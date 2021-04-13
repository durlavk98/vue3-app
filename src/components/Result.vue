<template>
  <div>Reaction Time: {{score}}</div>
  <p class="rank">{{rank}}</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Global Elite'
    } else if (this.score < 400) {
      this.rank = 'Gold Nova'
    } else {
      this.rank = 'Silver'
    }
  }
}
</script>

<style>
.rank {
    font-size: 1.5em;
    color: #0faf87;
    font-weight: bold;
  }
</style>