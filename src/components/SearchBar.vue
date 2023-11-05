<script setup>
import { ref } from 'vue'
import { store } from './store';

const inputData = ref('')

store.inputData = inputData

</script>

<template>
    <div class="search">
        <input @input="checkData" v-model="inputData" type="text" name="searchBar" id="searchBar"
            placeholder="Vous cherchez un produit en particulier ?">
    </div>
</template>

<style lang="scss" scoped>
.search {
    display: flex;
    align-items: center;
    justify-content: center;

    #searchBar {
        text-align: center;
        font-weight: 300;
        height: 30px;
        width: 100%;
        border-radius: 1em;
        padding: 1em;
        margin: 1em;
    }
}


@media screen and (min-width: 768px) {
    .search {


        #searchBar {
            width: 50%;
        }
    }

}
</style>