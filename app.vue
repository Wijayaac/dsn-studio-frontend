<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__logo-wrapper">
          <a href="/"><img src="https://truchitosan.com/uploads/tru_company_logos_REV_tru_chitosan_c703c8037f.svg" alt="" /></a>
        </div>
        <button class="header__toggle header--mobile" aria-controls="primary-navigation" aria-expanded="false"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <nav class="header__primary-nav" id="primary-navigation" data-visible="false">
          <ul class="header__menu-wrapper">
            <li><a class="header__nav-item header__nav-item--primary mod" href="/products">Products</a></li>
            <li><a class="header__nav-item header__nav-item--primary mod" href="/about">About Chitosan</a></li>
            <li><a class="header__nav-item header__nav-item--primary mod" href="/the-tru-difference">The trū Difference</a></li>
            <li><a class="header__nav-item header__nav-item--cta mod" href="/contact"> Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
