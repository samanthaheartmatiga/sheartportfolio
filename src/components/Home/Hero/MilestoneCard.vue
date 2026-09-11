<template>
  <div class="group relative bg-[#FAF9F5]/40 border-l-2 border-[#EAE6DF] px-3 py-2.5 transition-all duration-500 hover:bg-[#FAF9F5] hover:border-brand-main hover:shadow-[3px_3px_0px_0px_rgba(113,0,20,0.05)] text-left overflow-hidden flex flex-col justify-between min-h-[130px]">
    
    <!-- UPPER LAYER: Milestone Context & Title -->
    <div class="space-y-1.5 relative z-10">
      
      <!-- CLEAN METADATA ROW -->
      <div class="text-[8px] font-mono tracking-widest text-neutral-400 group-hover:text-brand-accent transition-colors duration-300 font-bold">
        {{ category }}
      </div>

      <!-- TITLE ROW -->
      <div class="flex items-start gap-1.5">
        <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-1 py-0.2 rounded border border-brand-main/10 font-mono shrink-0 mt-0.5">
          //
        </span>
        <h3 class="text-xs md:text-sm font-bold tracking-tight text-brand-dark font-mono leading-snug">
          {{ title }}
        </h3>
      </div>
      
      <!-- DESCRIPTION BLOCK -->
      <p class="text-[10px] text-neutral-600 font-mono leading-relaxed font-light">
        {{ description }}
      </p>
    </div>

    <!-- LOWER LAYER: Clear Tracking Timeline Status -->
    <div class="w-full pt-2 mt-1.5 relative z-10 flex items-center justify-between text-[8px] font-mono tracking-wider text-neutral-400 group-hover:text-brand-main/60 transition-colors duration-300 uppercase">
      <span>-----------------</span>
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