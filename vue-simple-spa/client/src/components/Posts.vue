<template>
    <div>
      <h1>Posts</h1>
      <h3>This file will list all the posts</h3>
      <section v-if="posts.length">
        <h4>list of posts</h4>
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr v-for="post in posts" :key="post.title">
            <td> {{ post.title }} </td>
            <td> {{ post.description }}  </td>
          </tr>
        </table>
      </section>

      <section v-if="!posts.length">
        <p> There are no posts... Let's add one now </p>
        <div>
          <router-link :to="{ name: 'newPost' }">add new post</router-link>
        </div>
      </section>
    </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'Post',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      getPosts() {
        var vm = this;
        fetch('http://localhost:3000/posts')
        .then(function(res) {
          console.log(res);
          return res.json();
        })
        .then(function(data) {
          console.log(data);
          vm.posts = data;
        })
      }
    },
    mounted () {
      console.log(this.posts)
      this.getPosts();
      // console.log(this.posts);
    }
  }
</script>