<template>
  <b-container>
    <navbar />
    <hero />
    <cardProduct />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
};
</script>
