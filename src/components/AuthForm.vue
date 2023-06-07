<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { store } from './store';

const username = ref('')
const password = ref('')

async function newPost() {
    axios.post('http://localhost:8080/api/auth', {
        username: username,
        password: password
    })
        .then(response => { console.log(response) })
        .catch(function (error) {
            console.log(error);
        });
}

</script>

<template>
    <form @submit.prevent="newPost()">
        <label for="username">Identifiant</label>
        <input type="text" v-model="username" name="username" id="username">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" name="password" id="password">
        <button type="submit">Envoyer</button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    gap: 1em;

    input {
        text-align: center;
        font-weight: 300;
        height: 30px;
        width: 100%;
        border-radius: 1em;
    }

    button {
        width: 100px;
        align-self: center;
    }
}
</style>