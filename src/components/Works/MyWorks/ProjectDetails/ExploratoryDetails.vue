<template>
  <div class="w-full max-w-none font-mono text-brand-light -mt-4 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24">
    
    <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center pb-10">
      <div class="lg:col-span-6 xl:col-span-5 text-left space-y-4">
        <button 
          @click.stop="$emit('close')" 
          class="flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-neutral-300 hover:text-brand-accent transition-colors active:scale-95 duration-200 cursor-pointer"
        >
          <span class="font-sans text-[13px]">←</span> Back to Works
        </button>
        <div class="text-[10px] font-black tracking-widest text-brand-accent uppercase pt-1">
          DATA &amp; ANALYTICS // EXPLORATORY ANALYSIS
        </div>
        <h2 class="text-[33px] md:text-[37px] lg:text-[49px] font-normal font-serif text-brand-light leading-tight tracking-wide">
          Titanic Exploratory Data Analysis
        </h2>
        <p class="text-[13px] md:text-[15px] text-neutral-300/80 font-mono leading-relaxed tracking-wide">
          A statistical investigation designed to uncover demographic, socioeconomic, and behavioral determinants of passenger survival during the 1912 maritime disaster.
        </p>
        <div class="flex flex-wrap gap-2 pt-1">
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Python</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Pandas</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">NumPy</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Matplotlib</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Seaborn</span>
          <span class="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">Jupyter Notebook</span>
        </div>
      </div>

      <div class="lg:col-span-6 xl:col-span-7 w-full">
        <div class="rounded-[1.2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 w-full h-auto">
          <img 
            src="/exploratory-bar.png" 
            alt="Titanic Exploratory Data Analysis" 
            class="w-full h-auto object-contain block select-none bg-black/40" 
          />
        </div>
      </div>
    </div>

    <div class="bg-brand-light text-brand-dark rounded-4xl p-6 sm:p-10 md:p-12 shadow-2xl relative z-10 w-full text-left mb-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-14 gap-y-8 items-stretch">
        
        <div class="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          <div class="space-y-6">
            <div class="space-y-2.5">
              <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Overview
              </h3>
              <div class="bg-white/60 border-l-4 border-brand-accent p-4 md:p-5 rounded-r-xl shadow-xs">
                <p class="text-[12px] md:text-[13px] font-mono text-neutral-700 leading-relaxed text-justify">
                  Titanic Exploratory Data Analysis (EDA) is a data project that looks into what helped passengers survive the 1912 shipwreck. Using a 418-row dataset from Kaggle with 12 features, this project cleans missing data, analyzes passenger stats, and creates clear charts to show how gender, age, ticket class, and family size affected survival.
                </p>
              </div>
            </div>

            <div class="space-y-2.5">
              <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
                Features &amp; Capabilities
              </h3>
              <div class="grid grid-cols-1 gap-2.5">
                <div class="bg-white p-3.5 rounded-xl border border-neutral-200/80 flex items-start gap-3 shadow-xs">
                  <span class="text-[11px] font-black text-brand-accent pt-0.5">01/</span>
                  <p class="text-[12px] md:text-[13px] font-mono text-neutral-600 leading-normal">
                    <strong>Data Sanitation &amp; Quality Profiling:</strong> Identified structural missingness across Age (86 missing), Fare (1 missing), and Cabin (majority missing); applied standardized imputation protocols and automated category encoding.
                  </p>
                </div>
                <div class="bg-white p-3.5 rounded-xl border border-neutral-200/80 flex items-start gap-3 shadow-xs">
                  <span class="text-[11px] font-black text-brand-accent pt-0.5">02/</span>
                  <p class="text-[12px] md:text-[13px] font-mono text-neutral-600 leading-normal">
                    <strong>Demographic &amp; Socioeconomic Segmentation:</strong> Evaluated survival disparities across Sex, Pclass, and Age, uncovering extreme gender-based survival filters and pricing-to-class stratification.
                  </p>
                </div>
                <div class="bg-white p-3.5 rounded-xl border border-neutral-200/80 flex items-start gap-3 shadow-xs">
                  <span class="text-[11px] font-black text-brand-accent pt-0.5">03/</span>
                  <p class="text-[12px] md:text-[13px] font-mono text-neutral-600 leading-normal">
                    <strong>Correlation &amp; Multivariate Relational Mapping:</strong> Generated statistical heatmaps and relational plots demonstrating the positive link between Age and Fare, the inverse relationship between Fare and Pclass, and familial co-travel dynamics (SibSp vs. Parch).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-2.5 pt-1">
            <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Documentation &amp; Verification
            </h3>
            <div class="bg-neutral-900 text-brand-light rounded-xl p-4 font-mono text-[11.5px] md:text-[12.5px] space-y-1.5 border border-white/10 shadow-inner">
              <p class="text-neutral-500">// EXPLORATORY DATA ANALYSIS PIPELINE VERIFIED</p>
              <p><span class="text-brand-accent">dataset:</span> 418 rows x 12 features loaded from Kaggle repository</p>
              <p><span class="text-brand-accent">imputation:</span> Missing Cabin, Age, and Fare records profiled and transformed</p>
              <p><span class="text-brand-accent">univariate_analysis:</span> Frequency distribution graphs plotted for Sex, Pclass, and Embarked</p>
              <p><span class="text-brand-accent">multivariate_analysis:</span> Heatmap generated for Age, Fare, SibSp, and Parch correlations</p>
              <p><span class="text-brand-accent">validation:</span> End-to-end notebook execution verified via Google Colab</p>
            </div>
          </div>

        </div>

        <div class="lg:col-span-6 space-y-6 lg:border-l lg:border-neutral-300/70 lg:pl-10 flex flex-col justify-between">
          
          <div class="space-y-6">
            <div class="space-y-2.5">
              <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.835l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.835.577-1.835h4.907a1 1 0 00.95-.69l1.519-4.674z"/>
                </svg>
                Analytics &amp; Technical Stack
              </h3>
              <div class="grid grid-cols-1 gap-2">
                <div class="bg-white px-3.5 py-2 rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-2 shadow-xs">
                  <span class="text-[10px] font-black uppercase text-neutral-400 w-24 shrink-0">ROLE:</span>
                  <span class="text-[11.5px] md:text-[12.5px] font-mono text-neutral-700">Data Analyst / Exploratory Data Architecture (Samantha Heart S. Matiga)</span>
                </div>
                <div class="bg-white px-3.5 py-2 rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-2 shadow-xs">
                  <span class="text-[10px] font-black uppercase text-neutral-400 w-24 shrink-0">TECH STACK:</span>
                  <span class="text-[11.5px] md:text-[12.5px] font-mono text-neutral-700">Python, Pandas, NumPy, Matplotlib, Seaborn, Google Colab</span>
                </div>
                <div class="bg-white px-3.5 py-2 rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-2 shadow-xs">
                  <span class="text-[10px] font-black uppercase text-neutral-400 w-24 shrink-0">SCOPE:</span>
                  <span class="text-[11.5px] md:text-[12.5px] font-mono text-neutral-700">Data Cleaning &amp; Imputation, Distributions, Correlation Heatmaps, Survival Modeling</span>
                </div>
                <div class="bg-white px-3.5 py-2 rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-2 shadow-xs">
                  <span class="text-[10px] font-black uppercase text-neutral-400 w-24 shrink-0">DATASET:</span>
                  <span class="text-[11.5px] md:text-[12.5px] font-mono text-neutral-700">Kaggle Titanic Dataset (418 Rows × 12 Features, Subsampled Target)</span>
                </div>
              </div>
            </div>

            <div class="space-y-2.5">
              <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"/>
                </svg>
                Design &amp; Architecture
              </h3>
              <div class="bg-white p-3.5 md:p-4 rounded-2xl border border-neutral-200/80 shadow-xs space-y-1.5">
                
                <div class="bg-neutral-900 p-2.5 rounded-xl border border-neutral-800 text-center">
                  <p class="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">Ingestion &amp; Cleaning</p>
                  <p class="text-[10px] md:text-[11px] font-black text-brand-accent uppercase mt-0.5">CSV Ingestion • Structural Audit • Imputation</p>
                </div>

                <div class="text-center text-brand-accent font-bold text-xs leading-none select-none">↓</div>

                <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                  <p class="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">Univariate &amp; Descriptive EDA</p>
                  <p class="text-[10px] md:text-[11px] font-black text-brand-dark uppercase mt-0.5">Central Tendency • Frequency Counts • Bar Plots</p>
                </div>

                <div class="text-center text-brand-accent font-bold text-xs leading-none select-none">↓</div>

                <div class="bg-neutral-900 p-2.5 rounded-xl border border-neutral-800 text-center shadow-xs">
                  <p class="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">Bivariate &amp; Correlation Matrix</p>
                  <p class="text-[10px] md:text-[11px] font-black text-brand-accent uppercase mt-0.5">Seaborn Heatmaps • Area Plots • Class Stratification</p>
                </div>

                <div class="text-center text-brand-accent font-bold text-xs leading-none select-none">↓</div>

                <div class="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200 text-center">
                  <p class="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">Insights &amp; Model Ready</p>
                  <p class="text-[10px] md:text-[11px] font-black text-brand-dark uppercase mt-0.5">Survival Predictors • Ethical / Historical Inferences</p>
                </div>

              </div>
            </div>
          </div>

          <div class="space-y-2.5 pt-1">
            <h3 class="text-[12px] font-black tracking-widest uppercase text-brand-dark flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Final Deployment Metrics
            </h3>
            <div class="bg-white border border-neutral-200 p-3.5 rounded-xl flex items-center gap-3.5 shadow-xs">
              <div class="w-11 h-11 bg-brand-dark text-brand-accent rounded-lg flex items-center justify-center font-bold text-[14px] tracking-tight border border-neutral-800 shrink-0">
                100%
              </div>
              <div class="font-mono text-[11.5px] md:text-[12.5px] text-neutral-600 leading-snug">
                Completed full exploratory data lifecycle and visual reporting, establishing primary baseline metrics and data-cleaning foundations for subsequent predictive survival modeling.
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Action Buttons: Open Colab (Left) & Documentation / Repo (Right) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-neutral-300/60">
        <a 
          href="https://colab.research.google.com/drive/1g9H4UH1h1MFBjvYQeu9QGR_N1K3JA6Sv?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-brand-dark hover:bg-neutral-800 text-brand-light text-[11px] md:text-[13px] font-black tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          Open Colab Notebook
        </a>
        <a 
          href="https://docs.google.com/document/d/1_3AEjnFX1JH_bGNtmRQ8GDvK-BZZPjMxf9P5_eI5WYE/edit?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          class="border border-[#0e0909] hover:bg-brand-dark hover:text-brand-light text-brand-dark text-[11px] md:text-[13px] font-black tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99] cursor-pointer"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Documentation
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>