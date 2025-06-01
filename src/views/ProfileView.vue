<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { onMounted } from 'vue'

const {} = storeToRefs(useUserStore())
const { actions } = useUserStore()

onMounted(() => {
  actions.getUserData()
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
