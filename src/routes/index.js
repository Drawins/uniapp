import {createRouter,createWebHistory}from 'vue-router'

import landingpage from "./../components/landingpage.vue"
import aboutus from "./../components/aboutus.vue"
import signup from "./../components/signup.vue"
import login from "./../components/login.vue"
import register from "./../components/register.vue"




const routes =[
    {
        path:'/',
        name:'landingpage',
        component: landingpage,
    },
    {
        path:'/about',
        name:'about',
        component: aboutus,
    },
    {
        path:'/signup',
        name:'signup',
        component: signup,
    },
    {
        path:'/login',
        name:'login',
        component: login,
    },
    {
        path:'/register',
        name:'register',
        component: register,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router 