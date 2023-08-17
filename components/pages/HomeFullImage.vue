<script setup>
const props = defineProps({ caption: Boolean, label: String });
</script>
<template>
  <section class="image">
    <NuxtImg src="/img/full-image.jpg" class="img-full parallax" />
    <caption class="image-caption" v-if="caption">
      {{
        label
      }}
    </caption>
  </section>
</template>

<style scoped lang="scss">
.image {
  position: relative;
  height: 500px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    height: 320px;
  }
  &-caption {
    position: relative;
    z-index: 2;
    font-size: 14px;
    padding: 20px 40px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}
</style>
