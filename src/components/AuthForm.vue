<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { store } from './store';
import { useRouter } from "vue-router"

const username = ref('')
const password = ref('')
const router = useRouter()

async function newPost() {

    axios.post('http://localhost:8080/api/auth', {
        username: username.value,
        password: password.value
    })
        .then(response => {
            console.log(response.data)
            if (response.data.message) {
                store.message = response.data.message
            } else {
                store.userID = response.data.id
                console.log(store.userID)
                router.push({ path: "/" })
            }
        })

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
        <button type="submit">Se connecter</button>
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
        padding: 1em;
    }

    button {
        width: 100px;
        align-self: center;
        border: none;
        background-color: green;
        color: white;
        padding: 1em;
        border-radius: 1em;
        margin-top: 2em;
    }
}

@media screen and (min-width: 768px) {
    form {
        width: 50%;
        margin: 0 auto;

        input {
            text-align: left;
            height: 50px;
        }

        button {
            width: 200px;
        }
    }

}
</style>