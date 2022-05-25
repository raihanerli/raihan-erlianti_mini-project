<template>
  <div class="container">
    <v-app-bar elevation="1" color="#f1f1f1">
      <img src="../assets/Logo.png" alt="" />
      <v-spacer></v-spacer>
      <v-btn icon to="/ListProduct">
        <v-icon color="#1F0824" width="15%">mdi-chevron-left</v-icon>
      </v-btn>
    </v-app-bar>

    <v-row>
      <div>
        <v-col>
          <img :src="product[index].image" height="250" alt="" />
        </v-col>
      </div>
    </v-row>

    <div class="konten">
      <v-row>
        <v-col>
          <h2>{{ product[index].name }}</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3>Rp. {{ product[index].price }},-</h3>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn block large dark color="#1F0824" to="/TransactionPage/:id"
            >Payment</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "DetailPage",
  computed: {
    index() {
      return this.$route.params.id;
    },
  },
  apollo: {
    product: {
      query() {
        return gql`
          query MyQuery {
            product {
              id
              name
              price
              image
            }
          }
        `;
      },
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 450px) {
  .container {
    max-width: 450px;
    background-color: #f1f1f1;
    padding: 0;
  }
}
</style>
