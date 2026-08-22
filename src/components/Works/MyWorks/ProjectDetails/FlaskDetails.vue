<template>
  <div class="w-full max-w-6xl mx-auto font-mono text-brand-light -mt-4">
    
    <!-- TOP HERO PANEL SECTOR -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
      <div class="lg:col-span-6 text-left space-y-4">
        <button 
          @click.stop="$emit('close')" 
          class="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-neutral-300 hover:text-brand-accent transition-colors active:scale-95 duration-200 cursor-pointer"
        >
          <span class="font-sans text-xs">←</span> Back to Works
        </button>
        <div class="text-[9px] font-black tracking-widest text-brand-accent uppercase pt-1">
          FULL-STACK &amp; WEB // PORTAL
        </div>
        <h2 class="text-3xl md:text-4xl font-normal font-serif text-brand-light leading-tight tracking-wide">
          Heart's Mini Corner
        </h2>
        <p class="text-xs text-neutral-300/80 font-mono leading-relaxed tracking-wide max-w-lg">
          An interactive Flask-powered student portal featuring personal profile data, contact details, and basic computational functions.
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Python</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Flask</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Jinja2</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">HTML5 / CSS3</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">JavaScript</span>
        </div>
      </div>

      <div class="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-none">
        <div class="rounded-[1.2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 w-full h-auto">
          <img 
            src="/myflask.png" 
            alt="Heart's Mini Corner Flask Portal" 
            class="w-full h-auto object-contain block select-none bg-black/40" 
          />
        </div>
      </div>
    </div>

    <!-- MAIN CONTAINER (2-COLUMN ARCHITECTURE GRID) -->
    <div class="bg-brand-light text-brand-dark rounded-4xl p-6 sm:p-10 md:p-12 shadow-2xl relative z-10 w-full text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
        
        <!-- LEFT COLUMN TRACK -->
        <div class="space-y-10">
          
          <!-- 1. OVERVIEW SECTION -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Overview
            </h3>
            <div class="bg-white/60 border-l-4 border-brand-accent p-4 rounded-r-xl shadow-sm">
              <p class="text-[11px] font-mono text-neutral-700 leading-relaxed text-justify">
                Heart's Mini Corner is a server-side rendered web portal developed with Python and the Flask framework. Designed as an interactive digital card and functional utility space, it incorporates templated page routing, interactive calculation utilities, student profile metadata, and accessible design principles.
              </p>
            </div>
          </div>

          <!-- 2. FEATURES SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Features &amp; Capabilities
            </h3>
            <div class="grid grid-cols-1 gap-2.5">
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-brand-accent pt-0.5">01/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">
                  <strong>Flask Dynamic Routing:</strong> Modular multi-page application with server-rendered Jinja templates and structured endpoint handling.
                </p>
              </div>
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-brand-accent pt-0.5">02/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">
                  <strong>Integrated Computational Tools:</strong> Server and client calculation widgets processing inputs cleanly through interactive form handlers.
                </p>
              </div>
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-brand-accent pt-0.5">03/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">
                  <strong>Responsive Profile Showcase:</strong> Retro-aesthetic visual design adapting seamlessly across desktop and mobile browsers.
                </p>
              </div>
            </div>
          </div>

          <!-- 3. DOCUMENTATION & TESTING SECTION -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Documentation &amp; Verification
            </h3>
            <div class="bg-neutral-900 text-brand-light rounded-xl p-4 font-mono text-[11px] space-y-1.5 border border-white/10 shadow-inner">
              <p class="text-neutral-500">// APPLICATION DEPLOYMENT VERIFIED</p>
              <p><span class="text-brand-accent">backend:</span> Python Flask server handling HTTP GET/POST endpoints</p>
              <p><span class="text-brand-accent">templates:</span> Modular Jinja template inheritance structure</p>
              <p><span class="text-brand-accent">styling:</span> Custom responsive CSS layouts with unified color palettes</p>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN TRACK -->
        <div class="space-y-10 md:border-l md:border-neutral-300/70 md:pl-12">
          
          <!-- 4. ENGINEERING STACK SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.835l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.835.577-1.835h4.907a1 1 0 00.95-.69l1.519-4.674z"/>
              </svg>
              Analytics &amp; Technical Stack
            </h3>
            <div class="grid grid-cols-1 gap-2">
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-24 shrink-0">ROLE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Full-Stack Web Developer</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-24 shrink-0">TECH STACK:</span>
                <span class="text-[11px] font-mono text-neutral-700">Python, Flask, Jinja2, HTML5, CSS3, JavaScript</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-24 shrink-0">SCOPE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Server-side Routing, Template Rendering, Interactive UI Modules</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-24 shrink-0">PROJECT TYPE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Web Portal Application</span>
              </div>
            </div>
          </div>

          <!-- 5. DESIGN & ARCHITECTURE SECTION -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"/>
              </svg>
              Design &amp; Architecture
            </h3>
            <div class="bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
              
              <div class="bg-neutral-900 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Client Browser</p>
                <p class="text-[10px] font-black text-brand-accent uppercase mt-0.5">HTTP Request (GET / POST)</p>
              </div>

              <div class="text-center text-brand-accent text-xs leading-none">↓</div>

              <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Flask Gateway</p>
                <p class="text-[10px] font-black text-brand-dark uppercase mt-0.5">Route Controller &amp; Request Parsing</p>
              </div>

              <div class="text-center text-brand-accent text-xs leading-none">↓</div>

              <div class="bg-neutral-900 p-2.5 rounded-xl text-center shadow-sm">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Jinja2 Engine</p>
                <p class="text-[10px] font-black text-brand-accent uppercase mt-0.5">Dynamic Server-Side Template Rendering</p>
              </div>

              <div class="text-center text-brand-accent text-xs leading-none">↓</div>

              <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Rendered Output</p>
                <p class="text-[10px] font-black text-brand-dark uppercase mt-0.5">Interactive Responsive Web View</p>
              </div>

            </div>
          </div>

          <!-- 6. FINAL RESULT SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Final Outcome Metrics
            </h3>
            <div class="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
              <div class="w-12 h-12 bg-brand-dark text-brand-accent rounded-lg flex items-center justify-center font-bold text-sm tracking-tight border border-neutral-800 shrink-0">
                100%
              </div>
              <div class="font-mono text-[11px] text-neutral-600 leading-relaxed text-justify sm:text-left">
                Delivered a robust Python Flask web application integrating clean backend logic, form handling, and user interface design.
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- FOOTER LINK TRAFFIC BASES -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-10 border-t border-neutral-300/60">
        <a 
          href="https://github.com/samanthaheartmatiga" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-brand-dark hover:bg-neutral-800 text-brand-light text-[10px] font-black tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub Repository
        </a>
        <a 
          href="https://github.com/samanthaheartmatiga" 
          target="_blank"
          rel="noopener noreferrer"
          class="border border-[#0e0909] hover:bg-brand-dark hover:text-brand-light text-brand-dark text-[10px] font-black tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Demo &amp; Preview
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>