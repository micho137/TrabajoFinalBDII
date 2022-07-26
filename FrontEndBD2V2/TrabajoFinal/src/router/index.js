import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Carrito from '../components/Carrito.vue'
import Producto from '../components/Producto.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ListaProducto from'../components/ListaProducto.vue'
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
		},
		{

			path: '/Producto',
			component: Producto
		},
		{

			path:'/Login',
			component: Login
		},
		{

			path:'/Register',
			component: Register
		},
		{

			path:'/ListaProducto',
			component: ListaProducto
		}



	
	],
})

export default router