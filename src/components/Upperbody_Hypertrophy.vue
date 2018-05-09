<template>
  <div class="Upperbody_Hypertrophy">
    
    
    
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
        {"exercise": "Bench Press Press ­ 4 sets x 8 reps"},
        {"exercise": "Incline Bench Press ­ 4 sets x 8 reps"},
        {"exercise": "Weighted Dips ­ 4 sets x 8 reps"},
        {"exercise": "Upright Rows ­ 4 sets x 8 reps"},
        {"exercise": "Dumbell Shoulder Press ­ 3 sets x 10 reps"},
        {"exercise": "Lat Pulldowns ­ 3 sets x 10 reps"},
        {"exercise": "Bicep Curls ­ 4 sets x 8-­12 reps"},
        {"exercise": "Pushups ­ 4 sets x 8-­12 reps"},
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