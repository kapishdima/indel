<template>
  <div class="row">
    <div class="col-lg-4 col-xl-6 gy-5" v-for="post of posts" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`" class="link-without-decoration">
        <PostCard
          :title="post.title"
          :category="post.category"
          :createdAt="post.createdAt"
          :image="post.image"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["limit", "home"]);
const { posts } = await usePostsList({ limit: props.limit });
</script>
