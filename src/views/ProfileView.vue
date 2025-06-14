<script setup>
import { onMounted } from 'vue'
import { Avatar } from 'primevue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import KeysIcon from '@/assets/images/keys.png'

const { myResume } = storeToRefs(useUserStore())
const { actions } = useUserStore()

onMounted(() => {
  actions.getUserData()
  actions.getMyResume()
})
</script>

<template>
  <div class="container mx-auto px-5">
    <div class="max-w-full w-5/6 bg-white mx-auto mt-10 p-5">
      <div class="flex items-center gap-6 justify-between p-5 rounded bg-lightGrey">
        <div class="flex items-center gap-6">
          <Avatar icon="pi pi-user" class="mr-2 !w-36 !h-36" size="xlarge" shape="circle" />
          <div class="text-customBlack">
            <div class="flex items-center">
              <p>{{ myResume?.username }}</p>
              <p class="ml-2 mr-4">{{ myResume?.year }} года</p>
              <p class="flex items-center gap-1.5">
                <img :src="KeysIcon" alt="розовый кейс" width="16" height="13" />
                {{ myResume?.salary }} ₽
              </p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <p
                v-for="(position, id) in myResume?.position"
                class="text-customGray"
                :key="`resume-position-${id}`"
              >
                {{ position?.name }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <i class="pi pi-pen-to-square !text-lg text-customBlack"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
