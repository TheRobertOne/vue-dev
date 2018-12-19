import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Libu from './views/Libu.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/course_url_search",
      name: "course_url_search",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/course_url_search.vue")
    },
    {
      path: "/libu",
      name: "libu",
      component: Libu
    }
  ]
});
