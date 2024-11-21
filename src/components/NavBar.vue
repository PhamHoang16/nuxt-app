<template>
    <v-navigation-drawer app>
      <!-- Nội dung của thanh navbar bên trái -->
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu Item 1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menu Item 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Thêm các kiểu dáng tùy chỉnh nếu cần */
  </style>