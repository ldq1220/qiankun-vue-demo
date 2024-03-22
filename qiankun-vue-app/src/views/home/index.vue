<template>
    <hr />
    <h1 class="test">我是子应用home页面</h1>
    <router-link to="/test">test</router-link>
    <router-link to="/about">About</router-link>

    <router-view />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.test {
    font-size: 38px;
    margin: 30px 0;
}
</style>
