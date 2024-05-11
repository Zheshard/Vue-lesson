<template>
  <div id="app">
    <!-- <HomePage/> -->
    <BlogPage/>
    <!-- <BlogDetails/> -->
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
import BlogPage from './components/BlogPage.vue'
// import BlogDetails from './components/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    // HomePage,
    BlogPage
    // BlogDetails
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>
