<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
export default {
  name: "PostList",
  components: { SinglePost },

  props: ["posts"]
}
</script>

<style scoped>

</style>
