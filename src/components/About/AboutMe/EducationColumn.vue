<template>
  <div class="pt-10 pb-12 px-6 md:px-10 lg:pl-16 xl:pl-24 space-y-6 text-left">
    
    <!-- HEADER BLOCK -->
    <h2 class="text-xs md:text-sm font-black tracking-widest text-brand-main uppercase border-b border-neutral-300/80 pb-2 flex items-center gap-2">
      <svg class="w-4 h-4 text-brand-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />
      </svg>
      <span>Credentials &amp; Education</span>
    </h2>

    <!-- SPECIFICATION BLOCK STRUCTURE -->
    <div class="space-y-4 text-xs">
      
      <!-- Container 1: Degree -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">01 // ACADEMIC_DEGREE</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ BSCpE ]</span>
        </div>
        <h3 class="font-bold text-neutral-800 text-xs md:text-sm leading-snug">
          Bachelor of Science in Computer Engineering
        </h3>
      </div>

      <!-- Container 2: Institution -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">02 // INSTITUTION</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ PUP ]</span>
        </div>
        <h3 class="font-bold text-neutral-800 text-xs md:text-sm leading-snug">
          Polytechnic University of the Philippines
        </h3>
      </div>

      <!-- Container 3: Scholarship Track -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">03 // FUNDING_TRACK</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ RA 7687 ]</span>
        </div>
        <p class="font-bold text-neutral-800 text-xs md:text-sm leading-tight">
          DOST-SEI Undergraduate Scholar
        </p>
      </div>

      <!-- Container 4: Distinctions -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">04 // HONORS_MATRIX</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ SEMESTRAL ]</span>
        </div>
        <p class="font-bold text-neutral-800 text-xs md:text-sm leading-tight">
          President's Lister
        </p>
      </div>

      <!-- Container 5: Thesis Project -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">05 // RESEARCH_THESIS</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ SOFTWARE &amp; HARDWARE ]</span>
        </div>
        <p class="font-bold text-neutral-800 text-xs md:text-sm leading-tight">
          Ecosense: An IoT-Based Composting System Using Thermophilic Process with Cloud-Based Monitoring
        </p>
      </div>

      <!-- Container 6: Core Technical Focus -->
      <div class="border border-neutral-300/70 rounded-xl p-3.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-main hover:shadow-[0_4px_12px_rgba(113,0,20,0.05)]">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">06 // FOCUS_DOMAINS</span>
          <span class="text-[10px] font-bold text-brand-main bg-brand-main/5 px-2 py-0.5 rounded-md border border-brand-main/10 font-mono">[ CORE_ENG ]</span>
        </div>
        <!-- FIXED: Structured into an explicit 1-line-per-item vertical stacking format -->
        <div class="font-bold text-neutral-800 text-xs md:text-sm space-y-1">
          <div>Software Engineering</div>
          <div>Frontend & UI/UX Design</div>
          <div>Data Systems & Analytics</div>
          <div>Interactive Web Apps</div>
        </div>
      </div>

    </div>
  </div>
</template>