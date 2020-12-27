<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-usable Modal</h1>
      <Modal v-if="isRedModalOpen" @close='isRedModalOpen = false'>
        <template #title><h1 class="text-red-500">Red Modal </h1></template>
        <template #body>This is Body</template>
      </Modal>
      <button class="border text-white rounded px-2 mx-4 bg-red-500" @click="isRedModalOpen=true">Red Modal</button>
      <Modal v-if="isBlueModalOpen" @close='isBlueModalOpen = false'>
        <template #title><h1 class="text-blue-500">Blue Modal </h1></template>
        <template #body>This is Body</template>
      </Modal>
      <button class="border text-white rounded px-2 mx-4 bg-blue-500" @click="isBlueModalOpen=true">Blue Modal</button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
export default {
  components: {Modal},
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);


    return { isRedModalOpen, isBlueModalOpen };
  }
}
</script>
<style>

</style>