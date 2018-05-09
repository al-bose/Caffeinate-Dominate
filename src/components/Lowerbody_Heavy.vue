<template>
  <div class="Lowerbody_Heavy">
    
    
    
    <ul>
      <li v-for="(data,index) in exercises" :key="index">
        {{data.exercise}}
      </li>
    </ul>

    <router-link to ="/" id="back_button">&#8249; Back</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Exercises',
  data () {
    return {
      exercises: [
        {"exercise": "Squat ­ 3 sets x 6 reps"},
        {"exercise": "Deadlift ­ 2 sets x 6 reps"},
        {"exercise": "Hamstring Curls ­ 3 sets x 8­-12 reps", },
        {"exercise": "Leg Curls ­ 3 sets x 8­-12 reps"}
     
      ]
    }
  }
}
</script>

<style scoped>
#back_button {
  float: right;
  padding-left: 10px;
}

</style>