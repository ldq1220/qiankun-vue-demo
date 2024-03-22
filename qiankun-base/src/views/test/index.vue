<template>
    <h1 class="test">主应用</h1>
    <!-- <router-link to="/vue-app">Go to 子应用</router-link> -->
    <!-- <el-button @click="push('/vue-app')">展示子应用</el-button> -->
    <router-link to="/vue-app"><el-button>展示子应用</el-button></router-link>
    <router-link to="/test"><el-button>隐藏子应用</el-button></router-link>
    <div id="vue-app"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
