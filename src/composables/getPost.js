import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      // await new Promise(resolve => {
      //     setTimeout(resolve, 2000)
      // })
      const res = await fetch(`http://localhost:3000/posts/${id}`)
      const data = await res.json()
      post.value = data
    } catch (e) {
      error.value = e
    }
  }

  return { load, post, error }
}

export default getPost
