<template>
  <div class="min-h-screen">
    <HeaderNav />
    <main>
      <Hero />
      <Solucion />
      <Funcionamiento />
      <Nosotros />
      <Contacto />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import Hero from './components/Hero.vue'
import Solucion from './components/Solucion.vue'
import Funcionamiento from './components/Funcionamiento.vue'
import Nosotros from './components/Nosotros.vue'
import Contacto from './components/Contacto.vue'
import Footer from './components/Footer.vue'
</script>
