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
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers(context) {
      var vm = this;
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(function(res) {
        return res.json()
      })
      .then(function(data) {
        vm.users = data
      })
    }
  }
}
// http://jsonplaceholder.typicode.com/users
</script>
