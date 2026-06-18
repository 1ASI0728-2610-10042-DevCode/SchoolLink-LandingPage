<template>
  <section id="inicio" class="min-h-screen pt-16 flex items-center bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:text-start text-center">

        <!-- Text -->
        <div class="fade-up" ref="textRef">
          <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight font-display">
            {{ t('hero.titulo') }}
          </h1>
          <p class="mt-5 text-gray-500 text-lg leading-relaxed font-light lg:mx-0 mx-3">
            {{ t('hero.subtitulo') }}
          </p>
          <img :src="portada" class="block lg:hidden border-2 border-[#00A9A5] rounded-lg shadow-lg mt-8 order-1"/>
          <a href="#contacto" class="btn-primary inline-block mt-8 text-sm order-2 lg:order-1">
            {{ t('hero.cta') }}
          </a>
        </div>

        <!-- Image -->
        <img :src="portada" class="hidden lg:block border-2 border-[#00A9A5] rounded-lg shadow-lg"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import portada from '../assets/portada.jpeg'

const { t } = useI18n()
const textRef = ref(null)
const imgRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  if (textRef.value) observer.observe(textRef.value)
  if (imgRef.value) observer.observe(imgRef.value)
})
</script>