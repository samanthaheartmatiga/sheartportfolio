<template>
  <div class="w-full font-mono select-none text-[#161616]">
    
    <!-- TOP LAYER: Stepped Asymmetric Header Bar -->
    <div class="grid grid-cols-1 md:grid-cols-12 w-full items-stretch relative z-10 gap-y-2 md:gap-y-0">
      
      <!-- Top Left: Title Block -->
      <div class="md:col-span-7 bg-[#b38f6f] text-[#161616] pt-3.5 pb-2.5 px-5 sm:px-6 rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl flex flex-col justify-center">
        <div>
          <h2 class="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#161616] overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-typing">
            GET IN TOUCH.
          </h2>
        </div>
        
        <p class="text-[9.5px] sm:text-[10px] text-[#161616]/80 uppercase tracking-widest mt-1 leading-relaxed">
          Have any questions or special requests?<br />
          Feel free to reach out directly.
        </p>
      </div>

      <!-- Top Right: Light Background CTA Banner Block Container Frame -->
      <div class="md:col-span-5 pb-3 md:pb-4 md:pl-4 flex flex-col">
        <div class="bg-[#F2F1ED] border border-neutral-200/60 rounded-xl md:rounded-none md:rounded-tr-2xl p-3.5 sm:p-4 text-center md:text-left shadow-2xs h-full flex items-center justify-center">
          <p class="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-[#161616] leading-snug">
            INITIALIZE CONNECTION TODAY TO EXPLORE COGNITIVE HORIZONS AND FUTURE SYSTEMS!
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN PANEL BODY: Message Card Deck -->
    <div class="bg-[#b38f6f] p-4 sm:p-5 md:p-6 rounded-b-2xl relative z-0">
      
      <!-- Inner Form Container: Soft Pearl -->
      <div class="bg-[#F2F1ED] rounded-xl p-4.5 sm:p-6 flex flex-col justify-between shadow-xs transition-all duration-300">
        <div>
          <form @submit.prevent="dispatchMessage" novalidate class="space-y-3.5 text-left">
            
            <!-- Input Matrix Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <!-- Field 1: Identity -->
              <div class="space-y-0.5 group relative">
                <label class="block text-[8.5px] font-black tracking-widest uppercase text-neutral-500 group-focus-within:text-[#161616] transition-colors">Identity</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  placeholder="Your Full Name"
                  class="w-full bg-white border border-[#161616]/80 rounded-lg px-2.5 py-2 text-[11px] text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all font-mono"
                  @input="clearValidationError('name')"
                  required
                />
                <!-- CUSTOM CRIMSON MONO TOOLTIP -->
                <div v-if="validationErrors.name" class="absolute z-30 left-2 bottom-[calc(100%-10px)] bg-[#710014] text-[#F2F1ED] text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md flex items-center gap-1 animate-bounce">
                  <span>⚠️</span> {{ validationErrors.name }}
                  <div class="absolute bottom-[-3px] left-3 w-1.5 h-1.5 bg-[#710014] rotate-45"></div>
                </div>
              </div>

              <!-- Field 2: Contact Email -->
              <div class="space-y-0.5 group relative">
                <label class="block text-[8.5px] font-black tracking-widest uppercase text-neutral-500 group-focus-within:text-[#161616] transition-colors">Contact Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  placeholder="email@example.com"
                  class="w-full bg-white border border-[#161616]/80 rounded-lg px-2.5 py-2 text-[11px] text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all font-mono"
                  @input="clearValidationError('email')"
                  required
                />
                <!-- CUSTOM CRIMSON MONO TOOLTIP -->
                <div v-if="validationErrors.email" class="absolute z-30 left-2 bottom-[calc(100%-10px)] bg-[#710014] text-[#F2F1ED] text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md flex items-center gap-1 animate-bounce">
                  <span>⚠️</span> {{ validationErrors.email }}
                  <div class="absolute bottom-[-3px] left-3 w-1.5 h-1.5 bg-[#710014] rotate-45"></div>
                </div>
              </div>
            </div>

            <!-- Field 3: Subject of Interest -->
            <div class="space-y-0.5 group relative">
              <label class="block text-[8.5px] font-black tracking-widest uppercase text-neutral-500 group-focus-within:text-[#161616] transition-colors">Subject of Interest</label>
              <input 
                v-model="form.subject"
                type="text" 
                placeholder="e.g. Pipeline Architecture / Systems Collaboration"
                class="w-full bg-white border border-[#161616]/80 rounded-lg px-2.5 py-2 text-[11px] text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all font-mono"
                @input="clearValidationError('subject')"
                required
              />
              <!-- CUSTOM CRIMSON MONO TOOLTIP -->
              <div v-if="validationErrors.subject" class="absolute z-30 left-2 bottom-[calc(100%-10px)] bg-[#710014] text-[#F2F1ED] text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md flex items-center gap-1 animate-bounce">
                <span>⚠️</span> {{ validationErrors.subject }}
                <div class="absolute bottom-[-3px] left-3 w-1.5 h-1.5 bg-[#710014] rotate-45"></div>
              </div>
            </div>

            <!-- Field 4: Message Payload -->
            <div class="space-y-0.5 group relative">
              <label class="block text-[8.5px] font-black tracking-widest uppercase text-neutral-500 group-focus-within:text-[#161616] transition-colors">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                placeholder="Briefly describe your vision......"
                class="w-full bg-white border border-[#161616]/80 rounded-lg px-2.5 py-2 text-[11px] text-[#161616] placeholder-neutral-400 focus:outline-none focus:border-[#161616] focus:ring-1 focus:ring-[#161616]/20 transition-all resize-none leading-relaxed font-mono"
                @input="clearValidationError('message')"
                required
              ></textarea>
              <!-- CUSTOM CRIMSON MONO TOOLTIP -->
              <div v-if="validationErrors.message" class="absolute z-30 left-2 bottom-[calc(100%-10px)] bg-[#710014] text-[#F2F1ED] text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md flex items-center gap-1 animate-bounce">
                <span>⚠️</span> {{ validationErrors.message }}
                <div class="absolute bottom-[-3px] left-3 w-1.5 h-1.5 bg-[#710014] rotate-45"></div>
              </div>
            </div>

            <!-- FEEDBACK STATUS ALERTS -->
            <div v-if="statusMessage" class="text-[10px] font-black tracking-wider uppercase transition-all duration-300" :class="statusType === 'success' ? 'text-emerald-700' : 'text-rose-700'">
              // {{ statusMessage }}
            </div>

            <!-- SUBMIT ACTION -->
            <div class="pt-1.5">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-[#161616] hover:bg-neutral-800 active:bg-black text-[#F2F1ED] text-[9.5px] font-black tracking-widest uppercase py-2.5 rounded-lg shadow-xs transition-all active:scale-[0.995] flex items-center justify-center cursor-pointer disabled:opacity-60"
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

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref('')

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
  validationErrors.value = { name: '', email: '', subject: '', message: '' }

  if (!form.value.name.trim()) {
    validationErrors.value.name = 'Please fill out this field.'
    isValid = false
  }
  
  if (!form.value.email.trim()) {
    validationErrors.value.email = 'Please fill out this field.'
    isValid = false
  } else {
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
    console.error('Submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
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