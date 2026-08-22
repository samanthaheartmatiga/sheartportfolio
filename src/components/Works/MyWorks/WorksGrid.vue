<template>
  <div class="w-full max-w-none mx-auto font-mono text-brand-light">
    
    <!-- Tab Section Header -->
    <div class="mb-12 text-left">
      <div class="inline-block relative">
        <h1 
          style="width: 0;"
          class="text-4xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif text-brand-light leading-none whitespace-nowrap overflow-hidden border-r-4 border-brand-accent pr-1 animate-typing"
        >
          My Works
        </h1>
      </div>
      <p class="text-xs sm:text-sm text-neutral-300/80 max-w-md mt-4 leading-relaxed uppercase tracking-wider">
        A collection of solutions, systems, and experiences built with purpose and precision.
      </p>
    </div>

    <!-- Category Filter Matrix -->
    <div class="flex flex-wrap gap-2.5 mb-10 select-none justify-start">
      <button 
        @click="activeCategory = 'ALL'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'ALL' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        ALL
      </button>
      <button 
        @click="activeCategory = 'FULL-STACK & WEB'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'FULL-STACK & WEB' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        FULL-STACK & WEB
      </button>
      <button 
        @click="activeCategory = 'DATA & ANALYTICS'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'DATA & ANALYTICS' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        DATA & ANALYTICS
      </button>
      <button 
        @click="activeCategory = 'UI/UX & PROTOTYPES'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'UI/UX & PROTOTYPES' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        UI/UX & PROTOTYPES
      </button>
    </div>

    <!-- Persistent Height Layout Envelope Layer -->
    <div class="w-full min-h-112.5">
      
      <!-- Works Grid Matrix Layout -->
      <div 
        v-if="filteredCardsCount > 0" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        <!-- CARD 1: Clientora (FULL-STACK & WEB, UI/UX & PROTOTYPES) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'UI/UX & PROTOTYPES'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/clientora.png" alt="Clientora" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">FULL-STACK</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">UI/UX</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">Clientora</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">A collaborative management platform built to help teams organize clients, track deliverable progress, and handle financial workflows effortlessly.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'clientora')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 2: PhiMAPix (FULL-STACK & WEB, DATA & ANALYTICS) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/phimapix.png" alt="PhiMAPix" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">DATA & ANALYTICS</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">WEB</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">PhiMAPix</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">An interactive geospatial dashboard built to process and visualize real-time atmospheric telemetry across Philippine regions for environmental analysis.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'phimapix')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 3: DepEd Analytics (DATA & ANALYTICS, FULL-STACK & WEB) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/deped-analytics.png" alt="DepEd Enrollment Analytics Dashboard" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">DATA & ANALYTICS</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">REACT</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">DepEd Enrollment Analytics Dashboard</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">A real time analytics dashboard and data workflow solution designed to transform manual reporting into actionable visual insights for Philippine education policy planning.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'analytics')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 4: Exploratory Data Analysis (DATA & ANALYTICS) -->
        <div 
          v-if="['ALL', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/exploratory.png" alt="Exploratory Data Analysis" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">DATA & ANALYTICS</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">PYTHON</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">Exploratory Data Analysis</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">An exploratory data analysis designed to uncover demographic and socio-economic determinants of passenger survival during the 1912 Titanic disaster, transforming raw historical manifests into actionable statistical insights.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'exploratory')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 5: Heart's Mini Corner (FULL-STACK & WEB, UI/UX & PROTOTYPES) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'UI/UX & PROTOTYPES'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/myflask.png" alt="Heart's Mini Corner" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">FLASK</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">PORTAL</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">Heart's Mini Corner</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">An interactive Flask-powered student portal featuring personal profile data, contact details, and basic computational functions.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'flask')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 6: E-Commerce Architecture Gateway (FULL-STACK & WEB, UI/UX & PROTOTYPES) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'UI/UX & PROTOTYPES'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/myflask-me.png" alt="E-Commerce Architecture Gateway" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-3 bottom-3 flex flex-wrap gap-1.5 z-10">
                <span class="bg-brand-accent text-brand-dark text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">FULL-STACK</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">UI/UX</span>
              </div>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-brand-dark tracking-tight uppercase leading-snug">E-Commerce Core Gateway</h3>
              <p class="text-[11px] text-brand-dark/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">High-performance scalable interface mapping secure dynamic checkouts and reusable component layers.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'ecommerce')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Clean fallback state for empty views -->
      <div v-else class="w-full py-20 border border-white/10 rounded-[1.8rem] flex flex-col items-center justify-center text-center bg-white/2">
        <div class="text-2xl mb-2 text-white/20">//</div>
        <p class="text-xs uppercase tracking-widest text-neutral-400">No works deployed in this category yet.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['select-project'])

const activeCategory = ref('ALL')

const filteredCardsCount = computed(() => {
  if (activeCategory.value === 'ALL') return 6
  if (activeCategory.value === 'FULL-STACK & WEB') return 5
  if (activeCategory.value === 'DATA & ANALYTICS') return 3
  if (activeCategory.value === 'UI/UX & PROTOTYPES') return 3
  return 0
})

const vScrollReveal = {
  mounted: (el) => {
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px'
        }
      )
      observer.observe(el)
    })
  }
}
</script>

<style scoped>
.animate-typing {
  display: inline-block;
  will-change: width;
  animation: 
    terminalTyping 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both,
    terminalCursor 0.2s step-end 4 alternate forwards;
}

@keyframes terminalTyping {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes terminalCursor {
  from, to { border-color: transparent; }
  50% { border-color: #b38f6f; }
}

.scroll-reveal-card {
  opacity: 0;
  transform: translateY(60px) scale(0.96);
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), 
              transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.5s ease,
              shadow 0.5s ease;
  will-change: transform, opacity;
}

.scroll-reveal-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>