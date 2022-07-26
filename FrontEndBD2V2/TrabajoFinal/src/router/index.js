import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Carrito from '../components/Carrito.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/Carrito',
			component: Carrito
		}

	
	],
})

export default router