<template>
  <div class="pagination" v-if="pages > 1">
    <div
      class="page"
      v-for="page of pages"
      :key="page"
      @click="onPageChange(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["total", "pageSize", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const pages = computed(() => {
  if (!props.total || !props.pageSize) return 0;
  return Math.ceil(props.total / props.pageSize);
});

const onPageChange = (page) => {
  emit("update:modelValue", page);
};
</script>
