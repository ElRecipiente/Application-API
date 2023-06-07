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

<style lang="scss" scoped>
main {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    padding: 80px 0;
    font-size: 12px;

    h1 {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        margin: 1em;
    }

    h2 {
        font-size: 20px;
        font-weight: 400;
        width: 90%;
    }
}
</style>