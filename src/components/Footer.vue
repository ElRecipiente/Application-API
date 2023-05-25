<script setup>

</script>

<template>
    <footer class="footer">

        <a href="#" class="icon"><img src="../assets/img/house-chimney-solid.svg" alt=""></a>
        <a href="#" class="icon"><img src="../assets/img/user-solid.svg" alt=""></a>
        <a href="#" class="icon"><img src="../assets/img/heart-solid.svg" alt=""></a>

    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: black;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 12px black;

    img {
        width: 25px;
    }
}
</style>