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
                <div v-for="item in ['№1', '№2', '№3', '№4', '№5', '№6', '№7', '№8', '№9', '№10', '№11', '№12']" :key="item.id" class="item">
                    <h6>{{item}}</h6>
                    <button @click="addToCart({name: item})">add</button>
                </div>

            </div>
            <!-- TRIGGERS FOR USER -->
            <div class="github-user-trigger">
                <h3>GitHub User triggers</h3>
                <input placeholder="username" v-model="username"/>
                <button @click="findUser">Find</button>
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
        <logs v-bind:logs='logs'/>
    </div>
</template>

<script>
import Logs from './Logs.vue';

export default {
    data() {
        return {
            logs: [],
            username: ''
        }
    },
    components: {
        'logs': Logs
    },
    methods: {
        //LOGS METHOD
        pushLog(logText) {
            this.logs.push(logText);
        },
        //COUNTER METHODS
        counterIncAction() {
            this.$store.dispatch('increaseCount');
            this.pushLog('counterIncAction');
        },
        counterDecAction() {
            this.$store.dispatch('decreaseCount');
            this.pushLog('counterDecAction');
        },
        counterIncMutation() {
            this.$store.commit('INCREASE_COUNT');
            this.pushLog('counterIncMutation');
        },
        counterDecMutation() {
            this.$store.commit('DECREASE_COUNT');
            this.pushLog('counterDecMutation');
        },
        //SHOP CART METHODS
        addToCart(item) {
            this.$store.dispatch('addProductToCart', item);
            this.pushLog(`addToCart ${item.name}`);
        },
        //GITHUB USER METHODS
        findUser() {
            this.$store.dispatch('fetchUser', this.username);
            this.pushLog('findUser')
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

.shopping-cart-trigger {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 60px));
    grid-template-rows: repeat(auto-fit, minmax(60px, 60px));
    grid-gap: 15px 14px;
}

.item {
    width: 60px;
    height: 60px;
    border: solid 1px #d3d3d3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.item h6 {
    margin: 0;
}

.item button {
    width: 55px;
    height: 20px;
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

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

section > *:last-child {
    width: 100%;
    height: 100%;
    min-height: 50vh;
}
</style>
