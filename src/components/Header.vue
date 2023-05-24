<script setup>
import { ref } from 'vue';

const user = ref({
    firstname: 'Prénom',
    lastname: 'Nom',
    credit: 999
})
</script>

<template>
    <header class="header">
        <img class="logo" src="../assets/img/Logo_OFP.png" alt="Logo">
        <div class="profil">
            <div class="profil_info">
                <p>{{ user.firstname }} {{ user.lastname }}</p>
                <p><span class="bold">{{ user.credit }}</span> Crédits</p>
            </div>
            <img class="profil_pic" src="../assets/img/portrait-300x300.jpg" alt="">
            <img class="exit_door" src="../assets/img/door-open-solid.svg" alt="">
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: #181A3D;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1em;

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