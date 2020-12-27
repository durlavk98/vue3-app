<template>
<div v-if="isLoginOpen">
  <section 
  @click="close"
  class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-60">

  </section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="w-full text-center text-2xl">Login</h1>
          <GoogleLogin @close-login-from-google="close" />
          <p class="text-center">or</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-2">
              <label for="email">Email or Username</label>
              <input ref="emailRef" v-model="email" type="text" class="rounded shadow p-2 w-full border" />
            </div>
            <div class="my-2">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="rounded shadow p-2 w-full border" />
            </div>
            <div class="my-2">
              <button type="submit" class="rounded shadow-md p-2 w-full border bg-gradient-to-r from-green-200 to-blue-200">
                <span v-if="!isLoading">Login</span>
                <span v-else>⏳</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import firebase from '../utilities/firebase'
import GoogleLogin from './Login/GoogleLogin'
export default {
  components: {GoogleLogin},
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
  data() {
    return {
        email: 'test@test.com',
        password: 'password',
        isLoading: false,
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.email = '',
        this.password = '',
        this.isLoading = false;
        this.close();
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
  mounted() {
    //this.$refs.emailRef.focus();
  }
}
</script>

<style>

</style>