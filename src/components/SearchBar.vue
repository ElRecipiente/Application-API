<script setup>
import { ref } from 'vue'
import { store } from './store';

const inputData = ref('')

store.inputData = inputData

function checkData() {
    console.log(store.inputData)
}

checkData();

</script>

<template>
    <input @input="checkData" v-model="inputData" type="text" name="searchBar" id="searchBar"
        placeholder="Vous cherchez un produit en particulier ?">
</template>

<style lang="scss" scoped>
#searchBar {
    text-align: center;
    font-weight: 300;
    height: 30px;
    width: 100%;
    border-radius: 1em;
}
</style>