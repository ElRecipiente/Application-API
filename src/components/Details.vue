<script setup>
import { store } from './store'

const list = store.list

</script>

<template>
    <ul class="list">
        <li class="item" v-for="item in list">
            <p>Nom : {{ item.name }}</p>
            <p>Prix : {{ item.price }}$</p>
            <br>
        </li>
    </ul>
</template>

<style lang="scss">
ul {
    li {
        list-style: none;
    }
}
</style>