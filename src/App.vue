<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import navBar from './components/navBar.vue'
</script>
<template>
  <navBar/>
  <RouterView/>
</template>
<style>
  body {
    background-color: #3cb371;
  }
  #app{
    padding: 0px;
  }
</style>
