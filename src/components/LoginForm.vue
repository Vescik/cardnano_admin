<script setup lang="ts">
import useLogin from "@/composable/useLogin"
import { ref } from 'vue';
const username = ref('')
const password = ref('')
const emit = defineEmits(['login'])

const handleSubmit = async () => {
        await login(username.value, password.value)
        if(!error.value){
            emit('login')
        }
    }

const { login,error } = useLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="E-mail" type="text" id="username" name="username" />
    <input v-model="password" placeholder="Hasło" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button  type="submit">Zaloguj</button>
  </form>
</template>
<style scoped>
  /* Apply McDonald's color scheme */
  body {
    background-color: #f5f5f5;
  }
  
  form {
    background-color: #f8f8f8;
    padding: 20px;
    border: 2px solid #f96302;
    border-radius: 5px;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #f96302;
    border-radius: 5px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }

  input[type="text"]::placeholder,
  input[type="password"]::placeholder {
    color: #999;
  }

  button[type="submit"] {
    background-color: #f96302;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #e85600;
  }

  div {
    color: #f96302;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>