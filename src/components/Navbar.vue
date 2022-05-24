<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Create' }">Create</router-link>
  </div>
</template>

<style lang="stylus" scoped>
.nav
    display flex
    justify-content center
    align-items center
    gap 1rem
    font-size 1.2rem
</style>
