<template>
  <div class="news-page">
    <Head>
      <Title>{{ $t("Новини Indel") }}</Title>
      <Meta name="og:title" :content="$t('Новини Indel')" />
    </Head>
    <div class="container">
      <AppPageBanner :title="$t('Новини')" />
      <div class="posts-list-container">
        <PostList />
      </div>
    </div>
  </div>
</template>

<script setup></script>
