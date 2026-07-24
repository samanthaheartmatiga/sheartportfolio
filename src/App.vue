<template>
  <!-- Main shell body wrapper without horizontal containment traps -->
  <div class="min-h-screen bg-[#F2F1ED] text-brand-dark font-sans flex flex-col justify-between">
    
    <!-- TOP MODULE: Header & Navigation Area containing its own background track -->
    <div class="bg-gradient-to-r from-[#3B000A] to-[#710014] w-full shrink-0">
      <header class="flex justify-between items-center w-full px-6 md:px-16 py-3.5 text-[#F2F1ED] relative z-50">
        <!-- Brand Logo Image Anchor -->
        <div class="cursor-pointer flex items-center" @click="currentTab = 'Home'">
          <img 
            v-if="!logoFailed && logoSrc" 
            :src="logoSrc" 
            alt="Heart." 
            @error="logoFailed = true"
            class="h-8 w-auto object-contain" 
          />
          <span v-else class="text-2xl font-serif font-bold tracking-tight">
            Heart.
          </span>
        </div>
        
        <!-- Inline Textual Navigation Layout -->
        <div class="flex items-center gap-8">
          <nav class="flex gap-8 text-xs font-bold tracking-widest uppercase items-center">
            <button v-for="tab in ['Home', 'About', 'Works', 'Contact']" :key="tab"
                    @click="currentTab = tab"
                    :class="[
                      currentTab === tab 
                        ? 'text-[#F2F1ED] border-b-2 border-[rgb(179,143,111)] pb-1' 
                        : 'text-[#F2F1ED]/60 hover:text-[#F2F1ED] transition duration-200 pb-1 cursor-pointer'
                    ]">
              {{ tab }}
            </button>
          </nav>

          <!-- DYNAMIC STATUS BADGE -->
          <div :class="[
            'hidden sm:flex items-center gap-2 backdrop-blur-sm border px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase',
            isHired 
              ? 'bg-blue-500/10 border-blue-400/30 text-blue-300' 
              : 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
          ]">
            <span class="relative flex h-2 w-2">
              <span :class="[
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                isHired ? 'bg-blue-400' : 'bg-emerald-400'
              ]"></span>
              <span :class="[
                'relative inline-flex rounded-full h-2 w-2',
                isHired ? 'bg-blue-500' : 'bg-emerald-500'
              ]"></span>
            </span>
            <span>{{ isHired ? 'Working Active' : 'Open to Opportunities' }}</span>
          </div>
        </div>
      </header>
    </div>

    <!-- MAIN VIEW MOUNTING LAYOUT: Switched to instantaneous tracking display wrapper -->
    <main class="w-full flex-grow bg-[#F2F1ED] relative overflow-hidden">
      <component :is="tabs[currentTab]" @navigate="handleTabNavigation" :key="currentTab" />
    </main>

    <!-- Combined Architecture Footer Pipeline -->
    <footer class="w-full bg-[#161616] text-neutral-400 border-t border-black/50 select-none shrink-0">
      
      <!-- MAIN FOOTER: Split Academic & Regional Info Layout -->
      <div class="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
        <!-- Left Side: Educational Foundation -->
        <div class="space-y-1 text-left">
          <p class="font-bold tracking-wide text-neutral-300">Bachelor of Science in Computer Engineering</p>
          <p class="text-neutral-500 font-medium">Polytechnic University of the Philippines</p>
        </div>
        
        <!-- Right Side: System Placement Coordinates -->
        <div class="space-y-1 text-left sm:text-right">
          <p class="font-medium text-neutral-300">Based in Philippines</p>
          
          <p class="text-neutral-300 font-mono text-[11px] flex items-center sm:justify-end gap-1.5 font-bold tracking-wide">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_#34d399]"></span>
            </span>
            System Status: Active
          </p>
        </div>
      </div>

      <!-- SUB FOOTER: Centered Copyright Component Block -->
      <div class="w-full bg-black/40 border-t border-white/[0.03] py-4 px-6 text-center">
        <p class="text-[11px] text-neutral-600 tracking-wider font-medium">
          © 2026 Samantha Heart S. Matiga. Engineered using Vue 3 & Tailwind.
        </p>
      </div>

    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomeTab from './components/Home/HomeTab.vue'
import WorksTab from './components/Works/WorksTab.vue'
import AboutTab from './components/About/AboutTab.vue'
import ContactTab from './components/Contact/ContactTab.vue'

const currentTab = ref('Home')
const isHired = ref(false)

const logoSrc = ref('/src/assets/logo.png')
const logoFailed = ref(false)

const tabs = {
  Home: HomeTab,
  Works: WorksTab,
  About: AboutTab,
  Contact: ContactTab
}

const handleTabNavigation = (targetTab) => {
  currentTab.value = targetTab
  window.scrollTo({ top: 0, behavior: 'auto' })
}

// URL parameter trailing anchor hash scrub station
onMounted(() => {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
})
</script>

<style>
html, body {
  /* Locks right-hand scroll layout coordinates steadily so elements never bounce left/right */
  scrollbar-gutter: stable;
  overflow-y: auto;
  height: auto;
  background-color: #161616; /* Prevents visual white tracking breaks on bounce/load */
}

/* ==========================================
   1. CUSTOM THEMED SCROLLBAR INTERFACE
   ========================================== */
/* Total width of the scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

/* Scrollbar Track (Background) */
::-webkit-scrollbar-track {
  background: #000000; /* Matches the dark architectural color profile */
}

/* Scrollbar Handle (Pill Element) */
::-webkit-scrollbar-thumb {
  background: #710014; /* Signature Deep Wine Brand color */
  border-radius: 10px;
  border: 3px solid #710014; /* Creates a clean floating/inset illusion */
}

/* Scrollbar Handle on Hover state */
::-webkit-scrollbar-thumb:hover {
  background: #9c1329; /* Interactive state shift for tactile feedback */
}

/* ==========================================
   2. LAYOUT MANAGEMENT
   ========================================== */
main {
  /* Suppresses layout boundary bleed */
  overflow: hidden; 
}
</style>