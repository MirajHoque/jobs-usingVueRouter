<template>
  <h1>Job Details Page</h1>
  <h2>The job id is: {{ id }}</h2>
</template>

<script>
export default {
 /* data(){
    return{
      id: this.$route.params.id
    }
  }
  */
 props:['id']

}
</script>

<style>

</style>