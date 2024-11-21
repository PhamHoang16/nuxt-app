<template>
    <v-container>
      <v-card>
        <v-card-title>
          Danh sách người dùng
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :loading="loading"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" @click="viewUser(item)">Xem</v-btn>1
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    data() {
      return {
        users: [], // Dữ liệu user sẽ được lưu ở đây
        loading: false, // Trạng thái loading
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Tên người dùng', value: 'username' },
          { text: 'Email', value: 'email' },
          { text: 'Hành động', value: 'actions', sortable: false }
        ]
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        this.loading = true;
        try {
          const response = await axios.get('http://localhost:8080/users');
          this.users = response.data;
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        } finally {
          this.loading = false;
        }
      },
      viewUser(user) {
        alert(`Xem chi tiết người dùng: ${user.username}`);
      }
    }
  });
  </script>
  
  <style scoped>
  .elevation-1 {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  </style>