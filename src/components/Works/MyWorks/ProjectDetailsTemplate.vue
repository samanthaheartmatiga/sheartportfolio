<template>
  <DepedAnalytics @close="$emit('close')" />
</template>

<script setup>
import DepedAnalytics from './ProjectDetails/DepedAnalytics.vue'

defineProps({
  projectId: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>