<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-2 font-display text-[#64748B] text-lg">
        <img :src="logoColor" width="50"/>
        SchoolLink
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-7 text-sm font-medium text-[#64748B]">
        <li v-for="item in navItems" :key="item.key">
          <a :href="`#${item.key}`" class="hover:text-[#00A9A5] transition-colors duration-150 cursor-pointer">
            {{ t(`nav.${item.key}`) }}
          </a>
        </li>
      </ul>

      <!-- Language + Mobile -->
      <div class="flex items-center gap-3">
        <!-- Language switcher -->
        <button @click="toggleLocale" class="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#00A9A5] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="1.5"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke-width="1.5"/>
          </svg>
        </button>

        <!-- Mobile menu button -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 items-center">
          <span class="block w-5 h-0.5 bg-[#64748B] transition-all duration-200" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-5 h-0.5 bg-[#64748B] transition-all duration-200" :class="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-0.5 bg-[#64748B] transition-all duration-200" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
        <ul class="flex flex-col divide-y divide-gray-50">
          <li v-for="item in navItems" :key="item.key">
            <a
              :href="`#${item.key}`"
              class="block px-6 py-4 text-right text-[#64748B] font-medium hover:text-[#00A9A5] hover:bg-brand-light transition-colors"
              @click="mobileOpen = false"
            >
              {{ t(`nav.${item.key}`) }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import logoColor from '../assets/logo_color.png'

const { t, locale } = useI18n()
const mobileOpen = ref(false)

const navItems = [
  { key: 'inicio' },
  { key: 'soluciones' },
  { key: 'funcionamiento' },
  { key: 'nosotros' },
  { key: 'contacto' },
]

function toggleLocale() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>