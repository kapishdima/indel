<template>
  <div class="section-departments">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" v-if="texts">
          {{ texts.departments_section_title }}
        </h2>
      </div>

      <DepartmentsList />
    </div>
  </div>
</template>

<script setup>
defineProps(["texts"]);
</script>
