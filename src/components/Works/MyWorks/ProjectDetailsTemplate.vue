<template>
  <div class="w-full min-h-screen bg-gradient-to-b from-[#4A000E] via-[#35000A] to-[#200005] pt-10 pb-16" :key="projectId">
    <!-- 1. Barklet -->
    <BarkletDetails 
      v-if="projectId === 'barklet'" 
      @close="handleClose" 
    />

    <!-- 2. Clientora -->
    <ClientoraDetails 
      v-else-if="projectId === 'clientora'" 
      @close="handleClose" 
    />

    <!-- 3. PhiMAPix -->
    <PhimapixDetails 
      v-else-if="projectId === 'phimapix'" 
      @close="handleClose" 
    />

    <!-- 4. DepEd Enrollment Analytics -->
    <DepedAnalytics 
      v-else-if="projectId === 'analytics' || projectId === 'deped'" 
      @close="handleClose" 
    />

    <!-- 5. Exploratory Data Analysis -->
    <ExploratoryDetails 
      v-else-if="projectId === 'exploratory' || projectId === 'titanic' || projectId === 'eda'" 
      @close="handleClose" 
    />

    <!-- 6. Heart's Mini Corner (Flask) -->
    <FlaskDetails 
      v-else-if="projectId === 'flask'" 
      @close="handleClose" 
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BarkletDetails from './ProjectDetails/BarkletDetails.vue'
import ClientoraDetails from './ProjectDetails/ClientoraDetails.vue'
import DepedAnalytics from './ProjectDetails/DepedAnalytics.vue'
import ExploratoryDetails from './ProjectDetails/ExploratoryDetails.vue'
import FlaskDetails from './ProjectDetails/FlaskDetails.vue'
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