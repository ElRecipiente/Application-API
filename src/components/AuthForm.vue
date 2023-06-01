<script setup>
import { ref } from 'vue'
import { store } from './store';

// store.token =  

</script>

<template>
    <form action="" method="POST">
        <label for="username">Identifiant</label>
        <input type="text" name="username" id="username">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password">
        <button>Envoyer</button>
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