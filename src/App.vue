<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

* {
  font-family: 'Lato', sans-serif;
  font-size: unset;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
</style>
