<template>
  <!-- Main shell body wrapper without horizontal containment traps -->
  <div class="min-h-screen bg-[#F2F1ED] text-brand-dark font-sans flex flex-col justify-between">
    
    <!-- TOP MODULE: Header & Navigation Area containing its own background track -->
    <div class="bg-gradient-to-r from-[#3B000A] to-[#710014] w-full shrink-0">
      <header class="w-full flex justify-between items-center px-8 md:px-14 xl:px-18 py-3 text-[#F2F1ED] relative z-50">
        <!-- Brand Logo Image Anchor (Far Left) -->
        <router-link to="/home" class="cursor-pointer flex items-center">
          <img 
            v-if="!logoFailed && logoSrc" 
            :src="logoSrc" 
            alt="Heart." 
            @error="logoFailed = true"
            class="h-13 md:h-15 w-auto object-contain transition-transform duration-200 hover:scale-105" 
          />
          <span v-else class="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Heart.
          </span>
        </router-link>
        
        <!-- Inline Textual Navigation Layout (Far Right) -->
        <div class="flex items-center gap-8 md:gap-10">
          <nav class="flex gap-6 md:gap-8 text-xs md:text-[13px] font-bold tracking-widest uppercase items-center">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="transition duration-200 pb-1"
              :class="[
                isNavActive(item.path)
                  ? 'text-[#F2F1ED] border-b-2 border-[rgb(179,143,111)]' 
                  : 'text-[#F2F1ED]/60 hover:text-[#F2F1ED]'
              ]"
            >
              {{ item.name }}
            </router-link>
          </nav>

          <!-- DYNAMIC STATUS BADGE -->
          <div :class="[
            'hidden sm:flex items-center gap-2 backdrop-blur-sm border px-4 py-2 rounded-full text-[11px] font-black tracking-widest uppercase',
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

    <!-- MAIN VIEW MOUNTING LAYOUT: Routed with RouterView -->
    <main class="w-full flex-grow bg-[#F2F1ED] relative overflow-hidden">
      <router-view :key="$route.fullPath" />
    </main>

    <!-- Combined Architecture Footer Pipeline -->
    <footer class="w-full bg-[#161616] text-neutral-400 border-t border-black/50 select-none shrink-0">
      
      <!-- MAIN FOOTER: Left and Right Aligned to Viewport Edges -->
      <div class="w-full px-8 md:px-14 xl:px-18 py-9 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs md:text-sm">
        <!-- Left Side: Educational Foundation -->
        <div class="space-y-1 text-left">
          <p class="font-bold tracking-wide text-neutral-300">Bachelor of Science in Computer Engineering</p>
          <p class="text-neutral-500 font-medium">Polytechnic University of the Philippines</p>
        </div>
        
        <!-- Right Side: System Placement Coordinates -->
        <div class="space-y-1 text-left sm:text-right">
          <p class="font-medium text-neutral-300">Based in Philippines</p>
          
          <p class="text-neutral-300 font-mono text-xs flex items-center sm:justify-end gap-2 font-bold tracking-wide">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#34d399]"></span>
            </span>
            System Status: Active
          </p>
        </div>
      </div>

      <!-- SUB FOOTER: Centered Copyright Component Block -->
      <div class="w-full bg-black/40 border-t border-white/[0.03] py-4 px-6 text-center">
        <p class="text-xs text-neutral-500 tracking-wider font-medium">
          © 2026 Samantha Heart S. Matiga. Engineered using Vue 3 &amp; Tailwind.
        </p>
      </div>

    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHired = ref(false)

const logoSrc = ref('/heartlogo.png')
const logoFailed = ref(false)

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Contact', path: '/contact' }
]

// Keeps 'Works' highlighted even when on deep links like /works/barklet
const isNavActive = (path) => {
  if (path === '/works') {
    return route.path.startsWith('/works')
  }
  return route.path === path
}
</script>

<style>
html, body {
  scrollbar-gutter: stable;
  overflow-y: auto;
  height: auto;
  background-color: #161616;
}

/* ==========================================
   1. CUSTOM THEMED SCROLLBAR INTERFACE
   ========================================== */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #710014;
  border-radius: 10px;
  border: 3px solid #710014;
}

::-webkit-scrollbar-thumb:hover {
  background: #9c1329;
}

/* ==========================================
   2. LAYOUT MANAGEMENT
   ========================================== */
main {
  overflow: hidden; 
}
</style>