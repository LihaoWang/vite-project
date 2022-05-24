<template>
  <div class="form">
    <form
      @submit="handleSubmit"
      :style="{
        display: 'flex',
        flexDirection: 'column',
        width: '350px',
        margin: 'auto',
        gap: '20px',
      }"
    >
      <label>TITLE</label>
      <input type="text" v-model="title" required />
      <label>CONTENT</label>
      <textarea v-model="body" />
      <label>TAGS</label>
      <input
        type="text"
        v-model="tag"
        @keydown.enter.prevent="pushTag"
        required
      />
      <button type="submit">Submit</button>
    </form>
    <div v-for="tag in tags" :key="tag">
      <p>{{ tag }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(title.value, body.value)
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      tags: tags.value,
    }),
  })
  router.push({ name: 'Home' })
}
const pushTag = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, '')
    tags.value.push(tag.value)
  }
  tag.value = ''
  console.log(tags.value)
}
</script>

<style lang="stylus" scoped>
.form
    margin-top: 2rem
input, textarea
    width: 100%
    margin: 0px 0px 10px 0px

input, textarea
    border-radius: 5px
    border: 1px solid #ccc
    padding: 10px
    font-size: 1.2rem
    outline: none
label
    font-size: 1.2rem
    margin: 0px
button
    border: none
    border-radius: 5px
    padding: 0.8em
    font-size: 1.2rem
    outline: none
    cursor: pointer
    margin: auto
</style>
