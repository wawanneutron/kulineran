<template>
  <div class="container">
    <Navbar />
    <div class="row justify-content-center d-flex">
      <div class="col-lg-12">
        <div class="h2 text-center">Your Chart</div>
        <img
          src="../assets/img/ilustrasi.png"
          alt="Food"
          class="w-50 mt-5 img-foods text-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "chart",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>