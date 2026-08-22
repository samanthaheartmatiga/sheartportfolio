<template>
  <div class="w-full select-none text-brand-dark font-mono">
    
    <!-- TOP SECTION: Wine Red Header Framework -->
    <div class="bg-linear-to-r from-[#3B000A] to-brand-main text-brand-light pt-14 pb-16 px-6 md:px-12 lg:px-16 border-b border-brand-main relative overflow-hidden w-full min-h-[540px] lg:min-h-[580px] flex items-center shrink-0">
      
      <!-- KINETIC DESIGN LAYER: Tech Vectors & Geometric Accents -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div class="absolute left-[-10%] top-[-10%] w-125 h-125 bg-linear-to-br from-white/3 to-transparent rotate-45 rounded-3xl border border-white/10 blur-sm animate-[spin_60s_linear_infinite_reverse] scale-75 md:scale-100"></div>

        <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="-10%" y1="0" x2="50%" y2="100%" stroke="currentColor" stroke-width="1" stroke-dasharray="8 12" class="text-brand-light animate-[pulse_1.5s_ease-in-out_infinite]" />
          <line x1="0" y1="65%" x2="100%" y2="35%" stroke="currentColor" stroke-width="0.75" class="text-brand-light opacity-50" />
        </svg>

        <div class="absolute right-[2%] top-[5%] w-145 h-145 flex items-center justify-center">
          <div class="w-130 h-130 border border-dashed border-brand-accent/20 rotate-12 animate-[spin_50s_linear_infinite]"></div>
          <div class="absolute w-95 h-95 border-2 border-double border-white/6 rounded-xl rotate-45 animate-[spin_25s_linear_infinite_reverse]"></div>
          <div class="absolute w-55 h-55 border border-dashed border-white/15 rounded-3xl animate-[spin_12s_linear_infinite]"></div>
        </div>

        <svg class="absolute left-[6%] bottom-[12%] w-14 h-14 text-brand-accent/35 drop-shadow-[0_0_8px_rgba(179,143,111,0.3)] animate-[pulse_2s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        <svg class="absolute right-[45%] top-[10%] w-12 h-12 text-white/15 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <div class="absolute left-[20%] top-[25%] w-3.5 h-3.5 border border-white/50 rotate-45 animate-ping opacity-40"></div>
        <div class="absolute left-[45%] bottom-[20%] w-2.5 h-2.5 bg-white rotate-12 shadow-[0_0_15px_4px_rgba(255,255,255,0.7)] animate-pulse"></div>
        <div class="absolute right-[35%] bottom-[15%] w-3.5 h-3.5 border border-brand-accent shadow-[0_0_10px_rgba(179,143,111,0.5)] rotate-45 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
      </div>
      
      <!-- AMBIENT LIGHT ENGINE MATRIX -->
      <div class="absolute right-[-5%] bottom-[-25%] w-160 h-160 bg-[radial-gradient(circle,rgba(179,143,111,0.28)_0%,transparent_65%)] pointer-events-none blur-3xl animate-[pulse_4.5s_ease-in-out_infinite]"></div>
      <div class="absolute left-[-10%] top-[-10%] w-135 h-135 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl animate-[pulse_3.5s_ease-in-out_infinite]"></div>
      <div class="absolute right-[30%] top-[-25%] w-120 h-120 bg-[radial-gradient(circle,rgba(113,0,20,0.5)_0%,transparent_65%)] pointer-events-none blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>

      <!-- MAIN ABOUT HEADER CONTENT -->
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center justify-between relative z-10 w-full">
        
        <!-- Left Column: Title & Circular Portrait -->
        <div class="lg:col-span-4 flex flex-col items-center lg:items-start text-left space-y-3">
          <h1 class="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-brand-light pl-2">
            About Me.
          </h1>

          <div class="relative group mt-1">
            <!-- Background Radial Glow -->
            <div class="absolute -inset-2 rounded-full bg-linear-to-tr from-brand-accent/30 via-transparent to-brand-main/60 blur-md opacity-85 group-hover:opacity-100 transition duration-700 animate-[pulse_2.5s_ease-in-out_infinite] z-0"></div>

            <!-- Balanced Circular Frame -->
            <div class="w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full overflow-hidden border-2 border-brand-accent/60 shadow-[0_20px_45px_rgba(0,0,0,0.6)] bg-brand-dark/40 relative flex items-center justify-center z-10">
              <img 
                v-if="!imageFailed && profileImageSrc" 
                :src="profileImageSrc" 
                alt="Samantha Heart - Portrait" 
                @error="imageFailed = true"
                class="w-full h-full object-cover object-[50%_15%] select-none group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <span v-else class="text-3xl font-black text-brand-light/10 select-none tracking-widest uppercase">PORTRAIT</span>
            </div>

            <!-- Bottom-Right Script Tag -->
            <span class="absolute bottom-2 right-4 text-3xl md:text-4xl font-serif italic text-brand-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] select-none z-20 pointer-events-none">
              Heart.
            </span>
          </div>
        </div>

        <!-- Right Column: Metadata Badge & Justified Narrative with Adjusted Line-Height -->
        <div class="lg:col-span-8 space-y-5 text-left relative w-full">
          <div class="flex items-center gap-2.5 text-xs font-bold tracking-widest text-brand-accent uppercase border border-brand-accent/20 rounded-md px-3.5 py-1.5 bg-brand-dark/40 backdrop-blur-sm w-fit">
            <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="tracking-widest">V1.0 // INITIALIZE</span>
          </div>

          <!-- Scaled Justified Typography -->
          <div class="space-y-5 text-sm sm:text-base md:text-[16.5px] lg:text-[17.5px] text-brand-light/90 leading-loose md:leading-[1.85] font-light font-mono text-justify hyphens-none">
            <p>
              I am a Computer Engineering graduate from the Polytechnic University of the Philippines and a full-stack web developer with a strong focus on UI/UX design, modular frontend engineering, and data-driven web experiences. My technical foundation centers on building end-to-end web applications, crafting polished interfaces, building reusable UI component libraries, and designing intuitive web platforms using modern tools like Vue.js and Tailwind CSS.
            </p>
            <p>
              While my core passion revolves around Data-Driven UI/UX, Frontend Systems, and Data Visualization, my full-stack background and engineering training give me the adaptability to solve diverse technical challenges. I am fully open to exploring a wide range of developer roles (whether in full-stack, frontend, QA testing, or general software development) and I bring a structured, detail-oriented engineering mindset to every project.
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- BOTTOM SECTION: 3-Column Split Content Architecture -->
    <div class="w-full bg-brand-light border-b border-black/10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch w-full">
        
        <!-- COLUMN 1: Credentials & Education -->
        <div ref="educationSection" class="lg:col-span-4 transform transition-all duration-700 ease-out opacity-0 translate-y-8 border-b lg:border-b-0 lg:border-r border-black/10">
          <EducationColumn />
        </div>

        <!-- COLUMN 2: Professional Experience -->
        <div ref="experienceSection" class="lg:col-span-4 transform transition-all duration-700 ease-out opacity-0 translate-y-8 border-b lg:border-b-0 lg:border-r border-black/10">
          <ExperienceColumn />
        </div>

        <!-- COLUMN 3: Technical Stacks Matrix -->
        <div ref="matrixSection" class="lg:col-span-4 transform transition-all duration-700 ease-out opacity-0 translate-y-8">
          <StacksMatrix />
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import EducationColumn from './AboutMe/EducationColumn.vue'
import ExperienceColumn from './AboutMe/ExperienceColumn.vue'
import StacksMatrix from './AboutMe/StacksMatrix.vue'

defineEmits(['navigate'])

const profileImageSrc = ref('/about.png')
const imageFailed = ref(false)

const educationSection = ref(null)
const experienceSection = ref(null)
const matrixSection = ref(null)

let observer = null

onMounted(async () => {
  await nextTick()

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8')
        entry.target.classList.add('opacity-100', 'translate-y-0')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  if (educationSection.value) observer.observe(educationSection.value)
  if (experienceSection.value) observer.observe(experienceSection.value)
  if (matrixSection.value) observer.observe(matrixSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@keyframes terminalTyping {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes terminalCursor {
  0%, 99% { border-color: var(--color-brand-accent); }
  50% { border-color: transparent; }
  100% { border-color: transparent; }
}

.animate-typing {
  display: inline-block;
  animation: 
    terminalTyping 0.9s cubic-bezier(0.4, 0, 0.2, 1) both,
    terminalCursor 0.22s step-end 1 alternate forwards;
}
</style>