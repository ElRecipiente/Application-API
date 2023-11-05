<script setup>
import { ref } from 'vue'
import Details from '../components/Details.vue';

const title = ref('Historique')
const title2 = ref('Détails des derniers achats :')
</script>

<template>
    <main>

        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>
        <Details />


    </main>
</template>

<style lang="scss" scoped></style>