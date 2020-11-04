<template>
  <b-container>
    <navbar />
    <hero />
    <!-- <div class="h4 best-product">Best product</div> -->
    <div class="row">
      <div class="col-md-4 ml-3">
        <div class="h4 title-product-home">Best <span>Product</span></div>
        <p class="font-italic text-product">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        class="col-md-4 mt-4 mb-5"
        v-for="product in products"
        :key="product.id"
      >
        <CardProduct :product="product" />
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>
