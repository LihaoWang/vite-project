import { ref } from 'vue';
const getPosts = () => {
    const posts = ref()
    const error = ref(null)

    const load = async()  => {
    try {
        // await new Promise(resolve => {
        //     setTimeout(resolve, 2000)
        // })
        const res = await fetch('http://localhost:3000/posts')
        const data = await res.json()
        posts.value = data
    } catch (e) {
        error.value = e
    }
    }

    return {load, posts, error}
}

export default getPosts