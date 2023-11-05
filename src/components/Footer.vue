<script setup>
import { store } from './store';
import { useRouter } from "vue-router"

const router = useRouter()

function goHome() {
    router.push({ path: "/" })
}

function showDetails() {
    router.push({ path: "/details" })
}

</script>

<template>
    <footer class="footer">

        <a @click="goHome()" class="icon"><img src="../assets/img/house-chimney-solid.svg" alt=""></a>
        <a @click="showDetails()" class="icon"><img src="../assets/img/user-solid.svg" alt=""></a>
        <a @click="store.toggleHeart()" v-if="!store.heart" href="#" class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path fill="#FFFFFF"
                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg></a>
        <a @click="store.toggleHeart()" v-else href="#" class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path fill="#FF0000"
                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg></a>

    </footer>
</template>

<style lang="scss" scoped>
.footer {
    z-index: 100;
    background: black;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 12px black;

    img,
    svg {
        width: 25px;
    }

    a {
        padding: 0.5em;
    }
}
</style>