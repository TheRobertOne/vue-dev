import Vue from "vue";
import Vuex from "vuex";
import actions from "./modules/actions";
import mutations from "./modules/mutations";

Vue.use(Vuex);

const state = {
  num: 5,
  count: 0
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
