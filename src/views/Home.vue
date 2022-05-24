<template>
  <div v-if="posts" class="main">
    <div class="posts">
      <div v-for="post in posts" :id="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
    <div class="tag-cloud">
      <TagCloud :posts="posts" />
    </div>
  </div>
  <div v-else><Spinner /></div>
</template>

<script setup>
import Spinner from '../components/Spinner.vue'
import SinglePost from '../components/SinglePost.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
const { load, posts, error } = getPosts()
load()
</script>

<style lang="stylus" scoped>
.main
  display flex
  flex-direction row
  align-items flex-start
  justify-content center
  gap 1rem
  font-size 1.2rem
  margin-top 1rem
.posts
  flex 1
.tag-cloud
  flex 0.5
</style>
