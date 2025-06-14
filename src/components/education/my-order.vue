<script setup>
import { onMounted, ref } from 'vue'
import { Message, ProgressSpinner } from 'primevue'
import OrderCard from '@/components/education/order-card.vue'
import { http } from '@/api/http.js'
import { LOCALSTORAGE } from '@/const/localStorage.js'

const orders = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const getEducationOrders = async () => {
  isLoading.value = true
  try {
    const res = await http.get('/education', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`,
      },
    })
    orders.value = res.data
    isLoading.value = false
  } catch (err) {
    console.log(err)
    errorMessage.value = 'Произошла ошибка, попробуйте зайти позже'
  }
}

onMounted(() => {
  getEducationOrders()
})
</script>

<template>
  <div class="container mx-auto px-5 mt-10">
    <div class="flex justify-center items-center mt-5" v-if="isLoading">
      <ProgressSpinner />
    </div>
    <div v-else-if="!isLoading && !errorMessage">
      <order-card v-for="(order, id) in orders" :key="'order-id-' + id" :order="order" />
    </div>
    <Message v-else class="mt-10 container mx-auto px-5" severity="error">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<style scoped></style>
