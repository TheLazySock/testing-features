<!--

<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fefefe5b;
  min-height: 100vh;
  /* margin-top: 60px; */
}

#app > nav {
  width: 100%;
  background: #eeeeee;
  border-bottom: solid 1px #ededed;
  margin-bottom: 25px;
}

.container {
  width: 100%;
  min-height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.container > ul {
  display: inherit;
  list-style: none;
  margin-left: 25px;
  height: 100%;
}

.container > ul > * {
  margin: 0 10px 0 0;
  padding-right: 10px;
  border-right: solid 1px #969696;
  height: 100%;
}

.container > ul > *:last-child {
  border-right: none;
}

</style>

-->

<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'

import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'

export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created () {
    // Subscriptions for mutation
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount () {
      // Cart count
      return this.cartItems.length
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fefefe5b;
  min-height: 100vh;
  /* margin-top: 60px; */
}

#app > nav {
  width: 100%;
  background: #eeeeee;
  border-bottom: solid 1px #ededed;
  margin-bottom: 25px;
}

.container {
  width: 100%;
  min-height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.container > ul {
  display: inherit;
  list-style: none;
  margin-left: 25px;
  height: 100%;
}

.container > ul > * {
  margin: 0 10px 0 0;
  padding-right: 10px;
  border-right: solid 1px #969696;
  height: 100%;
}

.container > ul > *:last-child {
  border-right: none;
}

</style>