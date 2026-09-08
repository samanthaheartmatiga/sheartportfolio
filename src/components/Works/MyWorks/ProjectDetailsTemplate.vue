<template>
  <div class="w-full min-h-screen bg-gradient-to-b from-[#4A000E] via-[#35000A] to-[#200005] pt-10 pb-16" :key="projectId">
    <!-- 1. Crypto Pipeline Telemetry -->
    <CryptoDetails 
      v-if="projectId === 'crypto-pipeline' || projectId === 'crypto'" 
      @close="handleClose" 
    />

    <!-- 2. Supply Chain Dashboard -->
    <SupplyChainDetails 
      v-else-if="projectId === 'supply-chain'" 
      @close="handleClose" 
    />

    <!-- 3. Barklet -->
    <BarkletDetails 
      v-else-if="projectId === 'barklet'" 
      @close="handleClose" 
    />

    <!-- 4. Clientora -->
    <ClientoraDetails 
      v-else-if="projectId === 'clientora'" 
      @close="handleClose" 
    />

    <!-- 5. PhiMAPix -->
    <PhimapixDetails 
      v-else-if="projectId === 'phimapix'" 
      @close="handleClose" 
    />

    <!-- 6. DepEd Enrollment Analytics -->
    <DepedAnalytics 
      v-else-if="projectId === 'analytics' || projectId === 'deped'" 
      @close="handleClose" 
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CryptoDetails from './ProjectDetails/CryptoDetails.vue'
import SupplyChainDetails from './ProjectDetails/SupplyChainDetails.vue'
import BarkletDetails from './ProjectDetails/BarkletDetails.vue'
import ClientoraDetails from './ProjectDetails/ClientoraDetails.vue'
import DepedAnalytics from './ProjectDetails/DepedAnalytics.vue'
import PhimapixDetails from './ProjectDetails/PhimapixDetails.vue'

defineProps({
  projectId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])
const router = useRouter()

const handleClose = () => {
  emit('close')
  if (router) {
    router.push('/works')
  }
}
</script>