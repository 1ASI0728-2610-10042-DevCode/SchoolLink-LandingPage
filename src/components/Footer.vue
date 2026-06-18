<template>
  <footer class="bg-slate-800 text-slate-300 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-1 flex items-center gap-2 text-white font-display mb-3 pr-3">
          <img :src="logo" class="h-16"/>
          <div>
            <p class="font-bold text-2xl">SchoolLink</p>
            <p class="text-sm text-slate-400 leading-relaxed">{{ t('footer.tagline') }}</p>
          </div>
        </div>


        <!-- Links -->
        <div class="col-span-1">
          <h4 class="text-white font-semibold font-display text-sm mb-4 text-start lg:text-end pl-8">{{ t('footer.enlaces') }}</h4>
          <ul class="space-y-2 text-sm text-start lg:text-end pl-8">
            <li v-for="key in navKeys" :key="key">
              <a :href="`#${key}`" class="hover:text-white transition-colors duration-150">
                {{ t(`nav.${key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="col-span-1">
          <h4 class="text-white font-semibold font-display text-sm mb-4 text-start lg:text-end pr-8">{{ t('footer.legal') }}</h4>
          <ul class="space-y-2 text-sm text-start lg:text-end pr-8">
            <li><a href="#" class="hover:text-white transition-colors duration-150">{{ t('footer.privacidad') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-150">{{ t('footer.terminos') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors duration-150">{{ t('footer.soporte') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-6 text-center text-sm text-slate-500">
        {{ t('footer.copy') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import logo from '../assets/logo_blanco.png'

const { t } = useI18n()
const navKeys = ['inicio', 'soluciones', 'funcionamiento', 'nosotros', 'contacto']
</script>