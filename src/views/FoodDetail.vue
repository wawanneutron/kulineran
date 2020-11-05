<template>
  <b-container>
    <Navbar />
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
            <li class="breadcrumb-item active" aria-current="page">
              Food Order
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row m-3 justify-content-between">
      <div
        class="col-lg-7 mt-4 col-detail bg-card-detail justify-content-center"
      >
        <img
          :src="'/images/' + product.gambar"
          alt=""
          class="rounded shadow-lg w-100 mt-4 mb-3 img-fluid"
        />
      </div>
      <div class="col-lg-4 col-details bg-card-detail">
        <div class="text-detail mt-4 ml-1 mr-1">
          <div class="h3">{{ product.nama }}</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem in
            earum ullam.
          </p>
          <p>Rp. {{ product.harga }}</p>
        </div>
        <form class="mt-4 mb-4 ml-1 mr-1" v-on:submit.prevent>
          <div class="form-group">
            <label for="jumlah_pemesanan">Jumlah Pesan</label>
            <input
              type="number"
              class="form-control"
              v-model="pesan.jumlah_pemesanan"
            />
          </div>
          <div class="form-group">
            <label for="keterangan">Keterangan</label>
            <textarea
              v-model="pesan.keterangan"
              class="form-control"
              placeholder="Keterangan spt : Pedes, Nasi Setengah .."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-success" @click="pemesanan">
            <b-icon-cart></b-icon-cart>Pesan
          </button>
        </form>
      </div>
    </div>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/foods/chart" });
            this.$toast.success("Success to add chart.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("the order quantity must be filled in.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>