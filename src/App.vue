<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { store } from './components/store';
</script>

<template>
  <h3 v-if="store.message !== ''" class="error">
    {{ store.message }}
  </h3>
  <Header v-if="store.userID !== null" />
  <RouterView />
  <Footer v-if="store.userID !== null" />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

* {
  font-family: 'Lato', sans-serif;
  font-size: unset;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background: #181A3D;
  color: white;
}

.bold {
  font-weight: 700;
}

.red {
  color: red;
}

a,
button {
  cursor: pointer;
}

.error {
  background-color: red;
  color: white;
  text-align: center;
  padding: 0.5em;
}

main {
  width: 95%;
  margin: 0 auto;
  padding: 80px 0;
  font-size: 12px;

  #container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    margin: 2em auto 0;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 1em;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin: 0.5em 0;
  }
}

@media screen and (min-width: 768px) {
  main {
    padding: 120px 0;
    font-size: 16px;

    #container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (min-width: 1024px) {
  main {

    #container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (min-width: 1440px) {
  main {

    #container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}

@media screen and (min-width: 1920px) {
  main {

    #container {
      grid-template-columns: repeat(7, 1fr);
    }
  }
}
</style>
