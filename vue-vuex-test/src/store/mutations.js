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

export const counterMutations = {
    [INCREASE_COUNT] (state) {
        state.counter = state.counter + 1;
    },
    [DECREASE_COUNT] (state) {
        state.counter = state.counter - 1;
    }
}

export const cartMutations = {
    [ADD_TO_CART] (state, payload) {
        state.cart.push({name: payload.name, count: 1});
    },
    [INC_ITEM_COUNT] (state, payload) {
        const cartItem = state.cart.find(item => item.name === payload.name);
        cartItem.count++
    },
    [REMOVE_SINGLE_FROM_CART] (state, payload) {
        const cartItem = state.cart.find(item => item.name === payload.name);
        cartItem.count--
    },
    [REMOVE_FROM_CART] (state, payload) {
        const cartItem = state.cart.find(item => item.name === payload.name);
        state.cart.splice(state.cart.indexOf(cartItem), 1);
    }
}

export const userMutations = {
    [GET_USER] (state) {
        state.isLoading = true;
    },
    [GET_USER_SUCCESS] (state, payload) {
        state.isLoading = false;
        state.user = payload;
    },
    [GET_USER_FAILURE] (state, payload) {
        state.isLoading = false;
        alert(payload);
    }
}