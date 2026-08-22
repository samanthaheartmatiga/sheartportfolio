<template>
  <!-- Clean layout track without explicit max-width boxes or overflow clipping traps -->
  <div class="w-full min-h-screen select-none text-brand-dark font-mono bg-brand-light flex items-start">
    
    <!-- MAIN SECTION: Full Bleed Deep Wine Red to Crimson Red Gradient Container -->
    <!-- FIXED: Changed items-center to items-start so content remains anchored to the top -->
    <div class="bg-linear-to-r from-[#3B000A] to-brand-main text-brand-light pt-1 pb-4 px-4 md:px-12 relative overflow-hidden w-full min-h-screen flex items-start">
      
      <!-- KINETIC DESIGN LAYER: Subdued Tech Vector Matrix & Alternating Shapes -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <!-- Shape 1: Giant Rotating Tech Diamond Glow Behind Text -->
        <div class="absolute left-[-10%] top-[-10%] w-112.5 h-112.5 bg-linear-to-br from-white/3 to-transparent rotate-45 rounded-3xl border border-white/10 blur-sm animate-[spin_60s_linear_infinite_reverse] scale-75 md:scale-100"></div>

        <!-- Shape 2: Subtly Pulsating Angular Trajectory Vector Lines -->
        <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="-10%" y1="0" x2="50%" y2="100%" stroke="currentColor" stroke-width="1" stroke-dasharray="8 12" class="text-brand-light animate-[pulse_1.5s_ease-in-out_infinite]" />
          <line x1="0" y1="65%" x2="100%" y2="35%" stroke="currentColor" stroke-width="0.75" class="text-brand-light opacity-50" />
        </svg>

        <!-- Shape 3: Concentric Technical Grid & Radar Matrix Layout -->
        <div class="absolute right-[-5%] md:right-[2%] top-[5%] w-137.5 h-137.5 flex items-center justify-center opacity-70 md:opacity-100">
          <div class="w-120 h-120 border border-dashed border-brand-accent/20 rotate-12 animate-[spin_50s_linear_infinite]"></div>
          <div class="absolute w-85 h-85 border-2 border-double border-white/6 rounded-xl rotate-45 animate-[spin_25s_linear_infinite_reverse]"></div>
          <div class="absolute w-50 h-50 border border-dashed border-white/15 rounded-3xl animate-[spin_12s_linear_infinite]"></div>
        </div>

        <!-- Shape 4: REFINED SOLID VS OUTLINE VECTOR ACCENTS -->
        <svg class="absolute left-[6%] bottom-[12%] w-12 h-12 text-brand-accent/35 drop-shadow-[0_0_8px_rgba(179,143,111,0.3)] animate-[pulse_2s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        <!-- Dynamic design element matching the shared accent language -->
        <svg class="absolute left-[8%] top-[25%] w-9 h-9 text-white/15 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <!-- OVERLAY DETAILS & BLINKING SHAPES -->
        <div class="absolute left-[3%] top-[15%] text-white/5 text-5xl font-light tracking-tighter hidden md:block select-none">[//]</div>
        <div class="absolute right-[2%] bottom-[8%] text-brand-accent/10 text-6xl font-extralight hidden md:block select-none">&lt;/&gt;</div>
        <div class="absolute left-0 right-0 top-[22%] border-b border-white/5 border-dashed"></div>
        <div class="absolute left-0 right-0 bottom-[30%] border-b border-brand-accent/5 border-dashed"></div>
        <div class="absolute left-[5%] top-[8%] text-brand-accent/40 text-xl font-bold animate-[pulse_0.8s_infinite_alternate] select-none">+</div>
        <div class="absolute right-[38%] top-[14%] w-1.5 h-1.5 bg-brand-accent/50 rounded-full animate-[pulse_3s_infinite]"></div>
        <div class="absolute right-[48%] bottom-[24%] w-4 h-4 border border-white/20 rounded-full animate-ping opacity-25"></div>
        <div class="absolute right-[47.5%] bottom-[24.5%] w-2 h-2 border border-brand-accent/40 rounded-full animate-[pulse_1s_infinite_0.3s]"></div>
        <div class="absolute right-[12%] bottom-[42%] text-white/20 text-sm font-light tracking-widest animate-[pulse_1.4s_infinite_alternate] select-none">×</div>
        <div class="absolute left-[5%] bottom-[32%] w-2.5 h-2.5 border border-white/30 animate-[pulse_1.8s_infinite_0.6s]"></div>
        <div class="absolute left-[20%] top-[35%] w-3 h-3 border border-white/50 rotate-45 animate-ping opacity-40"></div>
        <div class="absolute left-[38%] bottom-[18%] w-2 h-2 bg-white rotate-12 shadow-[0_0_15px_4px_rgba(255,255,255,0.7)] animate-pulse"></div>
        <div class="absolute right-[8%] bottom-[25%] w-3 h-3 border border-brand-accent shadow-[0_0_10px_rgba(179,143,111,0.5)] rotate-45 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
      </div>

      <!-- WORKSPACES TRANSITION ENVELOPE PLATFORM -->
      <div class="max-w-none w-full mx-auto relative z-10 py-12 px-2 md:px-6">
        
        <!-- Combined dynamic page router transition using the shared system entrance presets -->
        <Transition 
          mode="out-in"
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <!-- VIEW STATE 1: Display Primary Works Grid Layout Matrix -->
          <WorksGrid 
            v-if="currentView === 'grid'" 
            @select-project="openProjectWorkspace" 
          />

          <!-- VIEW STATE 2: Deep Link Single Project Workspace Template -->
          <ProjectDetailsTemplate 
            v-else 
            :projectId="currentView" 
            @close="closeProjectWorkspace" 
          />
        </Transition>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import WorksGrid from './MyWorks/WorksGrid.vue'
import ProjectDetailsTemplate from './MyWorks/ProjectDetailsTemplate.vue'

// Tracks the view state. Default state is 'grid', otherwise holds the project ID string
const currentView = ref('grid')

// Transitions forward to show a project template layout
const openProjectWorkspace = (projectId) => {
  currentView.value = projectId
  
  // Forces the browser viewport window to instantly snap to the absolute top anchor line
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
}

// Resets view state to return to the project grid view matrix
const closeProjectWorkspace = () => {
  currentView.value = 'grid'
  
  // Ensures you return to the top header baseline when going back to the grid
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
}
</script>