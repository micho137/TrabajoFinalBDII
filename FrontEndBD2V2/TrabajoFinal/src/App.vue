
<template>
<div class="pl-6 flex  justify-evenly font-bold border-2 py-3 bg-[#207296] text-white"


>
    <router-link to="/Producto">

        Ejemplo productos
    </router-link>
    <router-link to="/">
        inicio
    </router-link>
    <router-link to="/ListaProducto">

        Productos
    </router-link>


    <router-link to="/Carrito">
        Carrito
    </router-link>

    <router-link to="/Login">

        Login
    </router-link>

    <router-link to="/Register">

        Registro
    </router-link>

    
</div>
<router-view/>
</template>
