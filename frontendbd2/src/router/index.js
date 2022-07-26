import { createRouter, createWebHistory } from 'vue-router'
import hola from '../components/hola.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: hola
		},
	],
})

export default router