<script setup>
import { Button } from 'primevue'
const { category } = defineProps(['category'])
</script>

<template>
  <div class="bg-white flex sm:justify-between py-8 px-7">
    <div class="font-rubik">
      <p class="text-customBlack font-semibold text-base xl:text-xl">
        {{ category?.title || 'Название не указано' }}
      </p>
      <span class="font-meduim text-sm xl:text-base text-customBlack mt-5 block">
        {{ category?.incomePrice ? `Средий доход ${category?.incomePrice} ₽` : 'Доход не указан' }}
      </span>
      <span class="text-customGray mt-3 block text-sm xl:text-base">
        {{
          category?.responsesOfVacancy
            ? `${category?.responsesOfVacancy} отклика на вакансию`
            : 'Отклики не указаны'
        }}
      </span>
      <div class="flex items-center gap-4 mt-5">
        <Button class="!border-none !bg-lightPink !text-customPink">Вакансии</Button>
        <Button severity="contrast" class="!bg-lightGrey !text-customGray">Резюме</Button>
      </div>
    </div>
    <div class="hidden sm:block">
      <img :src="category?.image" :alt="category.title" class="w-72" width="286" height="154" />
    </div>
  </div>
</template>

<style scoped>
img {
  clip-path: polygon(44% 0, 100% 0, 99% 99%, 42% 100%, 25% 49%);
}
</style>
