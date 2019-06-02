import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppLayout from '../views/layouts/AppLayout'

export const routerMap = [

    {
        path: '/',
        name: 'Root',
        component: AppLayout,
    },
    {
        path: '/hello',
        component: AppLayout,
        name: 'Hello',
        children: [
            {
                path: '/hello',
                name: 'Hello',
                component: () => import('@/views/hello/Hello'),
                meta: { title: 'Hello' }
            },

            {
                path: '/projects',
                name: 'Projects',
                component: () => import('@/views/projects/Projects'),
                meta: { title: 'Projects' }
            },

            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/About'),
                meta: { title: 'About' }
            },

            {
                path: '/contact',
                name: 'Contact',
                component: () => import('@/views/contact/Contact'),
                meta: { title: 'Contact' }
            }
        ]
    }
]

export default new Router({
    routes: routerMap,
    mode: 'history'
})