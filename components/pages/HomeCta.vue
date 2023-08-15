<template>
  <section class="contact">
    <div class="contact-image">
      <NuxtImg class="img-full" src="/img/cta.jpg" />
    </div>
    <div class="container">
      <div class="contact-content">
        <div class="row">
          <div class="col-lg-9 col-12">
            <h2 class="h3">Take a look at how we designed this house</h2>
            <p>Learn more about our great portfolios</p>
          </div>
          <div class="col-lg-3 col-12">
            <a href="" class="cta cta--black">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.contact {
  position: relative;
  height: 500px;
  display: flex;
  align-items: flex-end;

  &-content {
    position: relative;
    z-index: 2;
    background-color: #fff;
    padding: 40px 70px;
    max-width: 80%;

    @media screen and (max-width: 991px) {
      max-width: 100%;
      padding: 20px 25px;

      h2,
      p {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
