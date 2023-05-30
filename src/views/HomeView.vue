<script setup>
import Products from '../components/Products.vue'
import SearchBar from '../components/SearchBar.vue';
import { ref } from 'vue'

const title = ref('Bienvenue sur Online Free Pâtisserie !')
const title2 = ref('Nos pâtisseries et boissons')
</script>

<template>
    <main>

        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>
        <SearchBar />
        <!-- <Product v-for="p in products" :name="p.name"/> -->
        <Products />

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