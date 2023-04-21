<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

export default {
  name: "PostDetail",
  components: { Spinner },

  props: ["id"],
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { post, error, load } = getPost(route.params.id);
    load();

    const handleDelete = async () => {
      const res = await projectFirestore.collection('posts').doc(route.params.id).delete();
      console.log(res);
      router.push({name: 'home'});
    }

    return { post, error, load, handleDelete }
  }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>
