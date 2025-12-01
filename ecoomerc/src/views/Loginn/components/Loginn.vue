<template>
  <div class="login">
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = async () => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/login', {
            email: email.value,
            password: password.value
        });
        alert(res.data.message);
    } catch (err) {
        alert(err.response.data.message || 'Login failed');
    }
}
</script>
