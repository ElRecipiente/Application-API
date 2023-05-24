<script setup>
import { ref } from 'vue';

const title = ref('Bienvenue username !');
const products = ref([
    {
        name: 'Croissant',
        quantity: 20,
        price: 1.99,
        img: './src/assets/img/Croissant.jpeg'
    },
    {
        name: 'Pain au chocolat',
        quantity: 15,
        price: 2.50,
        img: './src/assets/img/pain_chocolat.jpg'
    },
    {
        name: 'Orezza',
        quantity: 25,
        price: 2,
        img: './src/assets/img/orezza.jpg'
    }, {
        name: 'Zilia',
        quantity: 25,
        price: 2,
        img: './src/assets/img/Zilia.png'
    }, {
        name: 'Croissant',
        quantity: 20,
        price: 1.99,
        img: './src/assets/img/Croissant.jpeg'
    },
    {
        name: 'Pain au chocolat',
        quantity: 15,
        price: 2.50,
        img: './src/assets/img/pain_chocolat.jpg'
    },
    {
        name: 'Orezza',
        quantity: 25,
        price: 2,
        img: './src/assets/img/orezza.jpg'
    }, {
        name: 'Zilia',
        quantity: 25,
        price: 2,
        img: './src/assets/img/Zilia.png'
    }])
</script>

<template>
    <section>
        <h1>{{ title }}</h1>
        <h2>Nos pâtisseries</h2>
        <input type="text" name="searchBar" id="searchBar" placeholder="Vous cherchez un produit en particulier ?">
        <article v-for='product in products' :key="product.id">
            <picture><img :src="product.img" alt=""></picture>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <a href="#">Acheter</a>
        </article>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
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
        width: 90%;
        border-radius: 1em;
    }

    article {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        width: 150px;
        height: 150px;
        text-align: center;
        font-size: 12px;
        background: white;
        color: black;
        border-radius: 1em;

        picture {
            max-height: 50%;
            overflow: hidden;

            img {
                width: 100%;
                border-radius: 1em 1em 0 0;
            }
        }

    }
}
</style>