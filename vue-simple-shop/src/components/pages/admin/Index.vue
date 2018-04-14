<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          msg: 'Welcome to your PRIVATE page, Admin'
      }
  }
}
</script>

<style scoped>
.admin-menu {
  border: solid 1px #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 15px;
  margin-right: 25px;
  padding: 15px;
  background: #ffffff;
}

.admin-menu:hover {
  transform: scale(1.1);
  box-shadow: 7px 7px 10px 2px #6d6d6d72;
  transition: .2s ease;
}

.admin-menu > li {
  list-style: none;
}
</style>

