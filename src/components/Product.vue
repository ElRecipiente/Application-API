<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

onMounted(() => {
    axios.get('http://localhost:8080/api/products')
        .then(response => articles.value = response.data)
})

async function consume(article) {

    let userid = 3;

    axios.get(`http://localhost:8080/api/product/consume?id=${article.id}&userid=${userid}`)
        .then(response => {

            console.log(response)
            article.quantity = response.data.quantity

        })
}

const title = ref('Bienvenue sur Online Free Pâtisserie !')
const title2 = ref('Nos pâtisseries et boissons')
const srcImg = ref('src/assets/img/')
const articles = ref([])



</script>


<template>
    <section>
        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>
        <input type="text" name="searchBar" id="searchBar" placeholder="Vous cherchez un produit en particulier ?">
        <article v-for='article in articles' :key="article.id">
            <picture><img :src="srcImg + article.img" alt=""></picture>
            <h3>{{ article.name }}</h3>
            <div>
                <p v-if="article.quantity > 0">{{ article.price }} $</p>
                <p v-else class="red">Rupture</p>
                <button class="button" v-if="article.quantity > 0" @click="consume(article)">Acheter</button>
            </div>

        </article>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    padding: 80px 0;

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

    input {
        font-size: 12px;
        text-align: center;
        font-weight: 300;
        height: 30px;
        width: 100%;
        border-radius: 1em;

    }

    article {
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: center;
        width: 150px;
        height: 150px;
        text-align: center;
        font-size: 12px;
        background: white;
        color: black;
        border-radius: 1em;
        gap: 1em;

        picture {
            max-height: 50%;
            overflow: hidden;

            img {
                width: 100%;
                border-radius: 1em 1em 0 0;
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
                background: #181a3dde;
                color: white;
                padding: 0.5em;

                border-radius: 1em;

            }
        }


    }
}
</style>