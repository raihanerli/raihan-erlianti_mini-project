<template>
  <div class="container">
    <v-row class="text-center logo">
      <v-col>
        <img src="../assets/Logo.png" alt="" />
      </v-col>
    </v-row>

    <v-row class="text-center pb-15">
      <v-col>
        <v-btn to="/ListProduct" light color="#1F0824">
          <v-icon color="#fff">mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-footer color="#1F0824" height="40"></v-footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
@media only screen and (min-width: 450px) {
  .container {
    max-width: 450px;
    background-color: #f1f1f1;
    padding: 0;
  }
  .container .logo {
    padding: 220px 0;
  }
}
</style>
