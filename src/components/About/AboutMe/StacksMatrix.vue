<template>
  <div class="pt-5 pb-6 px-4 md:px-5 lg:px-6 space-y-3 text-left font-mono">
    
    <!-- HEADER BLOCK -->
    <h2 class="text-[10.5px] md:text-[11.5px] font-black tracking-widest text-brand-main uppercase border-b border-neutral-300/80 pb-1.5 flex items-center gap-1.5">
      <svg class="w-3.5 h-3.5 text-brand-main" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <span>Technical Core Matrix</span>
    </h2>

    <!-- LAYER 01: EXPANDED TECHNICAL PROFICIENCY MATRIX TABLE -->
    <div class="w-full overflow-hidden border border-neutral-300/70 rounded-md bg-white shadow-2xs">
      <table class="w-full text-left border-collapse text-[9.5px] md:text-[10px]">
        <thead>
          <tr class="bg-neutral-50 border-b border-neutral-300/70 font-mono text-[8px] text-neutral-400 font-black tracking-widest uppercase">
            <th class="py-1.5 px-3 w-1/4 tracking-wider">DOMAIN_VECTOR</th>
            <th class="py-1.5 px-3 w-5/12 tracking-wider text-brand-main">PROFICIENT / CORE STACK</th>
            <th class="py-1.5 px-3 tracking-wider">ARCHITECTURE / PIPELINE FOCUS</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200/60 text-neutral-700">
          <!-- Row 1: Data Engineering & ETL -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Data Engineering &amp; ETL</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">Batch Ingestion, Schema Enforcement (Pydantic), Idempotent Loading, OpenPyXL, Data Cleaning</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Automated Pipeline Orchestration, Circuit-Breaker Design</td>
          </tr>

          <!-- Row 2: Languages & Frameworks -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Languages &amp; Frameworks</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">Python (3.12), SQL, PostgreSQL, Pandas, Streamlit, Vue.js, Tailwind CSS</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Data validation schemas, state reactivity, micro-app prototyping</td>
          </tr>

          <!-- Row 3: Database & Warehouse Analytics -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Database &amp; Warehouse Analytics</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">Relational Data Modeling, PostgreSQL Window Functions (AVG, STDDEV, ROW_NUMBER), Database Views</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Scheduled Automated Jobs (pg_cron), Connection Pooling</td>
          </tr>

          <!-- Row 4: Cloud & DevOps -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Cloud &amp; DevOps</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">GitHub Actions (CI/CD &amp; Cron Workflows), Supabase, Streamlit Community Cloud, Git / GitHub</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Environment &amp; Secrets Management, Continuous Deployment</td>
          </tr>

          <!-- Row 5: Data Visualization & Telemetry -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">Visualization &amp; Telemetry</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">Plotly Express, Real-Time Time-Series Monitoring, UI Design Systems</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Interactive Metrics Dashboards, Automated Telemetry Reporting</td>
          </tr>

          <!-- Row 6: QA & Systems Reliability -->
          <tr class="hover:bg-brand-main/1 transition-colors duration-150 group">
            <td class="py-1.5 px-3 font-bold text-neutral-800 transition-colors group-hover:text-brand-main">QA &amp; Systems Reliability</td>
            <td class="py-1.5 px-3 font-semibold text-neutral-800 leading-snug">Functional Testing, Test Suite Writing, UI/UX Audits, Bug Documentation</td>
            <td class="py-1.5 px-3 text-neutral-500 font-normal leading-snug">Data integrity verifications, edge-case validation workflows</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- LAYER 02: HIGH-DENSITY COMPACT PRACTICES GRID (+0.5px Boost) -->
    <div class="border-t border-dashed border-neutral-300/60 pt-2 space-y-1.5 text-[10px]">
      
      <span class="text-[8px] font-mono font-black text-neutral-400 uppercase tracking-widest block">
        // Engineering Practices
      </span>

      <div class="space-y-1 max-w-3xl text-[10px]">
        
        <!-- Practice 1 -->
        <div class="flex items-start gap-1.5 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[8.5px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-105 transition-transform">[01] ETL_ORCH //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Resilient Pipeline Orchestration:</strong>
            Circuit-breaker architecture, scheduled cron extraction, strict schema enforcement, and idempotent ingestion.
          </p>
        </div>

        <!-- Practice 2 -->
        <div class="flex items-start gap-1.5 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[8.5px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-105 transition-transform">[02] DWH_MODL //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Warehouse &amp; Relational Analytics:</strong>
            Statistical window functions, schema normalization, optimized relational views, indexing, and connection pool management.
          </p>
        </div>

        <!-- Practice 3 -->
        <div class="flex items-start gap-1.5 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[8.5px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-105 transition-transform">[03] CI_OPS //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Automated Workflows &amp; Cloud Ops:</strong>
            GitHub Actions cron jobs, automated dataset testing, cloud deployment triggers, and encrypted secret management.
          </p>
        </div>

        <!-- Practice 4 -->
        <div class="flex items-start gap-1.5 text-neutral-700 font-light leading-snug group/row">
          <span class="font-mono text-[8.5px] font-bold text-brand-main shrink-0 mt-0.5 group-hover/row:scale-105 transition-transform">[04] TEL_DASH //</span>
          <p>
            <strong class="font-bold text-neutral-800 mr-1">Telemetry &amp; Reactive Dashboards:</strong>
            Real-time time-series telemetry visualization, interactive chart components, and dynamic alerting metrics.
          </p>
        </div>

      </div>
    </div>

  </div>
</template>