<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const main = ref();
let ctx;

onMounted(async () => {
  if (process.client) {
    // Parallax
    const image = document.querySelectorAll(".parallax");
    let { default: simpleParallax } = await import("simple-parallax-js");
    new simpleParallax(image, {
      delay: 0,
      orientation: "up",
      scale: 1.2,
    });

    // Splitting
    let { default: Splitting } = await import("splitting");
    Splitting({
      /* target: String selector, Element, Array of Elements, or NodeList */
      target: "[data-splitting]",
      /* by: String of the plugin name */
      by: "chars",
      /* key: Optional String to prefix the CSS variables */
      key: null,
    });

    // Stagger
    ctx = gsap.context(() => {
      const headings = document.querySelectorAll(".splitting .word");
      headings.forEach((heading) => {
        gsap.to(heading, {
          y: "0%",
          delay: "5s",
          stagger: 0.15,
          scrollTrigger: {
            trigger: heading,
            start: "150% bottom",
            end: "top 50%",
          },
        });
      });
    }, main.value);
  }
});

// onUnmounted(() => {
//   ctx.revert();
// });
</script>
<template>
  <div ref="main">
    <UIHeader />
    <NuxtPage />
    <UIFooter />
  </div>
</template>
