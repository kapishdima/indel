<template>
  <div class="post-page" v-if="post">
    <Head>
      <Title>{{ post?.title }}</Title>
      <Meta name="description" :content="post?.text?.substring(0, 100)" />
      <Meta name="og:title" :content="`${post?.title}`" />
      <Meta name="og:description" :content="post?.text?.substring(0, 100)" />
      <Meta name="og:image" :content="post?.image" />
    </Head>
    <div class="container">
      <div class="col-12 col-lg-10 offset-lg-1">
        <div class="row post-page__header">
          <div class="col-12 col-lg-6 post-page__image">
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="col-12 col-lg-6 post-page__info">
            <div class="post-page__meta">{{ post.createdAt }}</div>
            <h2 class="post-page__title">{{ post.title }}</h2>
          </div>
        </div>
        <div class="post-page__text" v-html="post.text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { post } = await usePostBySlug(String(route.params.id));
</script>
