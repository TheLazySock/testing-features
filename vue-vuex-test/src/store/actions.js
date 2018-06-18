import {
    INCREASE_COUNT,
    DECREASE_COUNT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './mutation-types'

export const counterActions = {
    increaseCount ({ commit }) {
        commit(INCREASE_COUNT);
    },

    decreaseCount ({ commit }) {
        commit(DECREASE_COUNT);
    }
}

export const cartActions = {

}

export const userActions = {
    fetchUser ({ commit, }, username) {
        commit(GET_USER);
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => commit(GET_USER_SUCCESS, data))
            .catch(error => commit(GET_USER_FAILURE, error));
    }
}