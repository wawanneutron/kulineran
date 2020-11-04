<template>
  <b-container>
    <navbar />
    <heroFoods />
    <div class="row">
      <div class="col-md-4 ml-3">
        <div class="h4 title-product"><span>Product</span> Recomendations</div>
        <p class="font-italic text-product">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.
        </p>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-lg-6">
        <form>
          <input
            type="text"
            placeholder="search product"
            class="font-italic text-black-50 ml-3 mt-2 form-control"
          />
        </form>
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
import HeroFoods from "@/components/Hero-foods.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    HeroFoods,
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
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>
