<template>
  <b-container>
    <b-row no-gutters class="mt-5 justify-content-center">
      <b-col md="6">
        <div class="d-sm-block d-md-none">
          <b-col md="5" class="justify-content-center d-flex">
            <img
              src="../assets/img/food.png"
              alt="Food"
              class="w-50 img-foods-mobile"
            />
          </b-col>
        </div>
        <b-card-bodyclass class="hero-food-text">
          <b-card-text class="text-hero h1">
            Choice <span>foods</span> in list
          </b-card-text>
          <b-card-text class="text-home mt-4">
            This is a wider card with supporting text as a natural lead-in to
            additional content. This content is a little bit longer.
          </b-card-text>
          <div class="d-md-block d-none">
            <b-button class="mt-3 btn-cte btn-lg"
              >Order foods now
              <b-icon icon="cart" class="ml-2 ic-order"></b-icon>
            </b-button>
          </div>
          <div class="d-sm-block d-md-none">
            <b-button class="mt-3 btn-cte btn-md"
              >Order now
              <b-icon icon="cart" class="ml-2 ic-order"></b-icon>
            </b-button>
          </div>
        </b-card-bodyclass>
      </b-col>
      <b-col md="5" class="justify-content-center d-flex">
        <div class="d-md-block d-none">
          <img
            src="../assets/img/food.png"
            alt="Food"
            class="w-75 mt-5 img-foods"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>