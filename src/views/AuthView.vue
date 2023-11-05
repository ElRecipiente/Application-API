<script setup>
import { ref } from 'vue'
import AuthForm from '../components/AuthForm.vue';

const title = ref('Bienvenue sur Online Free Pâtisserie !')
const title2 = ref('Connexion')
</script>

<template>
    <main>

        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>
        <AuthForm />


    </main>
</template>

<style lang="scss" scoped></style>