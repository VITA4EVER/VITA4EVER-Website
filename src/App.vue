<template>
  <Header />
  <main >
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
</style>