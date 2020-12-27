<template>
<button class="px-2 py-1 my-4 border rounded" @click="isModalOpen=true">Add User</button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen=false">
        <template #title> <h1 class="text-center text-2xl">Add New User</h1> </template>
        <template #body>

          <form @submit.prevent="submit">
            <div class="p-2">
              <label for="">Name</label>
              <input class="w-full p-2 rounded border" 
              type="text" 
              placeholder="User Name" 
              v-model="state.form.name" />
            </div>
            <div class="p-2">
              <label for="">Email</label>
              <input class="w-full p-2 rounded border" 
              type="email" 
              placeholder="User Email"
              v-model="state.form.email" />
            </div>
            <div class="p-2">
              <label for="">Avatar</label>
              <input class="w-full p-2 rounded border"
              type="text" 
              placeholder="Avatar url"
              v-model="state.form.avatar" />
            </div>
            <div class="p-2">
              <input class="w-full p-2 rounded border" type="submit" value="Create" />
            </div>
          </form>
        </template>
      </Modal>
  </teleport>
</template>

<script>
import Modal from '../Modal';
import axios from '../../plugins/axios';
import { reactive, ref } from 'vue';
export default {
  components: {Modal},
  setup(_, {emit}) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: ""
      },
    })

    async function submit() {
      const {data} = await axios.post("/users",state.form);
      emit('new-user-added',data);
      
      state.form.email = "",
      state.form.name = "",
      state.form.avatar = "",
      isModalOpen.value = false;
    }

    return { isModalOpen, submit, state };
  }
}
</script>

<style>

</style>