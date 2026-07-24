<template>
  <div class="w-full max-w-none mx-auto font-mono text-[#F2F1ED]">
    
    <!-- Tab Section Header -->
    <div class="mb-12 text-left">
      <div class="inline-block relative">
        <h1 
          style="width: 0;"
          class="text-4xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif text-[#F2F1ED] leading-none whitespace-nowrap overflow-hidden border-r-4 border-[#b38f6f] pr-1 animate-typing"
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
        :class="activeCategory === 'ALL' ? 'bg-[#b38f6f] border-[#b38f6f] text-[#161616]' : 'bg-transparent border-white/20 text-[#F2F1ED] hover:border-white/60'"
      >
        ALL
      </button>
      <button 
        @click="activeCategory = 'WEB & FRONTEND'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'WEB & FRONTEND' ? 'bg-[#b38f6f] border-[#b38f6f] text-[#161616]' : 'bg-transparent border-white/20 text-[#F2F1ED] hover:border-white/60'"
      >
        WEB & FRONTEND
      </button>
      <button 
        @click="activeCategory = 'DATA & ANALYTICS'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'DATA & ANALYTICS' ? 'bg-[#b38f6f] border-[#b38f6f] text-[#161616]' : 'bg-transparent border-white/20 text-[#F2F1ED] hover:border-white/60'"
      >
        DATA & ANALYTICS
      </button>
      <button 
        @click="activeCategory = 'UI/UX DESIGN'"
        class="text-[9px] font-black tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer"
        :class="activeCategory === 'UI/UX DESIGN' ? 'bg-[#b38f6f] border-[#b38f6f] text-[#161616]' : 'bg-transparent border-white/20 text-[#F2F1ED] hover:border-white/60'"
      >
        UI/UX DESIGN
      </button>
    </div>

    <!-- Persistent Height Layout Envelope Layer -->
    <div class="w-full min-h-[450px]">
      
      <!-- Works Grid Matrix Layout -->
      <div 
        v-if="filteredCardsCount > 0" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        <!-- CARD 1: Analytics Dashboard -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'DATA & ANALYTICS'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="/deped-analytics.png" alt="DepEd Enrollment Analytics Dashboard" class="w-full h-full object-cove opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">DATA & ANALYTICS</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">DepEd Enrollment Analytics Dashboard</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">A real time analytics dashboard and data workflow solution designed to transform manual reporting into actionable visual insights for Philippine education policy planning.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'analytics')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 2: UI/UX Design System -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'UI/UX DESIGN'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="UI/UX Design System" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">UI/UX DESIGN</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">Design System & Component Library</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">A scalable design system featuring reusable components, wireframes, and interactive UI patterns.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'expense')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 3: E-Learning Platform -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'WEB & FRONTEND'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="E-Learning Platform" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">WEB & FRONTEND</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">E-Learning Platform</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">A modular learning management system with course structure and progress tracking.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'learning')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 4: Data Pipeline Core -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'DATA & ANALYTICS'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Data Pipeline Core" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">DATA & ANALYTICS</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">Data Pipeline Engine</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">High-throughput predictive data stream processing engine configured for real-time validation layers.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'pipeline')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 5: Mobile Interface Prototype -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'UI/UX DESIGN'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80" alt="Mobile App UI Prototype" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">UI/UX DESIGN</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">Mobile App Interface Prototype</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">High-fidelity Figma prototypes focused on user flows, micro-interactions, and accessibility standards.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'crypto')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 6: E-Commerce Architecture Gateway -->
        <div 
          v-if="activeCategory === 'ALL' || activeCategory === 'WEB & FRONTEND'"
          v-scroll-reveal
          class="bg-[#F2F1ED] rounded-[1.8rem] overflow-hidden group border border-transparent hover:border-[#b38f6f]/40 transition-all duration-500 shadow-xl flex flex-col justify-between scroll-reveal-card"
        >
          <div class="p-3 pb-0 relative overflow-hidden">
            <div class="rounded-[1.2rem] overflow-hidden aspect-[16/10] bg-neutral-900 relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="E-Commerce Architecture Gateway" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 select-none" />
              <span class="absolute left-3 bottom-3 bg-[#b38f6f] text-[#161616] text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm">WEB & FRONTEND</span>
            </div>
          </div>
          <div class="p-5 text-left flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-md md:text-lg font-black text-[#161616] tracking-tight uppercase leading-snug">E-Commerce Core Gateway</h3>
              <p class="text-[11px] text-[#161616]/70 font-sans mt-2 leading-relaxed h-10 overflow-hidden line-clamp-2">High-performance scalable interface mapping secure dynamic checkouts and reusable component layers.</p>
            </div>
            <div class="pt-4 border-t border-neutral-200/60 mt-4">
              <button @click="$emit('select-project', 'ecommerce')" class="border border-[#161616]/30 text-[#161616] hover:bg-[#161616] hover:text-[#F2F1ED] text-[9px] font-black tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-3 group/btn transition-all active:scale-[0.98] cursor-pointer">
                View Project <span class="transform group-hover/btn:translate-x-1 transition-transform inline-block font-sans">➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Clean fallback state for empty views to keep layouts visually stable -->
      <div v-else class="w-full py-20 border border-white/10 rounded-[1.8rem] flex flex-col items-center justify-center text-center bg-white/[0.02]">
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

// Evaluates visible cards dynamically based on the updated categories
const filteredCardsCount = computed(() => {
  if (activeCategory.value === 'ALL') return 6
  if (activeCategory.value === 'WEB & FRONTEND') return 3 // Cards 1, 3, 6
  if (activeCategory.value === 'DATA & ANALYTICS') return 1 // Card 4
  if (activeCategory.value === 'UI/UX DESIGN') return 2   // Cards 2, 5
  return 0
})

// Custom Vue Scroll Reveal Directive Definition
const vScrollReveal = {
  mounted: (el) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    )
    observer.observe(el)
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

/* ==========================================
   SCROLL REVEAL "PULL OVER" CONFIGURATIONS
   ========================================== */
.scroll-reveal-card {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), 
              transform 0.8s cubic-bezier(0.25, 1, 0.5, 1),
              border-color 0.5s ease,
              shadow 0.5s ease;
  will-change: transform, opacity;
}

.scroll-reveal-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>