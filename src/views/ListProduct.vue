<template>
  <div class="container">
    <v-app-bar elevation="1" color="#f1f1f1">
      <img src="../assets/Logo.png" alt="" />
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon color="#1F0824" width="15%">mdi-chevron-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col v-for="(item, index) in product" :key="item.id">
        <v-card max-width="180" class="mx-auto" light elevation="1">
          <v-img width="100%" :src="item.image"></v-img>

          <v-card-text>
            <div>{{ item.name }}</div>
            <div>Rp. {{ item.price }},-</div>
          </v-card-text>
          <v-btn
            dark
            block
            :to="'/DetailProduct/' + index"
            color="#1F0824"
            elevation="3"
            large
          >
            Buy Now
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "ListProduct",
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
