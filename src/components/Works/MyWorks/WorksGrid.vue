<template>
  <div class="w-full max-w-none mx-auto font-mono text-brand-light">
    
    <!-- Tab Section Header -->
    <div class="mb-6 text-left">
      <div class="inline-block relative">
        <h1 
          style="width: 0;"
          class="text-2xl sm:text-3xl md:text-3xl font-black tracking-tight font-serif text-brand-light leading-none whitespace-nowrap overflow-hidden border-r-2 border-brand-accent pr-1 animate-typing"
        >
          My Works
        </h1>
      </div>
      <p class="text-[10px] sm:text-[11px] text-neutral-300/80 max-w-md mt-2 leading-relaxed uppercase tracking-wider">
        A collection of solutions, systems, and experiences built with purpose and precision.
      </p>
    </div>

    <!-- Category Filter Matrix -->
    <div class="flex flex-wrap gap-1.5 mb-6 select-none justify-start">
      <button 
        @click="activeCategory = 'ALL'"
        class="text-[8px] font-black tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'ALL' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        ALL
      </button>
      <button 
        @click="activeCategory = 'FULL-STACK & WEB'"
        class="text-[8px] font-black tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'FULL-STACK & WEB' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        FULL-STACK & WEB
      </button>
      <button 
        @click="activeCategory = 'DATA & ANALYTICS'"
        class="text-[8px] font-black tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'DATA & ANALYTICS' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        DATA & ANALYTICS
      </button>
      <button 
        @click="activeCategory = 'UI/UX & PROTOTYPES'"
        class="text-[8px] font-black tracking-wider uppercase px-3 py-1 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'UI/UX & PROTOTYPES' ? 'bg-brand-accent border-brand-accent text-brand-dark' : 'bg-transparent border-white/20 text-brand-light hover:border-white/60'"
      >
        UI/UX & PROTOTYPES
      </button>
    </div>

    <!-- Persistent Height Layout Envelope Layer -->
    <div class="w-full min-h-90">
      
      <!-- Works Grid Matrix Layout -->
      <div 
        v-if="filteredCardsCount > 0" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
      >
        
        <!-- CARD 1: Crypto Pipeline Telemetry (DATA & ANALYTICS, FULL-STACK & WEB) -->
        <div 
          v-if="['ALL', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img 
                src="/crypto.png" 
                alt="Crypto Pipeline Telemetry" 
                class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" 
              />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">PYTHON</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">POSTGRESQL</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">Crypto Pipeline Telemetry</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">An automated crypto ETL pipeline and dashboard delivering validated, 10-minute PostgreSQL window analytics in real time.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('crypto-pipeline')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 2: Supply Chain Dashboard (DATA & ANALYTICS) -->
        <div 
          v-if="['ALL', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img 
                src="/supplyp1.png" 
                alt="Supply Chain Dashboard" 
                class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" 
              />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">POWER BI</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">DAX</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">Supply Chain Dashboard</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">A high-density, two-page Power BI executive analytics suite built to monitor enterprise financial health, operational fulfillment, and vendor reliability.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('supply-chain')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 3: Barklet (FULL-STACK & WEB, UI/UX & PROTOTYPES) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'UI/UX & PROTOTYPES'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img 
                src="/barklethome.png" 
                alt="Barklet" 
                class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" 
              />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">FULL-STACK</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">WEB</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">Barklet</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">A pet care and canine wellness hub engineered to streamline pet profiles, medical tracking, and modern canine lifestyle management.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('barklet')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 4: Clientora (FULL-STACK & WEB, UI/UX & PROTOTYPES) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'UI/UX & PROTOTYPES'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/clientora.png" alt="Clientora" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">FULL-STACK</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">UI/UX</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">Clientora</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">A collaborative management platform built to help teams organize clients, track deliverable progress, and handle financial workflows effortlessly.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('clientora')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 5: PhiMAPix (FULL-STACK & WEB, DATA & ANALYTICS) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/phimapix.png" alt="PhiMAPix" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">DATA & ANALYTICS</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">WEB</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">PhiMAPix</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">An interactive geospatial dashboard built to process and visualize real-time atmospheric telemetry across Philippine regions for environmental analysis.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('phimapix')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 6: DepEd Analytics (DATA & ANALYTICS, FULL-STACK & WEB) -->
        <div 
          v-if="['ALL', 'FULL-STACK & WEB', 'DATA & ANALYTICS'].includes(activeCategory)"
          v-scroll-reveal
          class="bg-brand-light rounded-xl overflow-hidden group border border-transparent hover:border-brand-accent/40 transition-all duration-500 shadow-md flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-2 pb-0 relative overflow-hidden">
            <div class="rounded-lg overflow-hidden bg-neutral-900 relative w-full h-auto">
              <img src="/deped-analytics.png" alt="DepEd Enrollment Analytics Dashboard" class="w-full h-auto object-contain block opacity-95 group-hover:scale-105 transition-transform duration-700 select-none" />
              <div class="absolute left-2 bottom-2 flex flex-wrap gap-1 z-10">
                <span class="bg-brand-accent text-brand-dark text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">DATA & ANALYTICS</span>
                <span class="bg-brand-dark/90 text-brand-light border border-white/10 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded shadow-xs">REACT</span>
              </div>
            </div>
          </div>
          <div class="p-3 text-left flex flex-col justify-between grow">
            <div>
              <h3 class="text-xs md:text-sm font-black text-brand-dark tracking-tight uppercase leading-snug">DepEd Enrollment Analytics Dashboard</h3>
              <p class="text-[9.5px] text-brand-dark/70 font-sans mt-1 leading-normal h-7 overflow-hidden line-clamp-2">A real time analytics dashboard and data workflow solution designed to transform manual reporting into actionable visual insights for Philippine education policy planning.</p>
            </div>
            <div class="pt-2 border-t border-neutral-200/60 mt-2">
              <button @click="navigateToProject('analytics')" class="border border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-brand-light text-[8px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-0.5 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Clean fallback state for empty views -->
      <div v-else class="w-full py-12 border border-white/10 rounded-xl flex flex-col items-center justify-center text-center bg-white/2">
        <div class="text-xl mb-1 text-white/20">//</div>
        <p class="text-[10px] uppercase tracking-widest text-neutral-400">No works deployed in this category yet.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['select-project'])
const router = useRouter()

const activeCategory = ref('ALL')

const navigateToProject = (projectId) => {
  emit('select-project', projectId)
  if (router) {
    router.push(`/works/${projectId}`)
  }
}

const filteredCardsCount = computed(() => {
  if (activeCategory.value === 'ALL') return 6
  if (activeCategory.value === 'FULL-STACK & WEB') return 5
  if (activeCategory.value === 'DATA & ANALYTICS') return 4
  if (activeCategory.value === 'UI/UX & PROTOTYPES') return 2
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
  transform: translateY(40px) scale(0.97);
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), 
              transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.5s ease,
              box-shadow 0.5s ease;
  will-change: transform, opacity;
}

.scroll-reveal-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>