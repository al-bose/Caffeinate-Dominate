<template>
  <div class="Lowerbody_Hypertrophy">

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
        {"exercise": "Back Squat Or Front Squat ­ 5 sets x 8 reps"},
        {"exercise": "Deadlift Variation ­ 3 sets x 8 reps"},
        {"exercise": "Hamstring Curl ­ 3 sets x 12 reps"},
        {"exercise": "Calf Raise ­ 5 sets x 15 reps"},
        {"exercise": "Leg Curls ­ 4 sets x 8­-12 reps"},
        {"exercise": "Leg Press ­ 4 sets x 8­-12 reps"}
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