<template>
  <div class="space-y-4 mt-8">
    <!-- SUBSECTION TERMINAL HEADER -->
    <div>
      <h2 class="text-sm font-black tracking-widest text-brand-accent uppercase border-b border-white/10 pb-2">
        Featured Projects
      </h2>
    </div>

    <!-- MAIN MONITOR CARD -->
    <div 
      class="p-4.5 rounded-xl bg-linear-to-br from-black/10 to-black/25 text-left font-mono border border-white/5 flex flex-col justify-between min-h-60 relative overflow-hidden group touch-pan-y select-none"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <!-- UPPER CONTROLS & MONITOR HEADER -->
      <div class="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div class="text-[9px] font-black tracking-[0.2em] text-brand-accent uppercase flex items-center gap-1.5">
          <!-- ACTIVE STATE SYSTEM GLYPH (Emerald Green Glow) -->
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#34d399] animate-pulse"></span>
          PROJECT_MONITOR // 0{{ activeIndex + 1 }}
        </div>
        
        <!-- INTERACTIVE CONTROLS -->
        <div class="flex items-center gap-1 relative z-20">
          <button 
            @click="prevSlide" 
            class="w-5 h-5 rounded border border-white/10 hover:border-brand-accent/40 hover:bg-white/5 flex items-center justify-center text-xs text-white/50 hover:text-white transition-all duration-300 active:scale-90 cursor-pointer"
          >
            &lt;
          </button>
          <button 
            @click="nextSlide" 
            class="w-5 h-5 rounded border border-white/10 hover:border-brand-accent/40 hover:bg-white/5 flex items-center justify-center text-xs text-white/50 hover:text-white transition-all duration-300 active:scale-90 cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      <!-- MAIN SLIDE CANVAS LAYER WITH SMOOTH DIRECTIONAL TRANSITION -->
      <div class="space-y-2 grow relative min-h-30 overflow-hidden flex flex-col justify-center">
        <Transition :name="transitionDirection" mode="out-in">
          <div :key="activeIndex" class="space-y-2.5 text-left w-full will-change-transform">
            <div class="flex items-center justify-between gap-2">
              <h4 class="text-xs font-bold text-white tracking-wide uppercase line-clamp-1">
                {{ activeProject.name }}
              </h4>
              <span class="text-[8px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-brand-accent uppercase font-bold tracking-widest whitespace-nowrap shrink-0">
                {{ activeProject.tag }}
              </span>
            </div>
            <p class="text-[11px] text-brand-light/70 leading-relaxed font-light">
              {{ activeProject.description }}
            </p>
          </div>
        </Transition>
      </div>

      <!-- LOWER TECH MATRIX FOOTER -->
      <div class="border-t border-white/5 pt-2.5 mt-3 flex items-center justify-between">
        <div class="flex gap-1.5 items-center">
          <!-- DYNAMIC PROGRESS PILL INDICATORS -->
          <button 
            v-for="(project, index) in projects" 
            :key="index"
            @click="goToSlide(index)"
            class="h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer p-0 border-none"
            :class="index === activeIndex ? 'bg-brand-accent w-5 shadow-[0_0_8px_rgba(179,143,111,0.5)]' : 'bg-white/15 w-1.5 hover:bg-white/40'"
          ></button>
        </div>
        
        <button 
          @click="executeView" 
          class="text-[9px] font-bold text-brand-accent hover:text-white transition-colors tracking-widest uppercase flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
        >
          EXECUTE_VIEW ↗
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projectsData } from '../../../data/projects'

const emit = defineEmits(['navigate'])

const activeIndex = ref(0)
const transitionDirection = ref('slide-left')
let slideshowTimer = null

// Dynamic data source directly imported from centralized projects data
const projects = computed(() => projectsData)

const activeProject = computed(() => projects.value[activeIndex.value] || {})

const nextSlide = () => {
  if (projects.value.length === 0) return
  transitionDirection.value = 'slide-left'
  activeIndex.value = (activeIndex.value + 1) % projects.value.length
}

const prevSlide = () => {
  if (projects.value.length === 0) return
  transitionDirection.value = 'slide-right'
  activeIndex.value = (activeIndex.value - 1 + projects.value.length) % projects.value.length
}

const goToSlide = (index) => {
  if (index === activeIndex.value) return
  transitionDirection.value = index > activeIndex.value ? 'slide-left' : 'slide-right'
  activeIndex.value = index
}

const executeView = () => {
  emit('navigate', 'Works')
}

// Touch swipe support (Mobile / Trackpad)
let touchStartX = 0
const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const onTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].screenX
  const swipeDistance = touchStartX - touchEndX
  if (swipeDistance > 45) {
    nextSlide()
  } else if (swipeDistance < -45) {
    prevSlide()
  }
}

// Automatic interval timer
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

<style scoped>
/* ==========================================
   SMOOTH DIRECTIONAL SWIPE TRANSITIONS
   ========================================== */

/* SLIDE LEFT (Next) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.42s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.42s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(36px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-36px);
}

/* SLIDE RIGHT (Previous) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.42s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.42s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-36px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(36px);
}
</style>