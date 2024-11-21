<template>

  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import CommonButton from '~/components/CommonButton.vue';
  
  export default defineComponent({
    name: 'IndexPage',
    setup() {
      const search = ref('');
      const headers = ref([
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Country', value: 'country' },
      ]);
      const items = ref([
        { name: 'John Doe', age: 30, country: 'USA' },
        { name: 'Jane Smith', age: 25, country: 'Canada' },
        { name: 'Sam Green', age: 35, country: 'UK' },
      ]);
  
      return {
        search,
        headers,
        items,
      };
    },
  });
  </script>
  
  <style scoped>
  .v-container {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  
  .v-data-table {
    width: 100%;
  }
  
  .even-row {
    background-color: #000000;
  }
  
  .odd-row {
    background-color: #000000;
  }
  </style>