<template>
  <div class="group relative w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-2xl p-5 md:p-6 transition-all duration-500 hover:bg-[#161616] hover:border-[#710014]/40 hover:shadow-[0_25px_50px_-12px_rgba(113,0,20,0.25)] text-left overflow-hidden flex flex-col justify-between min-h-[230px]">
    
    <!-- HIGH-TECH DECORATIVE ACCENTS -->
    <div class="absolute top-3.5 left-3.5 w-2.5 h-2.5 border-t border-l border-[rgb(179,143,111)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="absolute bottom-3.5 right-3.5 w-2.5 h-2.5 border-b border-r border-[rgb(179,143,111)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <!-- Background Radial Vector Pulse Glow -->
    <div class="absolute right-[-20%] top-[-20%] w-40 h-40 bg-[radial-gradient(circle,rgba(179,143,111,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-md"></div>

    <!-- UPPER CARD CORE LAYER -->
    <div class="space-y-4 relative z-10">
      
      <!-- DYNAMIC DOCK SYSTEM ICON FRAMES -->
      <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-[#710014]/5 text-[#710014] border border-[#710014]/10 transition-all duration-500 group-hover:bg-[rgb(179,143,111)]/10 group-hover:text-[rgb(179,143,111)] group-hover:border-[rgb(179,143,111)]/30">
        
        <!-- Icon Option A -->
        <svg v-if="icon === '📎'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M3 9h18" />
        </svg>

        <!-- Icon Option B -->
        <svg v-else-if="icon === '📱'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>

        <!-- Icon Option C -->
        <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      </div>

      <!-- TEXTUAL MATRIX -->
      <div class="space-y-1.5">
        <!-- Title Font Size: Reduced -->
        <h3 class="text-sm md:text-base font-bold tracking-tight text-[#161616] group-hover:text-[#F2F1ED] transition-colors duration-300 font-mono">
          {{ title }}
        </h3>
        
        <!-- Description Font Size: Reduced -->
        <p class="text-xs md:text-[13px] text-neutral-600 group-hover:text-[#F2F1ED]/75 transition-colors duration-300 font-light leading-relaxed font-mono">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- LOWER CARD MATRIX DETAILS -->
    <div class="w-full pt-4 mt-3 relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-400 group-hover:text-[rgb(179,143,111)]/60 transition-colors duration-300 uppercase border-t border-[#EAE6DF]/60 group-hover:border-[rgb(179,143,111)]/20">
      <span>SYS_CAP.0{{ icon === '📎' ? '1' : icon === '📱' ? '2' : '3' }}</span>
      <span class="w-10 h-[1px] bg-[#EAE6DF] group-hover:bg-[rgb(179,143,111)]/30 transition-colors duration-300"></span>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>