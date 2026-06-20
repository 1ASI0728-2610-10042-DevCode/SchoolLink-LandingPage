<template>
  <section id="nosotros" class="py-20 bg-[#F4F7F9]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="fade-up" ref="titleRef">
        <h2 class="section-title">{{ t("nosotros.titulo") }}</h2>
        <p class="section-subtitle max-w-2xl mx-auto mt-3">
          {{ t("nosotros.subtitulo") }}
        </p>
      </div>

      <!-- Video -->
      <div
        class="mt-10 rounded-2xl overflow-hidden shadow-xl fade-up md:mx-20"
        ref="photoRef"
      >
        <video controls class="rounded-2xl">
          <source :src="video" type="video/mp4" />
        </video>
      </div>

      <!-- Team members -->
      <div
        class="mt-10 flex flex-wrap justify-center gap-8 lg:gap-12 fade-up"
        ref="membersRef"
      >
        <div
          v-for="(member, i) in tm('nosotros.miembros')"
          :key="i"
          class="flex flex-col items-center gap-2"
        >
          <div
            class="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-[#1A2B44] shadow-lg flex items-center justify-center overflow-hidden"
          >
            <img :src="members[i]" />
          </div>
          <span class="text-xs text-[#1A2B44] font-medium font-display">{{
            member
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import video from "../assets/Videos/DevCode - About the team.mp4";
import member1 from "../assets/Members/member_1.png";
import member2 from "../assets/Members/member_2.png";
import member3 from "../assets/Members/member_3.png";
import member4 from "../assets/Members/member_4.png";
import member5 from "../assets/Members/member_5.png";

const { t, tm } = useI18n();
const titleRef = ref(null);
const photoRef = ref(null);
const membersRef = ref(null);
const members = [member1, member2, member3, member4, member5];

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.15 },
  );
  [titleRef, photoRef, membersRef].forEach((r) => {
    if (r.value) obs.observe(r.value);
  });
});
</script>
