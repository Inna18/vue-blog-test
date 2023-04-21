<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="filteredPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import TagCloud from "@/components/TagCloud";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Tag",
  components: {TagCloud, Spinner, PostList },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag));
    });

    return { posts, error, filteredPosts }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
