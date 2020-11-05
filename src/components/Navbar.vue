<template>
  <b-container>
    <b-navbar class="costum-nav" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" class="font-weight-bolder"
        >Kulineran</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <router-link class="nav-link mr-4" to="/">Home</router-link>
          <router-link class="nav-link" to="/foods">Foods</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav iFoods -->
        <b-navbar-nav class="ml-auto">
          <router-link class="nav-link mr-4" to="/foods/chart"
            >Keranjang
            <b-icon-bag class="ml-1"></b-icon-bag>
            <span class="badge badge-success ml-2">{{
              jumlah_pesanans.length
            }}</span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },

  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>