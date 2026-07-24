<template>
  <div class="group relative bg-[#FAF9F5]/40 border-l-2 border-[#EAE6DF] px-5 py-4 transition-all duration-500 hover:bg-[#FAF9F5] hover:border-brand-main hover:shadow-[5px_5px_0px_0px_rgba(113,0,20,0.05)] text-left overflow-hidden flex flex-col justify-between min-h-[160px]">
    
    <!-- UPPER LAYER: Milestone Context & Title -->
    <div class="space-y-3 relative z-10">
      
      <!-- CLEAN METADATA ROW -->
      <div class="text-[9px] font-mono tracking-widest text-neutral-400 group-hover:text-brand-accent transition-colors duration-300 font-bold">
        {{ category }}
      </div>

      <!-- TITLE ROW -->
      <div class="flex items-start gap-2">
        <span class="text-xs font-bold text-brand-main bg-brand-main/5 px-1.5 py-0.5 rounded border border-brand-main/10 font-mono shrink-0">
          //
        </span>
        <h3 class="text-base font-bold tracking-tight text-brand-dark font-mono">
          {{ title }}
        </h3>
      </div>
      
      <!-- DESCRIPTION BLOCK -->
      <p class="text-xs text-neutral-600 font-mono leading-relaxed font-light">
        {{ description }}
      </p>
    </div>

    <!-- LOWER LAYER: Clear Tracking Timeline Status -->
    <div class="w-full pt-4 mt-2 relative z-10 flex items-center justify-between text-[8px] font-mono tracking-wider text-neutral-400 group-hover:text-brand-main/60 transition-colors duration-300 uppercase">
      <span>-------------------------</span>
      <span class="font-bold tracking-widest">[ COMPLETED ]</span>
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
  category: {
    type: String,
    default: 'CORE_VAL'
  }
})
</script>