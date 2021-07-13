import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
const routes = [
  {
    path: '/', //path
    name: 'Home', //name of the route
    component: Home // file want to run 
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //ridirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchALL
  //404 Error
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  }
  //(.*) -> regular expression
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//createRouter(): function that create routes for vue app.
//createWebHistory(): method that allow us to use histrory mode in the browser.
//Process.env.BASE_URL: base url of the project
export default router
