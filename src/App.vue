<template>
  <Appheader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import firebase from './utilities/firebase'
import Appheader from './components/Appheader.vue'
import LoginModal from './components/LoginModal.vue'
//import DcHeroes from './components/DcHeroes.vue'
//import Calender from './components/Calender.vue'
export default {
  components: { Appheader, LoginModal},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true);
        this.$store.commit('setAuthUser', user);
      } else {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setAuthUser', {});
      }
    });
  }
}
</script>

<style>

</style>