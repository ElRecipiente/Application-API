<script setup>
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { store } from './store'

onMounted(() => {
    const id = store.userID;
    axios.get(`http://localhost:8080/api/users?id=${id}`)
        .then(response => user.value = response.data)
})

const user = ref([])
const menu = ref(false)
const notification = ref(false)

// Watcher qui regarde si la valeur de count change
watch(() => store.count, async () => {
    const id = store.userID;
    axios.get(`http://localhost:8080/api/users?id=${id}`)
        .then(response => {
            user.value = response.data
            console.log('Crédits actualisés')
        })
    //si il n'y a pas de notif, on en met une
    if (!notification.value) {
        notification.value = !notification.value
    }
})

//function qui affiche ou non le menu
function toggleMenu() {
    menu.value = !menu.value
}

// function pour supprimer les notifs et remettre count à 0
function killNotification() {
    if (notification.value) {
        notification.value = !notification.value
        store.count = 0
    }
}


</script>

<template>
    <header class="header">
        <img class="logo" src="../assets/img/Logo_OFP.png" alt="Logo">
        <div class="profil">
            <div class="profil_info">
                <p>{{ user.username }}</p>
                <p>Crédits : <span class="bold">{{ user.budget }} $</span></p>
            </div>
            <picture>
                <img @click="toggleMenu()" class="profil_pic" src="../assets/img/portrait-300x300.jpg"
                    alt="your profil picture">
                <div class="notification" v-if="notification"></div>

            </picture>
            <div class="menu" v-if="menu">
                <p class="notif_achat" v-if="notification" @click="killNotification()">Vous avez acheté {{ store.count }}
                    articles. Cliquez pour fermer.</p>
                <p class="notif_achat" v-else>Pas de notifications.</p>
                <a class="red" href="">Déconnexion</a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    z-index: 100;
    background: black;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1em;
    box-shadow: 0 0 12px black;
    font-size: 12px;

    .logo {
        width: 50px;
    }

    .profil {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        gap: 1em;

        picture {
            position: relative;

            .profil_pic {
                width: 40px;
                border-radius: 50%;
            }

            .notification {
                position: absolute;
                background-color: red;
                border-radius: 50%;
                width: 10px;
                height: 10px;
                top: 0;
                right: 0;
            }
        }

        .menu {
            display: flex;
            flex-flow: column;
            gap: 1em;
            position: absolute;
            right: 1em;
            top: 110%;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 1em;
            padding: 1em;
            width: 100px;
            text-align: center;

            &>* {
                text-align: start;
            }
        }

        .profil_info {
            font-weight: 400;
            text-align: center;
        }

        .exit_door {
            width: 25px;
        }
    }
}
</style>