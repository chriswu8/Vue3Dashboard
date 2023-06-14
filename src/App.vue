<template>
  <div id="app">
    <div :class="containerClass">
      <router-link v-if="showSignupLink" :to="{ name: 'signupForm' }" class="signup-link" :disabled="isSignupFormActive" @click="hideSignupLink">Sign Up</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import SignupForm from './views/SignupForm.vue';

export default {
  name: 'App',
  components: {
    RouterLink,
    SignupForm
  },
  data() {
    return {
      showSignupLink: true,
    };
  },
  computed: {
    containerClass() {
      return {
        container: this.$route.name !== 'signupForm' 
      };
    },
    isSignupFormActive() {
      return this.$route.name === 'signupForm'; 
    }
  },
  methods: {
    hideSignupLink() {
      this.showSignupLink = false;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  ;
  min-height: 100vh;
}

body {
  margin: 0;
  background: #eee;
}


.signup-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #312b6d;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.signup-link:hover {
  background-color: #0b135a;
}

.signup-link:disabled {
  opacity: 0;
  cursor: not-allowed;
}
</style>
