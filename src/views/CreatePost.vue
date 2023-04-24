<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text">

      <label>Content:</label>
      <textarea v-model="body" />

      <label>Tag(press Enter to add new tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleTag">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>

      <button>Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "@/firebase/config";

export default {
  name: "CreatePost",
  setup() {
    const router = useRouter();

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleTag = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace('\\s', "")
        tags.value.push(tag.value);
      }
      tag.value = "";
    }

    const handleSubmit = async () => {
      let post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp()
      }
      console.log(post)
      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify(post)
      // });
      const res = projectFirestore.collection('posts').add(post);
      console.log(res);
      router.push({ name: 'home' });
    }

    return { title, body, tag, tags, handleTag, handleSubmit }
  }
}
</script>

<style scoped>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
