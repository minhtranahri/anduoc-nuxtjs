<template>
  <div>
    <h1>{{childMessage}}</h1>
    <div>{{propTest}}</div>
    <h3>{{propTest2}}</h3>
    <h2>Method: {{time()}}</h2>
    <h2>Computed: {{timeC}}</h2>
    <input v-model="childMessage">
  </div>
</template>

<script>
    //import Date from ''
    export default {
        name: "FirstComponentChild",
        props: ['propTest', 'propTest2'],
        data(){
          return{
            childMessage: 'this is HomeChild'
          }
        },
        methods: {
          time: function () {
            return Date.now();
          }
        },
        computed: {
          timeC: function () {
            return Date.now();
          }
        }
    }
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
