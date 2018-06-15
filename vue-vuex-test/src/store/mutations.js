import {
    INCREASE_COUNT,
    DECREASE_COUNT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './mutation-types'

export const counterMutations = {
    [INCREASE_COUNT] (state) {
        state.counter = state.counter + 1;
    },
    [DECREASE_COUNT] (state) {
        state.counter = state.counter - 1;
    }
}

export const cartMutations = {

}

export const userMutations = {

}