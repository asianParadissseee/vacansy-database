<script setup>
import SearchVacansies from '@/components/search-vacansies.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { http } from '@/api/http.js'

const resumes = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

const fetchResumes = async () => {
  isLoading.value = true
  try {
    const res = await http.get('/resumes')
    resumes.value = res.data
    isLoading.value = false
  } catch (err) {
    console.log(err)
    errorMessage.value = 'Произошла ошибка с резюме'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchResumes()
})
onUnmounted(() => {
  resumes.value = []
})
</script>

<template>
  <div>
    <SearchVacansies :is-filter-btn="true" class="mt-10" />
    <pre class="text-red-500">
        {{ resumes }}
    </pre>
  </div>
</template>

<style scoped></style>
