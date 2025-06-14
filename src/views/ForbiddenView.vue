<script setup>
import { Button } from 'primevue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="text-customBlack mt-20 flex flex-col justify-center items-center">
    <h1 class="text-center font-bold text-4xl">403 Forbidden</h1>
    <p class="text-center mt-3 text-xl">
      Эта страница недоступна, авторизуйтесь или обратитесь в поддержку
    </p>
    <Button @click="router.push('/')" class="w-52 mt-4 !bg-customPink !border-none !text-white">
      Вернуться
    </Button>
  </div>
</template>

<style scoped></style>
