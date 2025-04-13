<template>
  <div class="w-5 h-4 flex flex-col gap-1.5">
    <span
      v-for="line in 3"
      :key="`${line}-burger-line-id`"
      class="bg-customBlack w-full h-px"
    ></span>
  </div>
</template>

<script setup></script>

<style scoped></style>
