<script setup>
import BannerInfo from '@/components/banner-info.vue'
import SearchVacansies from '@/components/search-vacansies.vue'
import CategoryCard from '@/components/widgets/category-card.vue'
import { mockCategory } from '@/const/mock-category'
</script>

<template>
  <div>
    <BannerInfo />
    <SearchVacansies />
    <section class="mt-10">
      <div class="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CategoryCard
          v-for="category in mockCategory"
          :key="'mockCategory-id-' + category.id"
          :category="category"
        />
      </div>
      <p class="container mx-auto px-5 mt-20 text-center font-light font-rubik text-customGray">
        Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория,
        Категория, <br />
        Еще категория, Категория, Категория, Еще категория, Категория, Категория, Еще категория,
        Категория, Категория,
        <br />
        Категория, Еще категория, Категория, Категория, Категория, Еще категория, Категория,
        Категория,
      </p>
    </section>
    <section class="bg-white"></section>
  </div>
</template>
