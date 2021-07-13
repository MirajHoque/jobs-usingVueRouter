<template>
  <div v-for="element in jobs" :key="element.id">
    <h2> {{ element.title }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs: [
        {title: 'Ninja UX Designer', id: 1, details: 'lorem'},
        {title: 'Ninja Web Developer', id: 2, details: 'lorem'},
        {title: 'Ninja Vue Developer', id: 3, details: 'lorem'}
      ]
    }
  }

}
</script>

<style>

</style>