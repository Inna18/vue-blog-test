import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetail from "@/views/PostDetail";
import CreatePost from "@/views/CreatePost";
import Tag from "@/views/Tag";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'detail',
    component: PostDetail,
    props: true
  },
  {
    path: '/posts/create',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: Tag
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
