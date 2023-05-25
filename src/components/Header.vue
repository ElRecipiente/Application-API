<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

onMounted(() => {
    const id = 3;
    axios.get(`http://localhost:8080/api/users?id=${id}`)
        .then(response => user.value = response.data)
})

const user = ref([])
</script>

<template>
    <header class="header">
        <img class="logo" src="../assets/img/Logo_OFP.png" alt="Logo">
        <div class="profil">
            <div class="profil_info">
                <p>{{ user.username }}</p>
                <p>Crédits : <span class="bold">{{ user.budget }} $</span></p>
            </div>
            <img class="profil_pic" src="../assets/img/portrait-300x300.jpg" alt="">
            <img class="exit_door" src="../assets/img/door-open-solid.svg" alt="">
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: black;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1em;
    box-shadow: 0 0 12px black;

    .logo {
        width: 50px;
    }

    .profil {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;

        .profil_pic {
            width: 40px;
            border-radius: 50%;
        }

        .profil_info {
            font-size: 12px;
            font-weight: 400;
            text-align: center;
        }

        .exit_door {
            width: 25px;
        }
    }
}
</style>