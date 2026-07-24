<template>
  <div class="pt-10 pb-12 px-6 md:px-10 lg:px-12 space-y-6 text-left">
    
    <!-- HEADER BLOCK -->
    <h2 class="text-xs md:text-sm font-black tracking-widest text-brand-main uppercase border-b border-neutral-300/80 pb-2 flex items-center gap-2">
      <svg class="w-4 h-4 text-brand-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <span>Technical Core Matrix</span>
    </h2>

    <!-- LAYER 01: EXPANDED TECHNICAL PROFICIENCY MATRIX TABLE -->
    <div class="w-full overflow-hidden border border-neutral-300/70 rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
      <table class="w-full text-left border-collapse text-[11px] md:text-xs">
        <thead>
          <tr class="bg-neutral-50 border-b border-neutral-300/70 font-mono text-[9px] text-neutral-400 font-black tracking-widest uppercase">
            <th class="py-2.5 px-4 w-1/4 tracking-wider">DOMAIN_VECTOR</th>
            <th class="py-2.5 px-4 w-5/12 tracking-wider text-brand-main">PROFICIENT / CORE STACK</th>
            <th class="py-2.5 px-4 tracking-wider">FAMILIAR / ACTIVE UPSKILLING</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200/60 text-neutral-700">
          <tr class="hover:bg-brand-main/[0.01] transition-colors duration-150 group">
            <td class="py-2.5 px-4 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Frontend & UI/UX</td>
            <!-- FIXED: Changed leading-relaxed to leading-normal -->
            <td class="py-2.5 px-4 font-semibold text-neutral-800 leading-normal">Vue.js, Dart, Flutter, CSS3, Tailwind CSS, UI Component Design</td>
            <td class="py-2.5 px-4 text-neutral-500 font-normal leading-normal">Responsive Web Design and Web Performance</td>
          </tr>
          <tr class="hover:bg-brand-main/[0.01] transition-colors duration-150 group">
            <td class="py-2.5 px-4 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Data & Analytics</td>
            <td class="py-2.5 px-4 font-semibold text-neutral-800 leading-normal">Data Modeling, Data Manipulation, Dashboard Design, Charting Libraries</td>
            <td class="py-2.5 px-4 text-neutral-500 font-normal leading-normal">Python (EDA Basics), Data Analysis, Big Data Concepts</td>
          </tr>
          <tr class="hover:bg-brand-main/[0.01] transition-colors duration-150 group">
            <td class="py-2.5 px-4 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">QA & Systems Testing</td>
            <td class="py-2.5 px-4 font-semibold text-neutral-800 leading-normal">Software QA, Functional Testing, Test Cases, UI/UX Auditing</td>
            <td class="py-2.5 px-4 text-neutral-500 font-normal leading-normal">Bug Tracking, Cross Browser Testing, Mobile Testing</td>
          </tr>
          <tr class="hover:bg-brand-main/[0.01] transition-colors duration-150 group">
            <td class="py-2.5 px-4 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">DevOps &amp; Tooling</td>
            <td class="py-2.5 px-4 font-semibold text-neutral-800 leading-normal">Git, GitHub, Composer, npm, Vite</td>
            <td class="py-2.5 px-4 text-neutral-500 font-normal leading-normal">CLI, Build Automation, Deployment Tools</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- LAYER 02: HIGH-DENSITY COMPACT PRACTICES GRID -->
    <div class="border-t border-dashed border-neutral-300/60 pt-4 space-y-3 text-xs">
      
      <span class="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest block">
        // Engineering Practices
      </span>

      <!-- FIXED: Reduced space-y-2 to space-y-1.5 -->
      <div class="space-y-1.5 max-w-3xl text-xs">
        
        <!-- Practice 1 -->
        <!-- FIXED: Changed leading-relaxed to leading-snug -->
        <div class="flex items-start gap-2 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[10px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-110 transition-transform">[01] SYS_ARCH //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">State Management &amp; Component Architecture:</strong>
            UI component libraries, modular layout, and architecture (Vuex, Pinia, Bloc, Provider).
          </p>
        </div>

        <!-- Practice 2 -->
        <div class="flex items-start gap-2 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[10px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-110 transition-transform">[02] DT_OPTIM //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Database Design &amp; Optimization:</strong>
            Database schema normalization, structural query optimization, indexing, and modeling.
          </p>
        </div>

        <!-- Practice 3 -->
        <div class="flex items-start gap-2 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[10px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-110 transition-transform">[03] LIFE_CYCL //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Development Lifecycles:</strong>
            Agile/Scrum methodologies, Git branching models (Gitflow), review cycles, and semantic version structures.
          </p>
        </div>

      </div>
    </div>

  </div>
</template>