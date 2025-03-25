<script setup>
import NavbarWidget from '@/components/widgets/navbar-widget.vue'
import FooterWidget from '@/components/widgets/footer-widget.vue'
import SidebarWidget from '@/components/widgets/sidebar-widget.vue'
</script>

<template>
  <div>
    <navbar-widget />
    <sidebar-widget />
    <main>
      <slot></slot>
    </main>
    <footer-widget />
  </div>
</template>

<style scoped></style>
