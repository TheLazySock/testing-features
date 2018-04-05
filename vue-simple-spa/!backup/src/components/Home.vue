<template>
  <div>
    <h3>Hi! this is our App's Home</h3>
    <ul>
      <li v-if="users != null" v-for="user in users">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint disable */
import Axios from "axios";
const BudgetManagerAPI = `http://${window.location.hostname}:3001`;
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers(context) {
      Axios.get("http://jsonplaceholder.typicode.com/users", {}).then(
        ({ data }) => (this.users = data)
      );
    }
  }
};
</script>

http://jsonplaceholder.typicode.com/users