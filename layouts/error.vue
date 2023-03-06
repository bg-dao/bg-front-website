<template>
  <div dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
      {{ JSON.stringify(error) }}
    </h1>
    <h1 v-else>
      {{ otherError }}
      {{ JSON.stringify(error) }}
    </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: "default",
  name: "EmptyLayout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    }
  },
  mounted() {
    console.log("this.$route.path", this.$route.path)
    // let path = this.$router.push(this.$route.path)
    // this.$router.push("/")
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
