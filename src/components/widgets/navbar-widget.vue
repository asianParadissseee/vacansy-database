<template>
  <header class="bg-white h-20 flex items-center">
    <div class="container mx-auto px-5 flex justify-between items-center text-customBlack">
      <BurgerMenu class="block md:hidden" @click="actions.handleopenSidebar" />
      <nav class="hidden md:block">
        <ul class="flex gap-7 items-center">
          <li v-for="(link, id) in navbarLinks" :key="'navbarLinks' + id">
            <router-link :to="link.path"> {{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
      <div>Homester.pro</div>
      <nav class="hidden md:block">
        <ul class="flex gap-7 items-center">
          <li
            v-for="(modal, id) in navbarModals"
            :key="'navbarModals' + id"
            :class="{
              'bg-[#F8F8F8] !text-[#133F42] py-1 px-2 rounded': modal.name == 'Войти',
            }"
            class="text-[#FF4A96] font-light font-rubik flex gap-1.5"
          >
            <div
              v-if="modal.name !== 'Войти'"
              class="rounded-full border-2 w-6 h-6 flex justify-center items-center text-lg font-semibold"
            >
              +
            </div>
            {{ modal.name }}
          </li>
        </ul>
      </nav>
      <i class="pi pi-user !text-xl !block md:!hidden"></i>
    </div>
  </header>
</template>

<script setup>
import { useSidebarStore } from '@/stores/sidebar'
import BurgerMenu from '../burger-menu.vue'
import { navbarLinks, navbarModals } from '@/const/links'
const { actions } = useSidebarStore()
</script>

<style scoped></style>
