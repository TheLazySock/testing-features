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
  /* margin-top: 60px; */
}

#app > nav {
  width: 100%;
  background: #f5f5f5;
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
