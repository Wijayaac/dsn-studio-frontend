<template>
  <section class="stat">
    <NuxtImg class="img-full bg" src="/img/background-wheat.jpg" />
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="stat-image">
            <NuxtImg class="img-full" src="/img/sketch.jpg" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="stat-content">
            <h2>We Create Digital Experience</h2>
            <p class="bold">
              Located on King’s Road in the heart of chic and high-end Chelsea,
              we've designed the first Sticks 'N' Sushi restaurant in London.
            </p>
            <div class="row">
              <div class="col-4">
                <h3>17+</h3>
                <p>years working in Canada</p>
              </div>
              <div class="col-4">
                <h3>48</h3>
                <p>Houses build in europe</p>
              </div>
              <div class="col-4">
                <h3>100*</h3>
                <p>years guarantee</p>
              </div>
            </div>
            <UICta class="cta cta--black"> view our portfolio </UICta>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.stat {
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  @media screen and (max-width: 991px) {
    background-color: #fffbf5;
    padding-top: 60px;
    padding-bottom: 60px;
    .bg {
      display: none;
    }
  }

  &-image {
    position: relative;
    padding-top: 320px;
  }
  &-content {
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    position: relative;
    z-index: 2;

    h2 {
      margin-bottom: 28px;
    }
    h3,
    p {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 48px;
      margin-top: 20px;
    }
    @media screen and (max-width: 991px) {
      padding-left: 0;
      padding-top: 20px;
    }
    @media screen and (min-width: 992px) {
      max-width: 85%;
    }
  }
}
</style>
