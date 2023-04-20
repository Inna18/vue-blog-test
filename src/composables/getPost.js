import { ref } from "vue";

const getPost = (id) => {
  const post = ref();
  const error = ref();
  
  const load = async () => {
    try {
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000);
      // });
      
      const data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw Error("no such post");
      }
      post.value = await data.json();
      console.log(post.value)
    } catch (err) {
      error.value = err.message;
    }
  }
  
  return { post, error, load }
}

export default getPost;
