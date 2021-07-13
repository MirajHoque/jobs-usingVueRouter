<template>
  <div v-if="jobs.length">
    <div v-for="element in jobs" :key="element.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: element.id}}">
      <h2> {{ element.title }}</h2>
    </router-link>
  </div>
  </div>

  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then((res)=>res.json()) //if annonymous function has only parameter doesn't mandatory to use ()
    .then(data=> this.jobs=data)
    .catch(err=> console.log(err.message))
  }


}
</script>

<style>
.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444
}
.job h2:hover{
  background: #ddd;
}
.job a{
  text-decoration: none;
}
</style>