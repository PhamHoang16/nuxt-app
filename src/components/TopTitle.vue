<template>
    <h1>{{ msg }}</h1>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    props: {
        msg: {
            type: String,
            required: true
        }
    }
});
</script>

<style>
h1 {
    color: red;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;
}

</style>