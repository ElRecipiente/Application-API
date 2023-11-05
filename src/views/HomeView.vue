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

<style lang="scss" scoped></style>