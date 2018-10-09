import {
    ADDNUM,
    LOSENUM
} from './mutations-type'

export default {
    addNum({ commit, state }, num) {
        commit(ADDNUM, num)
    },
    loseNum({ commit, state }, num) {
        commit(LOSRNUM, num)
    }
}
