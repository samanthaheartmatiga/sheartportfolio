<template>
  <a 
    :href="link" 
    target="_blank" 
    rel="noopener noreferrer"
    class="group relative flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-black/10 to-black/25 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:from-[#161616]/40 hover:to-[#161616]/70 border border-white/[0.02] hover:border-white/[0.05] w-full block shadow-md hover:shadow-xl overflow-hidden"
  >
    <!-- LIGHTWAVE GRADIENT EFFECT: A smooth accent wave that sweeps into view on hover -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none"></div>

    <!-- LEFT LAYER: Hardware Interface Framework Architecture -->
    <div class="flex items-center gap-3 relative z-10">
      
      <!-- MINIMALIST PROFESSIONAL GLYPH ENGINE -->
      <div class="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 group-hover:border-brand-accent/40 group-hover:text-brand-accent group-hover:bg-brand-main/30 group-hover:scale-105">
        
        <!-- GitHub Wireframe -->
        <svg v-if="platform === 'GitHub'" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>

        <!-- LinkedIn Wireframe -->
        <svg v-else-if="platform === 'LinkedIn'" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>

        <!-- Gmail Wireframe -->
        <svg v-else-if="platform === 'Gmail'" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>

        <!-- Facebook Wireframe -->
        <svg v-else-if="platform === 'Facebook'" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>

        <!-- System Core Fallback -->
        <svg v-else class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>

      <!-- TEXT LAYOUT IDENTITY MATRICES -->
      <div class="flex flex-col text-left">
        <!-- Structural Bracket Opening Design Interaction -->
        <span class="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase group-hover:text-brand-accent transition-colors duration-300">
          <span class="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>{{ platform }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
        </span>
        <span class="text-xs text-brand-light/60 tracking-tight transition-colors duration-300 group-hover:text-white font-mono mt-0.5">
          {{ handle }}
        </span>
      </div>
    </div>

    <!-- RIGHT LAYER: Telemetry Link Out Tracker -->
    <div class="flex items-center text-white/20 group-hover:text-brand-accent transition-all duration-300 ease-out transform group-hover:translate-x-0.5">
      <svg 
        class="w-4 h-4" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>

  </a>
</template>

<script setup>
defineProps({
  platform: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>