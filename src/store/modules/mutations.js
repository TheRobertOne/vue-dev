import { ADDNUM, LOSENUM } from "./mutations-type";

export default {
  [ADDNUM](state, num) {
    state.count += num;
  },
  [LOSENUM](state, num) {
    state.count -= num;
  }
};
