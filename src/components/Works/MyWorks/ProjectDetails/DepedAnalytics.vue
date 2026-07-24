<template>
  <div class="w-full max-w-6xl mx-auto font-mono text-[#F2F1ED] -mt-4">
    
    <!-- ==========================================
         TOP HERO PANEL SECTOR
         ========================================== -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
      <div class="lg:col-span-6 text-left space-y-4">
        <button 
          @click.stop="$emit('close')" 
          class="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-neutral-300 hover:text-[#b38f6f] transition-colors active:scale-95 duration-200 cursor-pointer"
        >
          <span class="font-sans text-xs">←</span> Back to Works
        </button>
        <div class="text-[9px] font-black tracking-widest text-[#b38f6f] uppercase pt-1">
          DATA & ANALYTICS
        </div>
        <h2 class="text-3xl md:text-4xl font-normal font-serif text-[#F2F1ED] leading-tight tracking-wide">
          DepEd Enrollment Analytics Dashboard
        </h2>
        <p class="text-xs text-neutral-300/80 font-mono leading-relaxed tracking-wide max-w-lg">
          A real time analytics dashboard designed to transform manual reporting into actionable visual insights for Philippine education policy planning.
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span class="bg-[#b38f6f]/20 text-[#b38f6f] border border-[#b38f6f]/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Python</span>
          <span class="bg-[#b38f6f]/20 text-[#b38f6f] border border-[#b38f6f]/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">React</span>
          <span class="bg-[#b38f6f]/20 text-[#b38f6f] border border-[#b38f6f]/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Flask</span>
          <span class="bg-[#b38f6f]/20 text-[#b38f6f] border border-[#b38f6f]/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Pandas</span>
          <span class="bg-[#b38f6f]/20 text-[#b38f6f] border border-[#b38f6f]/30 text-[8px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Numpy</span>
        </div>
      </div>

      <div class="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-none">
        <div class="rounded-[1.2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 w-full h-auto">
          <img 
            src="/deped-analytics-comparison.png" 
            alt="DepEd Enrollment Analytics Dashboard" 
            class="w-full h-auto object-contain block select-none" 
          />
        </div>
      </div>
    </div>

    <!-- ==========================================
         THE MAIN CONTAINER (2-COLUMN ARCHITECTURE GRID)
         ========================================== -->
    <div class="bg-[#F2F1ED] text-[#161616] rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl relative z-10 w-full text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
        
        <!-- ==================== LEFT COLUMN TRACK ==================== -->
        <div class="space-y-10">
          
          <!-- 1. OVERVIEW SECTION -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Overview
            </h3>
            <div class="bg-white/60 border-l-4 border-[#b38f6f] p-4 rounded-r-xl shadow-sm">
              <p class="text-[11px] font-mono text-neutral-700 leading-relaxed text-justify">
                Working in an eight member analytics team for the Department of Education (DepEd), this project addressed the limitations of the Learner Information System. The agency previously relied on manual data generation through the Education Management Information System Division, creating delays for policymakers. As a Data Analyst, I focused on cleaning and preprocessing enrollment datasets using Python and Pandas, as well as designing the interactive charts, visual graphs, and dynamic React dashboards that give DepEd officials immediate access to key education indicators.
              </p>
            </div>
          </div>

          <!-- 2. FEATURES SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              Features & Capabilities
            </h3>
            <div class="grid grid-cols-1 gap-2.5">
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-[#b38f6f] pt-0.5">01/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">Interactive charts and visual graphs built with React, Pandas, and Matplotlib to provide an immediate high level overview of national enrollment data for DepEd executives and technical staff.</p>
              </div>
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-[#b38f6f] pt-0.5">02/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">Custom filter controls allowing users to slice and explore data across various dimensions through a Flask API layer to support targeted program and policy planning.</p>
              </div>
              <div class="bg-white p-3 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span class="text-[10px] font-black text-[#b38f6f] pt-0.5">03/</span>
                <p class="text-[11px] font-mono text-neutral-600 leading-normal">Streamlined the data pipeline from raw Excel files to data cleaning, JSON conversion, API delivery, and frontend visual rendering.</p>
              </div>
            </div>
          </div>

          <!-- 3. DOCUMENTATION & TESTING SECTION -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              Documentation & Verification
            </h3>
            <div class="bg-neutral-900 text-[#F2F1ED] rounded-xl p-4 font-mono text-[11px] space-y-1.5 border border-white/10 shadow-inner">
              <p class="text-neutral-500">// CASE STUDY DELIVERABLE VERIFICATION SUCCESSFUL</p>
              <p><span class="text-[#b38f6f]">dataset:</span> cleaned and preprocessed using Pandas to eliminate inconsistencies</p>
              <p><span class="text-[#b38f6f]">workflow:</span> LIS data workflow mapped from collection to application</p>
              <p><span class="text-[#b38f6f]">architecture:</span> Flask API serving processed JSON data to React frontend</p>
              <p><span class="text-[#b38f6f]">audience:</span> presented to EMISD Chief, Planning Director, and Undersecretary</p>
            </div>
          </div>

        </div>

        <!-- ==================== RIGHT COLUMN TRACK ==================== -->
        <div class="space-y-10 md:border-l md:border-neutral-300/70 md:pl-12">
          
          <!-- 4. ENGINEERING STACK SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.835l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.835.577-1.835h4.907a1 1 0 00.95-.69l1.519-4.674z"/></svg>
              Analytics & Technical Stack
            </h3>
            <div class="grid grid-cols-1 gap-2">
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-16 shrink-0">ROLE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Data Analyst (Data Preprocessing & Visualizations)</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-16 shrink-0">TECH STACK:</span>
                <span class="text-[11px] font-mono text-neutral-700">Python, Pandas, NumPy, Matplotlib, Flask API, React</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-16 shrink-0">SCOPE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Data Preprocessing, Workflow Mapping, Interactive Dashboard UI</span>
              </div>
              <div class="bg-white px-3 py-2 rounded-xl border border-neutral-200 flex items-center gap-2">
                <span class="text-[9px] font-black uppercase text-neutral-400 w-16 shrink-0">PROJECT TYPE:</span>
                <span class="text-[11px] font-mono text-neutral-700">Academic Case Study</span>
              </div>
            </div>
          </div>

          <!-- 5. DESIGN & ARCHITECTURE SECTION (VERTICAL FLOW DIAGRAM) -->
          <div class="space-y-3">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"/></svg>
              Design & Architecture
            </h3>
            <div class="bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
              
              <div class="bg-neutral-900 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Input Layer</p>
                <p class="text-[10px] font-black text-[#b38f6f] uppercase mt-0.5">Raw Excel Data</p>
              </div>

              <div class="text-center text-[#b38f6f] text-xs leading-none">↓</div>

              <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Transformation</p>
                <p class="text-[10px] font-black text-[#161616] uppercase mt-0.5">Pandas Preprocessing &amp; JSON Storage</p>
              </div>

              <div class="text-center text-[#b38f6f] text-xs leading-none">↓</div>

              <div class="bg-neutral-900 p-2.5 rounded-xl text-center shadow-sm">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">REST API Gateway</p>
                <p class="text-[10px] font-black text-[#b38f6f] uppercase mt-0.5">Flask API Service</p>
              </div>

              <div class="text-center text-[#b38f6f] text-xs leading-none">↓</div>

              <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                <p class="text-[9px] font-bold text-neutral-400 uppercase">Visualization</p>
                <p class="text-[10px] font-black text-[#161616] uppercase mt-0.5">React Dashboard Client</p>
              </div>

            </div>
          </div>

          <!-- 6. FINAL RESULT SECTION -->
          <div class="space-y-4">
            <h3 class="text-[11px] font-black tracking-widest uppercase text-[#161616] flex items-center gap-2">
              <svg class="w-4 h-4 text-[#b38f6f]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              Final Deployment Metrics
            </h3>
            <div class="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
              <div class="w-12 h-12 bg-[#161616] text-[#b38f6f] rounded-lg flex items-center justify-center font-bold text-sm tracking-tight border border-neutral-800 shrink-0">
                100%
              </div>
              <div class="font-mono text-[11px] text-neutral-600 leading-relaxed text-justify sm:text-left">
                Delivered a reliable real time dashboard prototype with interactive drill downs, fulfilling DepEd requirements for data driven decision making.
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- ==========================================
           FOOTER LINK TRAFFIC BASES
           ========================================== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-10 border-t border-neutral-300/60">
        <a 
          href="https://drive.google.com/file/d/1THxap3dsbevG4A7cm7PXwx9W9jdhNTvL/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#161616] hover:bg-neutral-800 text-[#F2F1ED] text-[10px] font-black tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12H4V4z"/>
          </svg>
          Presentation
        </a>
        <a 
          href="https://drive.google.com/file/d/1zBqpvE8qbsH2ZI3wAXmD5q3j3meTZzqK/view?usp=drive_link" 
          target="_blank"
          class="border border-[#0e0909] hover:bg-[#161616] hover:text-[#F2F1ED] text-[#161616] text-[10px] font-black tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99]"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Watch System Demo Video
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>