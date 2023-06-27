<template>
  <form @submit.prevent="handleSubmit">
    <input placeholder="Podaj adres email" v-model="email" type="text" name="email" />
    <input placeholder="Podaj nazwę użytkownika" v-model="displayName" type="text" name="email" />
    <input placeholder="Hasło" v-model="password" type="password" id="password" name="password" />
    <div>{{ error }}</div>
    <button type="submit">Zarejestruj</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useSignup from '@/composable/useSignup'
const username = ref('')
const email = ref('')
const password = ref('')
const displayName = ref('')
const emit = defineEmits(['signup'])

const { signup, error } = useSignup()

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    emit('signup')
  }
}

</script>

<style lang="scss" scoped>
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