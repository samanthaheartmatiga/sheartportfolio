<template>
  <!-- Clean root layout tag to remain static, avoiding gap distortions -->
  <div class="w-full font-mono select-none text-[#161616]">
    
    <!-- TOP LAYER: Stepped Asymmetric Header Bar -->
    <div class="grid grid-cols-1 md:grid-cols-12 w-full items-stretch relative z-10 gap-y-4 md:gap-y-0">
      
      <!-- Top Left: Title Block -->
      <div class="md:col-span-7 bg-[#b38f6f] text-[#161616] pt-4 pb-2 px-8 rounded-tl-[2.5rem] flex flex-col justify-center">
        
        <!-- Structural containment envelope to match your exact portfolio layout logic -->
        <div>
          <h2 class="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#161616] overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typing">
            GET IN TOUCH.
          </h2>
        </div>
        
        <p class="text-[11px] text-[#161616]/80 uppercase tracking-widest mt-1.5 leading-relaxed">
          Have any questions or special requests?<br />
          Feel free to reach out directly.
        </p>
      </div>

      <!-- Top Right: Light Background CTA Banner Block Container Frame -->
      <div class="md:col-span-5 pb-4 md:pl-4 flex flex-col">
        <div class="bg-[#F2F1ED] border border-neutral-200/60 rounded-none rounded-tr-[2.5rem] p-6 text-center md:text-left shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full flex items-center justify-center">
          <p class="text-xs font-black uppercase tracking-wider text-[#161616] leading-relaxed">
            INITIALIZE CONNECTION TODAY TO EXPLORE COGNITIVE HORIZONS AND FUTURE SYSTEMS!
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN PANEL BODY: Full Bleed Message Card Deck -->
    <div class="bg-[#b38f6f] p-6 sm:p-8 md:p-10 rounded-b-[2.5rem] relative z-0">
      
      <!-- Inner Form Container: Soft Pearl -->
      <div class="bg-[#F2F1ED] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
        <div>
          
          <!-- FIXED: Added 'novalidate' to override native tooltips and capture with custom logic -->
          <form @submit.prevent="dispatchMessage" novalidate class="space-y-4 text-left">
            
            <!-- Input Matrix Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Field 1: Identity -->
              <div class="space-y-1 group relative">
                <label class="block text-[9px] font-black tracking-widest uppercase text-neutral-400 group-focus-within:text-[#161616] transition-colors">Identity</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  placeholder="Your Full Name"
                  class="w-full bg-white border border-[#161616] rounded-xl px-3.5 py-2.5 text-xs text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all"
                  @input="clearValidationError('name')"
                  required
                />
                <!-- CUSTOM CRIMSON MONO TOOLTIP -->
                <div v-if="validationErrors.name" class="absolute z-30 left-4 bottom-[calc(100%-24px)] bg-[#710014] text-[#F2F1ED] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-all duration-200 animate-bounce">
                  <span class="text-xs">⚠️</span> {{ validationErrors.name }}
                  <div class="absolute bottom-[-4px] left-4 w-2 h-2 bg-[#710014] rotate-45"></div>
                </div>
              </div>

              <!-- Field 2: Contact Email -->
              <div class="space-y-1 group relative">
                <label class="block text-[9px] font-black tracking-widest uppercase text-neutral-400 group-focus-within:text-[#161616] transition-colors">Contact Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  placeholder="email@example.com"
                  class="w-full bg-white border border-[#161616] rounded-xl px-3.5 py-2.5 text-xs text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all"
                  @input="clearValidationError('email')"
                  required
                />
                <!-- CUSTOM CRIMSON MONO TOOLTIP -->
                <div v-if="validationErrors.email" class="absolute z-30 left-4 bottom-[calc(100%-24px)] bg-[#710014] text-[#F2F1ED] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-all duration-200 animate-bounce">
                  <span class="text-xs">⚠️</span> {{ validationErrors.email }}
                  <div class="absolute bottom-[-4px] left-4 w-2 h-2 bg-[#710014] rotate-45"></div>
                </div>
              </div>
            </div>

            <!-- Field 3: Subject of Interest -->
            <div class="space-y-1 group relative">
              <label class="block text-[9px] font-black tracking-widest uppercase text-neutral-400 group-focus-within:text-[#161616] transition-colors">Subject of Interest</label>
              <input 
                v-model="form.subject"
                type="text" 
                placeholder="e.g. System Redesign"
                class="w-full bg-white border border-[#161616] rounded-xl px-3.5 py-2.5 text-xs text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all"
                @input="clearValidationError('subject')"
                required
              />
              <!-- CUSTOM CRIMSON MONO TOOLTIP -->
              <div v-if="validationErrors.subject" class="absolute z-30 left-4 bottom-[calc(100%-24px)] bg-[#710014] text-[#F2F1ED] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-all duration-200 animate-bounce">
                <span class="text-xs">⚠️</span> {{ validationErrors.subject }}
                <div class="absolute bottom-[-4px] left-4 w-2 h-2 bg-[#710014] rotate-45"></div>
              </div>
            </div>

            <!-- Field 4: Message Payload -->
            <div class="space-y-1 group relative">
              <label class="block text-[9px] font-black tracking-widest uppercase text-neutral-400 group-focus-within:text-[#161616] transition-colors">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                placeholder="Briefly describe your vision......"
                class="w-full bg-white border border-[#161616] rounded-xl px-3.5 py-2.5 text-xs text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all resize-none leading-relaxed"
                @input="clearValidationError('message')"
                required
              ></textarea>
              <!-- CUSTOM CRIMSON MONO TOOLTIP -->
              <div v-if="validationErrors.message" class="absolute z-30 left-4 bottom-[calc(100%-24px)] bg-[#710014] text-[#F2F1ED] text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-all duration-200 animate-bounce">
                <span class="text-xs">⚠️</span> {{ validationErrors.message }}
                <div class="absolute bottom-[-4px] left-4 w-2 h-2 bg-[#710014] rotate-45"></div>
              </div>
            </div>

            <!-- FEEDBACK STATUS ALERTS -->
            <div v-if="statusMessage" class="text-[11px] font-black tracking-wider uppercase transition-all duration-300 shadow-none" :class="statusType === 'success' ? 'text-emerald-600' : 'text-rose-600'">
              // {{ statusMessage }}
            </div>

            <!-- SUBMIT MODULE RUNTIME ACTION -->
            <div class="pt-2">
              <button 
                type="submit"
                class="w-full bg-[#161616] hover:bg-neutral-800 active:bg-black text-[#F2F1ED] text-[10px] font-black tracking-widest uppercase py-3.5 rounded-xl shadow-md transition-all active:scale-[0.995] flex items-center justify-center"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Web3Forms background state processes
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref('')

// FIXED: Added local theme error hooks
const validationErrors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const clearValidationError = (field) => {
  validationErrors.value[field] = ''
}

const validateForm = () => {
  let isValid = true
  // Reset previous tracking
  validationErrors.value = { name: '', email: '', subject: '', message: '' }

  if (!form.value.name.trim()) {
    validationErrors.value.name = 'Please fill out this field.'
    isValid = false
  }
  
  if (!form.value.email.trim()) {
    validationErrors.value.email = 'Please fill out this field.'
    isValid = false
  } else {
    // Standard quick regex to enforce validation mapping blocks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      validationErrors.value.email = 'Please enter a valid email address.'
      isValid = false
    }
  }

  if (!form.value.subject.trim()) {
    validationErrors.value.subject = 'Please fill out this field.'
    isValid = false
  }

  if (!form.value.message.trim()) {
    validationErrors.value.message = 'Please fill out this field.'
    isValid = false
  }

  return isValid
}

const dispatchMessage = async () => {
  // FIXED: Pre-intercept submission checking using custom layout tools
  if (!validateForm()) return

  isSubmitting.value = true
  statusMessage.value = ''
  
  const formData = {
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
    name: form.value.name,
    email: form.value.email,
    subject: `Portfolio Contact Submission: ${form.value.subject}`,
    message: form.value.message
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (result.success) {
      statusType.value = 'success'
      statusMessage.value = 'Message sent successfully!'
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      statusType.value = 'error'
      statusMessage.value = 'Error. Unable to send message.'
    }
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = 'Network error. Please try again.'
    console.error('Submission processing failure sequence caught:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ==========================================
    TERMINAL TYPOGRAPHY ANIMATION ENGINE
   ========================================== */
@keyframes terminalTyping {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes terminalCursor {
  0%, 99% { border-color: #161616; }
  50% { border-color: transparent; }
  100% { border-color: transparent; }
}

.animate-typing {
  display: inline-block;
  animation: 
    terminalTyping 1.1s cubic-bezier(0.4, 0, 0.2, 1) both,
    terminalCursor 0.25s step-end 1 alternate forwards; 
}
</style>