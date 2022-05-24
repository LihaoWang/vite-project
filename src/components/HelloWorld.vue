<template>
  <div v-if="posts.length">
    <div v-for="post in posts" :id="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import SinglePost from './SinglePost.vue';
import getPosts from '../composables/getPosts'
const {load, posts, error} = getPosts()
load()
</script>

<style  scoped>

</style>