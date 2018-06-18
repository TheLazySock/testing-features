import {
    INCREASE_COUNT,
    DECREASE_COUNT,
    ADD_TO_CART,
    INC_ITEM_COUNT,
    REMOVE_SINGLE_FROM_CART,
    REMOVE_FROM_CART,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './mutation-types'

export const counterActions = {
    increaseCount({ commit }) {
        commit(INCREASE_COUNT);
    },

    decreaseCount({ commit }) {
        commit(DECREASE_COUNT);
    }
}

export const cartActions = {
    addProductToCart({ state, commit }, product) {
        const cartItem = state.cart.find(item => item.name === product.name)
        if (!cartItem) {
            commit(ADD_TO_CART, { name: product.name })
        } else {
            commit(INC_ITEM_COUNT, cartItem)
        }
    },
    removeProductFromCart({ state, commit }, product) {
        const cartItem = state.cart.find(item => item.name === product.name)
        if (cartItem) {
            if (cartItem.count !== 1) {
                commit(REMOVE_SINGLE_FROM_CART, { name: product.name })
            } else {
                commit(REMOVE_FROM_CART, { name: product.name })
            }
        }
    }

}

export const userActions = {
    fetchUser({ commit, }, username) {
        commit(GET_USER);
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => commit(GET_USER_SUCCESS, data))
            .catch(error => commit(GET_USER_FAILURE, error));
    }
}