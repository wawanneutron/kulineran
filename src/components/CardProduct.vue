<template>
  <div class="container">
    <div class="card costum-card card-shadow">
      <div class="card-body text-black-50">
        <img :src="'../images/' + product.gambar" class="card-img w-100" />
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga : Rp. {{ product.harga }}</p>
        <p class="card-content">
          This is foods is ferry delisious, buy now just one click
        </p>
        <router-link class="btn btn-success" :to="'/foods/' + product.id"
          ><b-icon-cart></b-icon-cart> Pesan</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>