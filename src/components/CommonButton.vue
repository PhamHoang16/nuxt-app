<template>
    <v-btn @click="handleClick">
      {{ buttonName }}
    </v-btn>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'CommonButton',
    props: {
      buttonName: {
        type: String,
        required: true
      }
    },
    methods: {
      async handleClick() {
        try {
          const response = await axios.get('https://your-api-endpoint.com');
          console.log('API response:', response.data);
        } catch (error) {
          console.error('API call failed:', error);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  button {
    color: blue;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  </style>