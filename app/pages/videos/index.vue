<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner :title="$t('Всі відео')" />
      <VideoList :full="true" />
    </div>
  </div>
</template>
