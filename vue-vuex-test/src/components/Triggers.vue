<template>
    <div>
        <div class="triggers-block">
            <!-- TRIGGERS FOR COUNTER -->
            <div class="counter-triggers">
                <h3>Counter triggers</h3>
                <div>
                    <h5>Actions triggers</h5>
                    <button @click="counterIncAction">+</button>            
                    <button @click="counterDecAction">-</button>            
                </div>
                <div>
                    <h5>Mutations triggers</h5>
                    <button @click="counterIncMutation">+</button>            
                    <button @click="counterDecMutation">-</button>            
                </div>
            </div>
            <!-- TRIGGERS FOR CART -->
            <div class="shopping-cart-trigger">

            </div>
            <!-- TRIGGERS FOR USER -->
            <div class="github-user-trigger">

            </div>
        </div>
        <section>
            <nav>
                <ul>
                    <li><router-link to="/counter">Counter</router-link></li>
                    <li><router-link to="/cart">Shopping Cart</router-link></li>
                    <li><router-link to="/github-user">Github User</router-link></li>
                </ul>
            </nav>
            <router-view></router-view>
        </section>
        <div>
            <ul class="logs">
                <li v-for="log in logs.reverse()" :key="log.id">{{log}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logs: []
        }
    },
    methods: {
        //COUNTER METHODS
        counterIncAction() {
            this.$store.dispatch('increaseCount');
            this.logs.push('counterIncAction');
        },
        counterDecAction() {
            this.$store.dispatch('decreaseCount')
            this.logs.push('counterDecAction');
        },
        counterIncMutation() {
            this.$store.commit('INCREASE_COUNT')
            this.logs.push('counterIncMutation');
        },
        counterDecMutation() {
            this.$store.commit('DECREASE_COUNT')
            this.logs.push('counterDecMutation');
        },
    }
};
</script>

<style scoped>
.triggers-block {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.triggers-block > * {
  width: 30%;
  height: 250px;
  border: solid 1px #d1d1d1;
}

ul.logs {
    list-style: circle inside;
}

.logs > li {
    display: list-item;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
}

a {
    padding: 5px;
    color: #003964;
}

a.router-link-active, li.router-link-active > a {
    color: #ff0000;
}

section > *:last-child {
    width: 100%;
    height: 50vh;
}
</style>
