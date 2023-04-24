<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";

export default {
  name: "RealTimeTest",
  setup() {
    const posts = ref([]);

    projectFirestore.collection('posts').orderBy('createdAt').onSnapshot(snap => {
      console.log(snap);
      let docs = snap.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      });
      posts.value = docs;
    });

    return { posts }
  }
}
</script>

<style scoped>

</style>
