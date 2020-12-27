<template>
  <div class="m-auto">
      <h1 class="text-center">This is the home page</h1>
  </div>
</template>

<script>
export default {
  date() {
    return {
      store: this.$store.state,
    }
  },
}
</script>

<style>

</style>