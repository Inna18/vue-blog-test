import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPost = (id) => {
  const post = ref();
  const error = ref();
  
  const load = async () => {
    try {
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000);
      // });
      
      // const data = await fetch(`http://localhost:3000/posts/${id}`);
      // if (!data.ok) {
      //   throw Error("no such post");
      // }
      // post.value = await data.json();
      // console.log(post.value)
      const res = await projectFirestore.collection('posts').doc(id).get();
      console.log(res);
      if (!res.exists) {
        throw Error("Post doesn't exist");
      }
      post.value = {...res.data(), id: res.id};
      
      console.log(post.value)
    } catch (err) {
      error.value = err.message;
    }
  }
  
  return { post, error, load }
}

export default getPost;
