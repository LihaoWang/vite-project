<template>
  <div v-if="posts">
    <div v-for="post in filteredPosts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script setup>
import getPosts from '../composables/getPosts'
import SinglePost from '../components/SinglePost.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
import Spinner from '../components/Spinner.vue'
const route = useRoute()
const { load, posts, error } = getPosts()

load()

const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.tags.includes(route.params.tag.toLowerCase())
  })
})
</script>

<style scoped></style>
