<template>
  <div class="w-full max-w-none font-mono text-brand-light -mt-2 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14">
    
    <!-- TOP HERO SECTION -->
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-center pb-6">
      <div class="lg:col-span-6 xl:col-span-5 text-left space-y-2.5">
        <button 
          @click.stop="$emit('close')" 
          class="flex items-center gap-1.5 text-[9.5px] font-black tracking-widest uppercase text-neutral-300 hover:text-brand-accent transition-colors active:scale-95 duration-200 cursor-pointer"
        >
          <span class="font-sans text-[11px]">←</span> Back to Works
        </button>
        <div class="text-[8.5px] font-black tracking-widest text-brand-accent uppercase pt-0.5">
          DATA &amp; ANALYTICS
        </div>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-normal font-serif text-brand-light leading-tight tracking-wide">
          DepEd Enrollment Analytics Dashboard
        </h2>
        <p class="text-[11px] md:text-xs text-neutral-300/80 font-mono leading-relaxed tracking-wide">
          A real-time analytics dashboard designed to transform manual reporting into actionable visual insights for Philippine education policy planning.
        </p>
        <div class="flex flex-wrap gap-1.5 pt-0.5">
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[7.5px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">Python</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[7.5px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">React</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[7.5px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">Flask</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[7.5px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">Pandas</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[7.5px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">NumPy</span>
        </div>
      </div>

      <!-- Preview Image -->
      <div class="lg:col-span-6 xl:col-span-7 w-full">
        <div class="rounded-xl overflow-hidden shadow-lg border border-white/10 w-full h-auto">
          <img 
            src="/deped-analytics-comparison.png" 
            alt="DepEd Enrollment Analytics Dashboard" 
            class="w-full h-auto object-contain block select-none bg-black/40" 
          />
        </div>
      </div>
    </div>

    <!-- BOTTOM CONTENT CARD -->
    <div class="bg-brand-light text-brand-dark rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl relative z-10 w-full text-left mb-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-6 xl:gap-x-8 gap-y-5 items-stretch">
        
        <!-- LEFT COLUMN -->
        <div class="lg:col-span-6 space-y-4 flex flex-col justify-between">
          
          <div class="space-y-4">
            <!-- Overview -->
            <div class="space-y-1.5">
              <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Overview
              </h3>
              <div class="bg-white/60 border-l-3 border-brand-accent p-3 md:p-3.5 rounded-r-lg shadow-2xs">
                <p class="text-[10px] md:text-[11px] font-mono text-neutral-700 leading-relaxed text-justify">
                  Built for the Department of Education (DepEd) to replace slow, manual data processing. As a Data Analyst in an 8-member team, I cleaned and preprocessed large enrollment datasets using Python and Pandas, then designed interactive React dashboards to give officials instant access to key education metrics.
                </p>
              </div>
            </div>

            <!-- Features & Capabilities -->
            <div class="space-y-1.5">
              <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
                Features &amp; Capabilities
              </h3>
              <div class="grid grid-cols-1 gap-1.5">
                <div class="bg-white p-2.5 rounded-lg border border-neutral-200/80 flex items-start gap-2 shadow-2xs">
                  <span class="text-[9px] font-black text-brand-accent pt-0.5">01/</span>
                  <p class="text-[10px] md:text-[11px] font-mono text-neutral-600 leading-snug">
                    <strong>Interactive Analytical Visualizations:</strong> Charts and visual graphs built with React, Pandas, and Matplotlib to provide an immediate high-level overview of national enrollment data for DepEd executives and technical staff.
                  </p>
                </div>
                <div class="bg-white p-2.5 rounded-lg border border-neutral-200/80 flex items-start gap-2 shadow-2xs">
                  <span class="text-[9px] font-black text-brand-accent pt-0.5">02/</span>
                  <p class="text-[10px] md:text-[11px] font-mono text-neutral-600 leading-snug">
                    <strong>Multi-Dimensional Data Slicing:</strong> Custom filter controls allowing users to slice and explore data across various dimensions through a Flask API layer to support targeted program and policy planning.
                  </p>
                </div>
                <div class="bg-white p-2.5 rounded-lg border border-neutral-200/80 flex items-start gap-2 shadow-2xs">
                  <span class="text-[9px] font-black text-brand-accent pt-0.5">03/</span>
                  <p class="text-[10px] md:text-[11px] font-mono text-neutral-600 leading-snug">
                    <strong>End-to-End Processing Pipeline:</strong> Streamlined the data pipeline from raw Excel files to data cleaning, JSON conversion, API delivery, and frontend visual rendering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Documentation & Verification -->
          <div class="space-y-1.5 pt-0.5">
            <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Documentation &amp; Verification
            </h3>
            <div class="bg-neutral-900 text-brand-light rounded-lg p-3 font-mono text-[9.5px] md:text-[10.5px] space-y-1 border border-white/10 shadow-inner">
              <p class="text-neutral-500">// CASE STUDY DELIVERABLE VERIFICATION SUCCESSFUL</p>
              <p><span class="text-brand-accent">dataset:</span> Cleaned and preprocessed using Pandas to eliminate inconsistencies</p>
              <p><span class="text-brand-accent">workflow:</span> LIS data workflow mapped from collection to application</p>
              <p><span class="text-brand-accent">architecture:</span> Flask API serving processed JSON data to React frontend</p>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN -->
        <div class="lg:col-span-6 space-y-4 lg:border-l lg:border-neutral-300/70 lg:pl-6 flex flex-col justify-between">
          
          <div class="space-y-4">
            <!-- Analytics & Technical Stack -->
            <div class="space-y-1.5">
              <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.835l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.835.577-1.835h4.907a1 1 0 00.95-.69l1.519-4.674z"/>
                </svg>
                Analytics &amp; Technical Stack
              </h3>
              <div class="grid grid-cols-1 gap-1.5">
                <div class="bg-white px-3 py-1.5 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-1.5 shadow-2xs">
                  <span class="text-[8.5px] font-black uppercase text-neutral-400 w-20 shrink-0">ROLE:</span>
                  <span class="text-[9.5px] md:text-[10.5px] font-mono text-neutral-700">Data Analyst (Data Preprocessing &amp; Visualizations)</span>
                </div>
                <div class="bg-white px-3 py-1.5 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-1.5 shadow-2xs">
                  <span class="text-[8.5px] font-black uppercase text-neutral-400 w-20 shrink-0">TECH STACK:</span>
                  <span class="text-[9.5px] md:text-[10.5px] font-mono text-neutral-700">Python, Pandas, NumPy, Matplotlib, Flask API, React</span>
                </div>
                <div class="bg-white px-3 py-1.5 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-1.5 shadow-2xs">
                  <span class="text-[8.5px] font-black uppercase text-neutral-400 w-20 shrink-0">SCOPE:</span>
                  <span class="text-[9.5px] md:text-[10.5px] font-mono text-neutral-700">Data Preprocessing, Workflow Mapping, Interactive Dashboard UI</span>
                </div>
                <div class="bg-white px-3 py-1.5 rounded-lg border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-1.5 shadow-2xs">
                  <span class="text-[8.5px] font-black uppercase text-neutral-400 w-20 shrink-0">PROJECT TYPE:</span>
                  <span class="text-[9.5px] md:text-[10.5px] font-mono text-neutral-700">Academic Case Study</span>
                </div>
              </div>
            </div>

            <!-- Architecture Pipeline -->
            <div class="space-y-1.5">
              <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"/>
                </svg>
                Design &amp; Architecture
              </h3>
              <div class="bg-white p-2.5 md:p-3 rounded-xl border border-neutral-200/80 shadow-2xs space-y-1">
                <div class="bg-neutral-900 p-2 rounded-lg border border-neutral-800 text-center">
                  <p class="text-[7.5px] font-bold text-neutral-400 uppercase tracking-wider">Input Layer</p>
                  <p class="text-[8.5px] md:text-[9.5px] font-black text-brand-accent uppercase mt-0.5">Raw Excel Data</p>
                </div>
                <div class="text-center text-brand-accent font-bold text-[10px] leading-none select-none">↓</div>
                <div class="bg-neutral-50 p-2 rounded-lg border border-neutral-200 text-center">
                  <p class="text-[7.5px] font-bold text-neutral-400 uppercase tracking-wider">Transformation</p>
                  <p class="text-[8.5px] md:text-[9.5px] font-black text-brand-dark uppercase mt-0.5">Pandas Preprocessing &amp; JSON Storage</p>
                </div>
                <div class="text-center text-brand-accent font-bold text-[10px] leading-none select-none">↓</div>
                <div class="bg-neutral-900 p-2 rounded-lg border border-neutral-800 text-center shadow-2xs">
                  <p class="text-[7.5px] font-bold text-neutral-400 uppercase tracking-wider">REST API Gateway</p>
                  <p class="text-[8.5px] md:text-[9.5px] font-black text-brand-accent uppercase mt-0.5">Flask API Service</p>
                </div>
                <div class="text-center text-brand-accent font-bold text-[10px] leading-none select-none">↓</div>
                <div class="bg-neutral-50 p-2 rounded-lg border border-neutral-200 text-center">
                  <p class="text-[7.5px] font-bold text-neutral-400 uppercase tracking-wider">Visualization</p>
                  <p class="text-[8.5px] md:text-[9.5px] font-black text-brand-dark uppercase mt-0.5">React Dashboard Client</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Final Deployment Metrics -->
          <div class="space-y-1.5 pt-0.5">
            <h3 class="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Final Deployment Metrics
            </h3>
            <div class="bg-white border border-neutral-200 p-2.5 rounded-lg flex items-center gap-2.5 shadow-2xs">
              <div class="w-9 h-9 bg-brand-dark text-brand-accent rounded-md flex items-center justify-center font-bold text-xs tracking-tight border border-neutral-800 shrink-0">
                100%
              </div>
              <div class="font-mono text-[9.5px] md:text-[10.5px] text-neutral-600 leading-snug">
                Delivered a reliable real-time dashboard prototype with interactive drill-downs, fulfilling DepEd requirements for data-driven decision-making.
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 mt-5 border-t border-neutral-300/60">
        <a 
          href="https://drive.google.com/file/d/1THxap3dsbevG4A7cm7PXwx9W9jdhNTvL/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-brand-dark hover:bg-neutral-800 text-brand-light text-[9.5px] md:text-[10.5px] font-black tracking-widest uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-xs active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12H4V4z"/>
          </svg>
          Presentation
        </a>
        <a 
          href="https://drive.google.com/file/d/1zBqpvE8qbsH2ZI3wAXmD5q3j3meTZzqK/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="border border-[#0e0909] hover:bg-brand-dark hover:text-brand-light text-brand-dark text-[9.5px] md:text-[10.5px] font-black tracking-widest uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Watch System Demo Video
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>