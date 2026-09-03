<template>
  <div class="w-full min-h-screen bg-gradient-to-b from-[#4A000E] via-[#35000A] to-[#200005] pt-10 pb-16" :key="projectId">
    <SupplyChainDetails 
      v-if="projectId === 'supply-chain'" 
      @close="handleClose" 
    />

    <BarkletDetails 
      v-else-if="projectId === 'barklet'" 
      @close="handleClose" 
    />

    <ClientoraDetails 
      v-else-if="projectId === 'clientora'" 
      @close="handleClose" 
    />

    <PhimapixDetails 
      v-else-if="projectId === 'phimapix'" 
      @close="handleClose" 
    />

    <DepedAnalytics 
      v-else-if="projectId === 'analytics' || projectId === 'deped'" 
      @close="handleClose" 
    />

    <ExploratoryDetails 
      v-else-if="projectId === 'exploratory' || projectId === 'titanic' || projectId === 'eda'" 
      @close="handleClose" 
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SupplyChainDetails from './ProjectDetails/SupplyChainDetails.vue'
import BarkletDetails from './ProjectDetails/BarkletDetails.vue'
import ClientoraDetails from './ProjectDetails/ClientoraDetails.vue'
import DepedAnalytics from './ProjectDetails/DepedAnalytics.vue'
import ExploratoryDetails from './ProjectDetails/ExploratoryDetails.vue'
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