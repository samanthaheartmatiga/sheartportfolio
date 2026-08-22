<template>
  <div class="w-full" :key="projectId">
    <!-- 1. Clientora -->
    <ClientoraDetails 
      v-if="projectId === 'clientora'" 
      @close="$emit('close')" 
    />

    <!-- 2. PhiMAPix -->
    <PhimapixDetails 
      v-else-if="projectId === 'phimapix'" 
      @close="$emit('close')" 
    />

    <!-- 3. DepEd Enrollment Analytics -->
    <DepedAnalytics 
      v-else-if="projectId === 'analytics' || projectId === 'deped'" 
      @close="$emit('close')" 
    />

    <!-- 4. Exploratory Data Analysis -->
    <ExploratoryDetails 
      v-else-if="projectId === 'exploratory' || projectId === 'titanic' || projectId === 'eda'" 
      @close="$emit('close')" 
    />

    <!-- 5. Heart's Mini Corner (Flask) -->
    <FlaskDetails 
      v-else-if="projectId === 'flask'" 
      @close="$emit('close')" 
    />

    <!-- 6. E-Commerce Core Gateway -->
    <EcommerceDetails 
      v-else-if="projectId === 'ecommerce'" 
      @close="$emit('close')" 
    />
  </div>
</template>

<script setup>
import ClientoraDetails from './ProjectDetails/ClientoraDetails.vue'
import DepedAnalytics from './ProjectDetails/DepedAnalytics.vue'
import EcommerceDetails from './ProjectDetails/EcommerceDetails.vue'
import ExploratoryDetails from './ProjectDetails/ExploratoryDetails.vue'
import FlaskDetails from './ProjectDetails/FlaskDetails.vue'
import PhimapixDetails from './ProjectDetails/PhimapixDetails.vue'

defineProps({
  projectId: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>