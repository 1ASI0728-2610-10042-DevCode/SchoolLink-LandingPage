<template>
  <section id="soluciones" class="py-20 bg-[#F4F7F9]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12 fade-up" ref="headerRef">
        <h2 class="section-title">{{ t('soluciones.titulo') }}</h2>
        <p class="section-subtitle">{{ t('soluciones.subtitulo') }}</p>

        <div class="flex justify-center mt-8 gap-8">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="handleTabChange(tab)"
            class="pb-3 text-sm font-semibold font-display transition-colors duration-200 border-b-2 -mb-px"
            :class="activeTab === tab
              ? 'text-[#00A9A5] border-[#00A9A5]'
              : 'text-gray-400 border-transparent hover:text-gray-600'"
          >
            {{ t(`soluciones.${tab}`) }}
          </button>
        </div>
      </div>

      <Transition name="tab-fade" mode="out-in">
        <div :key="activeTab" class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="(card, i) in currentCards"
            :key="card.titulo"
            class="card fade-up"
            :ref="el => setCardRef(el, i)"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <div class="w-10 h-10 rounded-xl bg-[#00A9A5] flex items-center justify-center mb-4">
              <!--<component :is="card.icon" class="w-5 h-5" />-->
              <img :src="card.icon" class="w-5 h-5 object-contain"/>
            </div>
            <h3 class="font-semibold text-gray-900 font-display text-base mb-2">{{ card.titulo }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import IconControl from '../assets/Icons/Icon_control.png'
import IconRegistro from '../assets/Icons/Icon_registro.png'
import IconPanel from '../assets/Icons/Icon_panel.png'
import IconRobot from '../assets/Icons/Icon_robot.png'
import IconIntervencion from '../assets/Icons/Icon_intervencion.png'
import IconLupa from '../assets/Icons/Icon_lupa.png'

const { t, locale } = useI18n()

watch(locale, async () => {
  cardRefs.value = []

  await nextTick()

  observeCards()
})

const activeTab = ref('tabProfesor')
const tabs = ['tabProfesor', 'tabPadre']
const headerRef = ref(null)
const cardRefs = ref([])

const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value[index] = el
  }
}

const profesorCards = computed(() => [
  { titulo: t('soluciones.profesor.panel.titulo'), desc: t('soluciones.profesor.panel.desc'), icon: IconPanel },
  { titulo: t('soluciones.profesor.registro.titulo'), desc: t('soluciones.profesor.registro.desc'), icon: IconRegistro },
  { titulo: t('soluciones.profesor.actividades.titulo'), desc: t('soluciones.profesor.actividades.desc'), icon: IconControl },
  { titulo: t('soluciones.profesor.intervencion.titulo'), desc: t('soluciones.profesor.intervencion.desc'), icon: IconRobot },
])

const padreCards = computed(() => [
  { titulo: t('soluciones.padre.asistente.titulo'), desc: t('soluciones.padre.asistente.desc'), icon: IconRobot },
  { titulo: t('soluciones.padre.alertas.titulo'), desc: t('soluciones.padre.alertas.desc'), icon: IconControl },
  { titulo: t('soluciones.padre.comunicacion.titulo'), desc: t('soluciones.padre.comunicacion.desc'), icon: IconIntervencion },
  { titulo: t('soluciones.padre.historial.titulo'), desc: t('soluciones.padre.historial.desc'), icon: IconLupa },
])

const currentCards = computed(() =>
  activeTab.value === 'tabProfesor' ? profesorCards.value : padreCards.value
)

let cardsObserver = null

function observeCards() {
  if (cardsObserver) cardsObserver.disconnect()

  cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
      }
    })
  }, { threshold: 0.05 })

  cardRefs.value.forEach(el => {
    if (el) cardsObserver.observe(el)
  })
}

async function handleTabChange(tab) {
  activeTab.value = tab
  cardRefs.value = []
  
  await nextTick()
  setTimeout(observeCards, 250)
}

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  
  if (headerRef.value) obs.observe(headerRef.value)
  setTimeout(observeCards, 150)
})
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>