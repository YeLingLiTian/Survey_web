import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import register from "../views/register";
import actiongo from "../views/actiongo";
import survey from "../views/survey";
import surveymodel from "../views/surveymodel";
import result from "../views/result";
import test from "../views/test";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'/actiongo',
      name:'actiongo',
      component: actiongo,
    },{
      path:'/survey',
      name:'survey',
      component:survey,
    },{
      path:'/surveymodel',
      name:'surveymodel',
      component:surveymodel,
    },{
      path:'/result',
      name:'result',
      component:result,
    },],redirect:actiongo,
  },
  {path: '/login',
    name: 'login',
    component: Login
}
,{path: '/register',
    name: 'register',
    component: register
  },
  {path: '/test',
    name: 'test',
    component: test,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
