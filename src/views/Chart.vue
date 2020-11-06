<template>
  <div class="container">
    <Navbar :updateKeranjang="keranjangs" />
    <!-- Breadcrumb -->
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-dark">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods" class="text-dark">Foods</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Chart</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <nav class="h3 mt-2">Your <strong> Chart</strong></nav>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped text-white">
          <thead>
            <tr class="text-center">
              <th>#</th>
              <th>Foto</th>
              <th>Makanan</th>
              <th>Keterangan</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total Harga</th>
              <th>Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
              <td class="align-middle">{{ index + 1 }}</td>
              <td class="align-middle">
                <img
                  :src="'/images/' + keranjang.products.gambar"
                  width="200px"
                  class="rounded"
                />
              </td>
              <td class="align-middle">
                <strong>{{ keranjang.products.nama }}</strong>
              </td>
              <td class="align-middle">
                {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
              </td>
              <td class="align-middle">{{ keranjang.jumlah_pemesanan }}</td>
              <td class="align-middle">Rp. {{ keranjang.products.harga }}</td>
              <td class="align-middle">
                Rp.
                <strong>{{
                  keranjang.jumlah_pemesanan * keranjang.products.harga
                }}</strong>
              </td>
              <td class="align-middle text-danger">
                <b-icon-trash
                  @click="hapusKeranjang(keranjang.id)"
                ></b-icon-trash>
              </td>
            </tr>
            <tr>
              <td colspan="6" align="right">
                <strong>Total harga : </strong>
              </td>
              <td>
                <strong>Rp. {{ totalHarga }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "chart",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.success("Success deleted charts.", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log("Gagal : ", error));
        })
        .catch((error) => console.log("Gagal : ", error));
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },

  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>