<template>
  <section class="hero">
    <div class="hero-wrapper">
      <div class="hero-background">
        <nuxt-img class="img-full parallax" src="/img/hero.jpg" />
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 data-splitting>We designed your space for living</h1>
          <p>
            Great buildings that move the spirit have always been rare. In every
            case they are unique, poetic, products of the heart.
          </p>
          <UICta />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero {
  min-height: 720px;
  height: 800px;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
    z-index: 1;
  }

  &-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &-content {
    position: relative;
    z-index: 2;
    max-width: 520px;
    color: #fff;

    h1,
    p {
      margin-bottom: 24px;
    }
  }
}
</style>
