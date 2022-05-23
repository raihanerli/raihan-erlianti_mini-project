import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailProduct.vue";
import ListProduct from "../views/ListProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/DetailProduct/:id",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/ListProduct",
    name: "ListProduct",
    component: ListProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
