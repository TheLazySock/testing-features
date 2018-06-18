<template>
    <div>
        <h1>CART</h1>
        <div>
            <ul>
                <li v-for="item in cart" :key="item.id" @click="removeItem(item)">{{item.name}} : {{item.count}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.getters.getCart
        }
    },
    methods: {
        removeItem(item) {
            this.$store.dispatch('removeProductFromCart', item);
        }
    }
}
</script>