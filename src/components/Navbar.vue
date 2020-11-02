<template>
  <div>
    <b-navbar class="costum-nav" toggleable="lg" type="dark" variant="info">
      <div class="container">
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
            <router-link class="nav-link mr-4" to="/chart"
              >Keranjang
              <b-icon-bag class="ml-1"></b-icon-bag>
              <span class="badge badge-success ml-2">0</span>
            </router-link>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>