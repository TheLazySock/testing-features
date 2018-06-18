import Vue from 'vue'
import Vuex from 'vuex'

import { allState, counterGetters, cartGetters, userGetters } from './getters'
import { counterMutations, cartMutations, userMutations } from './mutations'
import { counterActions, cartActions, userActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        isLoading: false,
        counter: 0,
        cart: [],
        user: {},
        userOrgs: []
    },
    getters: Object.assign({}, allState, counterGetters, cartGetters, userGetters),
    mutations: Object.assign({}, counterMutations, cartMutations, userMutations),
    actions: Object.assign({}, counterActions, cartActions, userActions)
})