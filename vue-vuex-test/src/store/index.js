import Vue from 'vue'
import Vuex from 'vuex'

import { allState, counterGetters } from './getters'
import { counterMutations } from './mutations'
import { counterActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        isLoading: false,
        counter: 0,
        cart: [],
        user: {},
    },
    getters: Object.assign({}, allState, counterGetters),
    mutations: Object.assign({}, counterMutations),
    actions: Object.assign({}, counterActions)
})