<template>
  <div class="group relative bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-6 pt-4 pb-6 transition-all duration-500 hover:bg-[#161616] hover:border-[#710014]/40 hover:shadow-[0_20px_40px_-15px_rgba(113,0,20,0.2)] text-left overflow-hidden flex flex-col justify-between min-h-[200px]">
    
    <!-- HIGH-TECH DECORATIVE ACCENTS: Only visible on component hover -->
    <!-- Vector Corner Crosshair Brackets -->
    <div class="absolute top-3 left-3 w-2 h-2 border-t border-l border-[rgb(179,143,111)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[rgb(179,143,111)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <!-- Background Radial Vector Pulse Glow -->
    <div class="absolute right-[-20%] top-[-20%] w-32 h-32 bg-[radial-gradient(circle,rgba(179,143,111,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-md"></div>

    <!-- UPPER CARD CORE LAYER -->
    <div class="space-y-4 relative z-10">
      
      <!-- DYNAMIC DOCK SYSTEM ICON FRAMES (Swapped from emojis to responsive industrial tech SVGs) -->
      <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-[#710014]/5 text-[#710014] border border-[#710014]/10 transition-all duration-500 group-hover:bg-[rgb(179,143,111)]/10 group-hover:text-[rgb(179,143,111)] group-hover:border-[rgb(179,143,111)]/30">
        
        <!-- Icon Option A: Frontend Layout Grid Core Matrix Symbol -->
        <svg v-if="icon === '📎'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M3 9h18" />
        </svg>

        <!-- Icon Option B: Mobile Smartphone Device Blueprint Node -->
        <svg v-else-if="icon === '📱'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>

        <!-- Icon Option C: Server Database Relational Array Layer -->
        <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      </div>

      <!-- TEXTUAL MATRIX -->
      <!-- CHANGED: Swapped 'font-sans' out for 'font-mono' to lock in your project standard code styling -->
      <h3 class="text-base font-bold tracking-tight text-[#161616] group-hover:text-[#F2F1ED] transition-colors duration-300 font-mono">
        {{ title }}
      </h3>
      
      <p class="text-xs text-neutral-600 group-hover:text-[#F2F1ED]/70 transition-colors duration-300 font-light leading-relaxed font-mono">
        {{ description }}
      </p>
    </div>

    <!-- LOWER CARD MATRIX DETAILS: Subtle decorative system tracking line -->
    <div class="w-full pt-4 mt-2 relative z-10 flex items-center justify-between text-[9px] font-mono tracking-wider text-neutral-400 group-hover:text-[rgb(179,143,111)]/50 transition-colors duration-300 uppercase">
      <span>SYS_CAP.0{{ icon === '📎' ? '1' : icon === '📱' ? '2' : '3' }}</span>
      <span class="w-8 h-[1px] bg-[#EAE6DF] group-hover:bg-[rgb(179,143,111)]/20 transition-colors duration-300"></span>
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