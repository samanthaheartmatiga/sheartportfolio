<template>
  <div class="space-y-8 text-left">
    <!-- CALL TO ACTION & EXPECTATIONS -->
    <div class="space-y-4">
      <h1 class="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight uppercase leading-[1.05] text-[#F2F1ED]">
        <div>Let's Build</div>
        <div 
          class="normal-case text-[rgb(179,143,111)] tracking-normal my-1"
          style="font-family: 'Monsieur La Doulaise', cursive;"
        >
          Something
        </div>
        <div>Meaningful</div>
      </h1>
      
      <p class="text-sm text-neutral-200/80 font-light max-w-sm leading-relaxed">
        Whether you have a project in mind or just want to connect, feel free to reach out on any of these platforms. Email or LinkedIn is the quickest way to catch me!
      </p>
    </div>

    <!-- CHANNELS LOG INDEX -->
    <div class="divide-y divide-white/10 border-t border-b border-white/10 text-xs md:text-sm">
      
      <!-- Channel 1: Gmail -->
      <a href="mailto:matigasamanthaheart@gmail.com" class="flex items-center justify-between py-4 group transition-colors hover:text-neutral-200">
        <div class="flex items-center gap-4">
          <!-- FIXED: Changed SVG icon color to #b38f6f -->
          <svg class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity stroke-[#b38f6f]" fill="none" viewBox="0 0 24 24" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <!-- FIXED: Changed label and text value colors to text-[#b38f6f], removed conflicting text-white and text-neutral-300 -->
            <span class="block font-bold text-[#b38f6f] text-[11px] uppercase tracking-wider font-mono">Gmail</span>
            <span class="font-light opacity-80 text-xs text-[#b38f6f]">matigasamanthaheart@gmail.com</span>
          </div>
        </div>
        <!-- FIXED: Changed accent arrow color to #b38f6f -->
        <span class="text-xs opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-mono text-[#b38f6f]">↗</span>
      </a>

      <!-- Channel 2: Mobile -->
      <a href="tel:+639165425273" class="flex items-center justify-between py-4 group transition-colors hover:text-neutral-200">
        <div class="flex items-center gap-4">
          <!-- FIXED: Changed SVG icon color to #b38f6f -->
          <svg class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity stroke-[#b38f6f]" fill="none" viewBox="0 0 24 24" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <!-- FIXED: Changed label and text value colors to text-[#b38f6f], removed conflicting text-white and text-neutral-300 -->
            <span class="block font-bold text-[#b38f6f] text-[11px] uppercase tracking-wider font-mono">Mobile</span>
            <span class="font-light opacity-80 text-xs text-[#b38f6f]">+63 916 542 5273</span>
          </div>
        </div>
        <!-- FIXED: Changed accent arrow color to #b38f6f -->
        <span class="text-xs opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-mono text-[#b38f6f]">↗</span>
      </a>

      <!-- Channel 3: GitHub -->
      <a href="https://github.com/samanthaheartmatiga" target="_blank" class="flex items-center justify-between py-4 group transition-colors hover:text-neutral-200">
        <div class="flex items-center gap-4">
          <!-- FIXED: Changed SVG icon color to #b38f6f -->
          <svg class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity fill-[#b38f6f]" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <div>
            <!-- FIXED: Changed label and text value colors to text-[#b38f6f], removed conflicting text-white and text-neutral-300 -->
            <span class="block font-bold text-[#b38f6f] text-[11px] uppercase tracking-wider font-mono">GitHub</span>
            <span class="font-light opacity-80 text-xs text-[#b38f6f]">github.com/samanthaheartmatiga</span>
          </div>
        </div>
        <!-- FIXED: Changed accent arrow color to #b38f6f -->
        <span class="text-xs opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-mono text-[#b38f6f]">↗</span>
      </a>

      <!-- Channel 4: LinkedIn -->
      <a href="https://www.linkedin.com/in/samanthaheartmatiga/" target="_blank" class="flex items-center justify-between py-4 group transition-colors hover:text-neutral-200">
        <div class="flex items-center gap-4">
          <!-- FIXED: Changed SVG icon color to #b38f6f -->
          <svg class="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity fill-[#b38f6f]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <div>
            <!-- FIXED: Changed label and text value colors to text-[#b38f6f], removed conflicting text-white and text-neutral-300 -->
            <span class="block font-bold text-[#b38f6f] text-[11px] uppercase tracking-wider font-mono">LinkedIn</span>
            <span class="font-light opacity-80 text-xs text-[#b38f6f]">linkedin.com/in/samanthaheartmatiga</span>
          </div>
        </div>
        <!-- FIXED: Changed accent arrow color to #b38f6f -->
        <span class="text-xs opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-mono text-[#b38f6f]">↗</span>
      </a>

    </div>
  </div>
</template>