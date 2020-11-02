<template>
  <b-container>
    <navbar />
    <heroFoods />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HeroFoods from "@/components/Hero-foods.vue";

export default {
  name: "Foods",
  components: {
    Navbar,
    HeroFoods,
  },
};
</script>
