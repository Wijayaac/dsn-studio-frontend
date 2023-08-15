<template>
  <header class="header" ref="headRef">
    <div class="header__wrapper">
      <div class="header__logo-wrapper">
        <a href="/"
          ><img
            src="https://architecturer-v1.b-cdn.net/architecturer/demo2/wp-content/uploads/2020/09/archi-tect.png"
            alt=""
        /></a>
      </div>
      <button
        class="header__toggle header--mobile"
        aria-controls="primary-navigation"
        :aria-expanded="isDrawerVisible"
        @click="handleDrawer"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span class="sr-only">Menu</span>
      </button>
      <nav
        class="header__primary-nav"
        id="primary-navigation"
        :data-visible="isDrawerVisible.toString()"
        ref="primaryNav"
      >
        <ul class="header__menu-wrapper">
          <li>
            <a
              class="header__nav-item header__nav-item--primary"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a class="header__nav-item header__nav-item--primary" href="#about">
              About
            </a>
          </li>
          <li>
            <a
              class="header__nav-item header__nav-item--primary"
              href="#showcases"
            >
              Showcases
            </a>
          </li>
          <li>
            <a
              class="header__nav-item header__nav-item--primary"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <a href="#" class="header__nav-item header__nav-item--cta">
          09128 28193
        </a>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";

const primaryNav = ref<HTMLElement | null>(null);
const isDrawerVisible = ref(false);
const headRef = ref<HTMLElement | null>(null);

const handleDrawer = () => {
  isDrawerVisible.value = !isDrawerVisible.value;
  if (isDrawerVisible.value) {
    document.body.classList.add("header-opened");
  } else {
    document.body.classList.remove("header-opened");
  }
};

onMounted(() => {
  var scroll = window.scrollY;
  window.addEventListener("scroll", () => {
    var curr = window.scrollY;
    if (scroll > 50) {
      headRef.value?.classList.add("scroll");
    } else {
      headRef.value?.classList.remove("scroll");
    }
    scroll = curr;
  });
});
</script>
