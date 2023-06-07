<script setup>
import axios from 'axios'
import { ref, watch, onMounted } from 'vue'
import { store } from './store'

const srcImg = ref('src/assets/img/')
const articles = ref([])

onMounted(() => {
    axios.get(`http://localhost:8080/api/products?userid=${store.userID}`)
        .then(response => {
            console.log(response)
            store.articles = response.data
            articles.value = store.articles
        })
})

// watch la valeur de l'input SearchBar, et filtre ou non
watch(() => store.inputData, () => {
    if (store.heart) {
        articles.value = store.articles.filter((article) => article.name.toLowerCase().includes(store.inputData.toLowerCase()) && article.favori == 1)
    } else {
        articles.value = store.articles.filter((article) => article.name.toLowerCase().includes(store.inputData.toLowerCase()))
    }
})

// watch si les favoris sont filtré, et filtre ou non
watch(() => store.heart, () => {
    if (store.inputData == '') {
        articles.value = !store.heart ? store.articles
            : store.articles.filter((article) => article.favori == 1)
    } else {
        articles.value = !store.heart ? store.articles.filter((article) => article.name.toLowerCase().includes(store.inputData.toLowerCase()))
            : store.articles.filter((article) => article.name.toLowerCase().includes(store.inputData.toLowerCase()) && article.favori == 1)
    }
})

async function consume(article) {
    axios.get(`http://localhost:8080/api/product/consume?id=${article.id}&userid=${store.userID}`)
        .then(response => article.quantity = response.data.quantity)
}

// method qui permet d'ajouter/retirer un favori onclick
async function changeFavorite(article) {
    axios.get(`http://localhost:8080/api/product/favorite?productid=${article.id}&userid=${store.userID}`)
        .then(response => {
            article.favori = response.data.favori
        })
}

function pushItemInList(article) {
    store.list.push(article)
}

</script>

<template>
    <article v-for='article in articles' :key="article.id">
        <picture><img :src="srcImg + article.img" alt="">

            <!---------- AFFICHE LES FAVORIS ---------------------------------------------------------------->
            <img v-if="article.favori == 1" @click="changeFavorite(article)" class="favorite"
                src="../assets/img/heart-solid-like-red.svg" alt="">

            <!---------- OU PAS ----------------------------------------------------------------------------->
            <img v-else @click="changeFavorite(article)" class="favorite" src="../assets/img/heart-solid-like.svg" alt="">
            <!-- ----------------------------------------------------------------------------------------- -->

        </picture>
        <h3>{{ article.name }}</h3>
        <div>
            <p v-if="article.quantity > 0">{{ article.price }} $</p>
            <p v-else class="red">Rupture</p>
            <button class="button" v-if="article.quantity > 0"
                @click="consume(article), store.increment(), pushItemInList(article)">Acheter</button>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 150px;
    height: 150px;
    text-align: center;
    background: white;
    color: black;
    border-radius: 1em;
    gap: 1em;

    picture {
        position: relative;
        max-height: 50%;
        overflow: hidden;

        img {
            width: 100%;
            border-radius: 1em 1em 0 0;
        }

        .favorite {
            position: absolute;
            width: 20px;
            top: 0.5em;
            right: 0.5em;
        }
    }

    h3 {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;

        .button {
            text-decoration: none;
            border: none;
            background: green;
            color: white;
            padding: 0.5em;
            border-radius: 1em;
        }
    }
}
</style>