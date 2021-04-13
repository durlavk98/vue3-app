<template>
  <nav class="w-full text-white px-4 py-2 bg-gradient-to-r from-blue-800 to blue-600">
    <router-link 
    v-for="item in list" 
    :key="item.to" 
    class="px-2" 
    :to="item.to">
    {{item.title}}
    </router-link>
    <button v-if="!isLoggedIn" class="mx-2" @click="openLogin">Login</button>
    <button v-else class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
  
  data() {
    return {
      list: [
        {title:"home", to:"/"},
        {title:"dc Heroes", to:"/dc-heroes"},
        {title:"calender", to:"/calender"},
        {title:"markdown", to:"/markdown"},
        {title:"slider", to:"/slider"},
        {title:"calculator", to:"/calculator"},
        {title:"modal", to:"/modal"},
        {title:"chat", to:"/chat"},
        {title:"crud", to:"/crud"},
        {title:"tensorflow", to:"/tensorflow"},
        {title:"todo", to:"/todo"},
        {title:"weather", to:"/weather"},
        {title:"reaction", to:"/reaction"},
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      firebase
      .auth()
      .signOut()
      //.then((res) => {
        // Sign-out successful.
      //}).catch((error) => {
        // An error happened.
      //});
    },
    openLogin() {
      this.$store.commit('setLoginModal', true);
    }
  }
}
</script>

<style>

</style>