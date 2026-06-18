<template>
  <section id="contacto" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left text -->
        <div class="fade-up text-center lg:text-start lg:pr-2" ref="textRef">
          <h2 class="section-title">{{ t('contacto.titulo') }}</h2>
          <p class="mt-4 text-gray-500 leading-relaxed">{{ t('contacto.subtitulo') }}</p>
        </div>

        <!-- Form -->
        <div class="fade-up" ref="formRef">
          <div class="bg-brand-light rounded-2xl p-6 sm:p-8">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5 font-display">
                  {{ t('contacto.nombre') }}
                </label>
                <input
                  v-model="form.nombre"
                  type="text"
                  required
                  class="w-full rounded-lg border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5 font-display">
                  {{ t('contacto.correo') }}
                </label>
                <input
                  v-model="form.correo"
                  type="email"
                  required
                  class="w-full rounded-lg border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5 font-display">
                  {{ t('contacto.mensaje') }}
                </label>
                <textarea
                  v-model="form.mensaje"
                  rows="4"
                  required
                  class="w-full rounded-lg border border-gray-900 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="sent"
                class="w-full btn-primary py-3.5 text-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span v-if="!sent">{{ t('contacto.enviar') }}</span>
                <span v-else>✓ Mensaje enviado</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const textRef = ref(null)
const formRef = ref(null)
const sent = ref(false)

const form = reactive({ nombre: '', correo: '', mensaje: '' })

function handleSubmit() {
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.nombre = ''
    form.correo = ''
    form.mensaje = ''
  }, 3000)
}

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.15 })
  ;[textRef, formRef].forEach(r => { if (r.value) obs.observe(r.value) })
})
</script>