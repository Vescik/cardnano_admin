<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
  const showLogin = ref(true)
  const route = useRouter()

  const handleLogin = () => {
    route.push({name: 'AdminPanel'})
  }

</script> 
<template>
  <main>
    <div class="login_container">
  <div v-if="showLogin" >
    <h2>Zaloguj</h2>
    <LoginForm @login="handleLogin" />
    <p>Nie posiadasz konta?<a @click="showLogin = false">Zarejestruj się</a></p>
  </div>
  <div v-else>
    <h2>Zarejestruj</h2>
    <SignupForm @signup="handleLogin" />
    <p>Posiadasz konto?<a @click="showLogin = true">Zaloguj się</a></p>
  </div>
</div>
  </main>

</template>
<style scoped>
.login_container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #f96302;
    border-radius: 5px;
  }

  .login_container h2 {
    color: #f96302;
    font-size: 24px;
    text-align: center;
  }

  .login_container p {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }

  .login_container a {
    color: #f96302;
    text-decoration: none;
  }

  .login_container a:hover {
    text-decoration: underline;
  }
</style>
