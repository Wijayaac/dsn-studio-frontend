<script setup>
import MasonryWall from "@yeger/vue-masonry-wall";

const route = useRoute();
const items = ref([
  {
    title: "Title",
    description: "The x item.",
    image: "portfolio-1.jpg",
    height: 300,
    category: "model",
  },
  {
    title: "Second",
    description: "The X item.",
    image: "portfolio-2.jpg",
    height: 400,
    category: "architecture",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-3.jpg",
    height: 250,
    category: "building",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-4.jpg",
    height: 350,
    category: "landscape",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-5.jpg",
    height: 550,
    category: "interior",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-6.jpg",
    height: 600,
    category: "model",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-7.jpg",
    height: 400,
    category: "architecture",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-8.jpg",
    height: 300,
    category: "interior",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-9.jpg",
    height: 250,
    category: "landscape",
  },
  {
    title: "Title",
    description: "The X item.",
    image: "portfolio-10.jpg",
    height: 450,
    category: "building",
  },
]);

const portfolios = ref([]);
const activeFilter = ref("");
const categories = [
  "all",
  "model",
  "architecture",
  "building",
  "landscape",
  "interior",
];

const changeFilter = (category) => {
  addHashToLocation(category);
  activeFilter.value = category;
  if (category === "all") {
    portfolios.value = items.value;
  } else {
    portfolios.value = items.value.filter((item) => item.category === category);
  }
};

function addHashToLocation(params) {
  history.pushState(
    {},
    null,
    route.path + "?filter=" + encodeURIComponent(params)
  );
}

onMounted(() => {
  activeFilter.value = route.query.filter;
  if (activeFilter.value && activeFilter.value !== "all") {
    return (portfolios.value = items.value.filter(
      (item) => item.category === activeFilter.value
    ));
  } else if (portfolios.value.length === 0 || activeFilter.value === "all") {
    return (portfolios.value = items.value);
  }
});
</script>

<template>
  <section class="portfolio">
    <div class="container">
      <div class="portfolio-header">
        <div class="row">
          <div class="col-12 col-lg-6">
            <h2 data-splitting>Portfolio</h2>
            <p>Featured works and selected works</p>
          </div>
          <div class="col-12 col-lg-6">
            <div class="portfolio-filter">
              <nav class="d-flex flex-wrap">
                <li
                  v-for="category in categories"
                  :class="activeFilter === category ? 'active' : ''"
                >
                  <button @click="changeFilter(category)">
                    {{ category }}
                  </button>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <MasonryWall
        v-if="portfolios.length"
        :items="portfolios"
        :ssr-columns="2"
        :column-width="300"
        :gap="16"
      >
        <template #default="{ item, index }">
          <div
            class="portfolio-image"
            :style="{ height: `${item.height}px` }"
            :data-filter="item.category"
          >
            <NuxtImg :src="`/img/${item.image}`" class="img-full" />
            <div class="portfolio-content">
              <h3>{{ item.title }}</h3>
              <span>{{ item.description }}</span>
            </div>
          </div>
        </template>
      </MasonryWall>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  padding: 100px 0;

  @media screen and (max-width: 991px) {
    padding: 60px 0;
  }
  &-header {
    margin-bottom: 60px;
    padding-top: 20px;
    h2 {
      margin-bottom: 18px;
    }
    .row {
      align-items: flex-end;
    }
    @media screen and (max-width: 991px) {
      text-align: center;
      padding-top: 0;

      h2 {
        margin-bottom: 8px;
      }
    }
  }
  &-filter {
    nav {
      justify-content: flex-end;
    }
    li {
      padding: 5px 10px;

      &.active {
        background-color: #000;
        button {
          color: #fff;
        }
      }
    }
    button {
      text-transform: lowercase;
      cursor: pointer;
    }

    @media screen and (max-width: 991px) {
      margin-top: 20px;

      nav {
        justify-content: center;
      }
    }
  }
  &-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      background-color: #fff;
      opacity: 0;
      visibility: hidden;
      height: 100%;
      width: 100%;
      inset: 0;
      z-index: 1;
    }
    &:hover {
      &::before {
        opacity: 0.7;
        visibility: visible;
        transition: opacity 400ms ease;
      }
      .portfolio-content {
        opacity: 1;
        visibility: visible;
        transition: opacity 400ms ease;
      }
    }
  }
  &-content {
    position: relative;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
