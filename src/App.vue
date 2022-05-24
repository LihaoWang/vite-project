<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto
  max-width: 1000px

a
  color: #2c3e50;
  text-decoration: none;
  &:hover
    color: black;
    text-decoration: underline;
</style>
