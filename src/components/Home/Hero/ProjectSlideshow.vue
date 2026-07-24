<template>
  <div class="space-y-4 mt-8">
    <!-- SUBSECTION TERMINAL HEADER -->
    <div>
      <h2 class="text-sm font-black tracking-widest text-[rgb(179,143,111)] uppercase border-b border-white/10 pb-2">
        Featured Projects
      </h2>
    </div>

    <!-- MAIN MONITOR CARD -->
    <div 
      class="p-4 rounded-xl bg-gradient-to-br from-black/10 to-black/25 text-left font-mono border border-white/[0.02] flex flex-col justify-between min-h-[190px] relative overflow-hidden group"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <!-- UPPER CONTROLS & MONITOR HEADER -->
      <div class="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div class="text-[9px] font-black tracking-[0.2em] text-[rgb(179,143,111)] uppercase flex items-center gap-1.5">
          <!-- ACTIVE STATE SYSTEM GLYPH (Emerald Green Glow) -->
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#34d399] animate-pulse"></span>
          PROJECT_MONITOR // 0{{ activeIndex + 1 }}
        </div>
        
        <!-- INTERACTIVE CONTROLS -->
        <div class="flex items-center gap-1 relative z-20">
          <button 
            @click="prevSlide" 
            class="w-5 h-5 rounded border border-white/10 hover:border-[rgb(179,143,111)]/40 hover:bg-white/5 flex items-center justify-center text-xs text-white/50 hover:text-white transition-all cursor-pointer"
          >
            &lt;
          </button>
          <button 
            @click="nextSlide" 
            class="w-5 h-5 rounded border border-white/10 hover:border-[rgb(179,143,111)]/40 hover:bg-white/5 flex items-center justify-center text-xs text-white/50 hover:text-white transition-all cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      <!-- MAIN SLIDE CANVAS LAYER -->
      <div class="space-y-2 flex-grow relative min-h-[90px]">
        <transition 
          enter-active-class="transition duration-300 ease-out transform"
          enter-from-class="opacity-0 translate-x-4"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition duration-200 ease-in transform absolute inset-0"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-4"
        >
          <div :key="activeIndex" class="space-y-2 text-left">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-white tracking-wide uppercase">
                {{ activeProject.name }}
              </h4>
              <span class="text-[8px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[rgb(179,143,111)] uppercase font-bold tracking-widest">
                {{ activeProject.tag }}
              </span>
            </div>
            <p class="text-[11px] text-brand-light/60 leading-relaxed font-light">
              {{ activeProject.description }}
            </p>
          </div>
        </transition>
      </div>

      <!-- LOWER TECH MATRIX FOOTER -->
      <div class="border-t border-white/5 pt-2.5 mt-3 flex items-center justify-between">
        <div class="flex gap-1">
          <!-- DYNAMIC PROGRESS DOT INTERFACES -->
          <span 
            v-for="(project, index) in projects" 
            :key="index"
            class="w-1.5 h-1.5 rounded-full transition-all duration-300"
            :class="index === activeIndex ? 'bg-[rgb(179,143,111)] w-3' : 'bg-white/10'"
          ></span>
        </div>
        
        <!-- FIXED: Swapped <a> for an active action button to stop URL hash append modifications -->
        <button 
          @click="executeView" 
          class="text-[9px] font-bold text-[rgb(179,143,111)] hover:text-white transition-colors tracking-widest uppercase flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
        >
          EXECUTE_VIEW ↗
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['navigate'])

const activeIndex = ref(0)
let slideshowTimer = null

const projects = ref([
  {
    name: 'ECOSENSE System',
    tag: 'IoT // Thesis',
    description: 'An IoT-based advanced composting and alternative biogas monitoring matrix capturing hardware sensory fields cleanly.',
    targetTab: 'Works'
  },
  {
    name: 'Modular UI Engine',
    tag: 'Frontend // Pack',
    description: 'An enterprise-grade component architectural library optimized for rapid web application deployment using Vue.js.',
    targetTab: 'Works'
  },
  {
    name: 'Data System Layer',
    tag: 'Backend // DB',
    description: 'Structured relational query optimization engines and custom API endpoints structured inside PHP Laravel clusters.',
    targetTab: 'Works'
  }
])

const activeProject = computed(() => projects.value[activeIndex.value])

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % projects.value.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + projects.value.length) % projects.value.length
}

const executeView = () => {
  emit('navigate', activeProject.value.targetTab)
}

// AUTOMATIC TICK TIMER INTERFACES
const startTimer = () => {
  clearTimer()
  slideshowTimer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const clearTimer = () => {
  if (slideshowTimer) {
    clearInterval(slideshowTimer)
    slideshowTimer = null
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearTimer()
})
</script>