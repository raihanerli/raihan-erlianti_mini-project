<template>
  <div class="container">
    <v-app-bar elevation="1" color="#f1f1f1">
      <img src="../assets/Logo.png" alt="" />
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-row class="text-center mt-2">
      <v-col>
        <h3>Transaction Success</h3>
      </v-col>
    </v-row>

    <v-row class="text-center mt-4 mb-4">
      <v-col>
        <img width="20%" src="../assets/checked.png" alt="" />
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <p>Thankyou for Order!</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn block large dark color="#1F0824" to="/">Back to Home</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 450px) {
  .container {
    max-width: 450px;
    background-color: #f1f1f1;
    padding: 0;
  }
}
</style>
