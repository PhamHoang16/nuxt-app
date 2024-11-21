<template>
    <v-app>
      <Navbar />
      <Header />
      <v-main>
        <v-container fluid>
          <nuxt-page />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Navbar from '~/components/NavBar.vue';
  import Header from '~/components/Header.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      Navbar,
      Header
    }
  }
  </script>
  
  <style scoped>
  /* Thêm các kiểu dáng tùy chỉnh nếu cần */
  </style>