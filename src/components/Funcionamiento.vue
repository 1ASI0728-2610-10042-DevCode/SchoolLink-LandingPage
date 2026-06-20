<template>
  <section id="funcionamiento" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title text-center mb-12 fade-up" ref="titleRef">{{ t('funcionamiento.titulo') }}</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <!--Video-->
        <div class="fade-up lg:col-span-2" ref="videoRef">
          <video controls class="rounded-xl">
            <source :src="video" type="video/mp4">
          </video>
        </div>

        <!-- Feature list -->
        <div class="space-y-6 h-full flex flex-col justify-center fade-up bg-[#00A9A5]/10 p-6 rounded-xl" ref="featRef">
          <div
            v-for="(item, i) in tm('funcionamiento.items')"
            :key="i"
            class="flex gap-5 items-start"
          >
            <img :src="icons[i]" class="w-7 h-7 object-contain mt-1"/>
            <p class="text-[#1A2B44] leading-relaxed text-sm">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import IconTablet from '../assets/Icons/Icon_tablet.png'
import IconChat from '../assets/Icons/Icon_chat.png'
import IconNoti from '../assets/Icons/Icon_noti.png'
import video from '../assets/Videos/About The Product.mp4'

const { t, tm } = useI18n()
const titleRef = ref(null)
const videoRef = ref(null)
const featRef = ref(null)

const icons = [IconTablet, IconChat, IconNoti]

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.15 })
  ;[titleRef, videoRef, featRef].forEach(r => { if (r.value) obs.observe(r.value) })
})
</script>