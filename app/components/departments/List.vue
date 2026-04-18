<template>
  <div class="departments-list">
    <DepartmentsCard
      v-for="department in departments"
      :key="department.name"
      :name="department.name"
      :video="department.video"
      :link="department.link"
      :center="department.center"
    />
  </div>
</template>

<script setup>
defineProps(["departments"]);
</script>

<style lang="scss" scoped></style>
