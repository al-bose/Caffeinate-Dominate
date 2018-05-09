<template>
  <div class="Upperbody_Heavy">
    
    
    
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
        {"exercise": "Bench Press ­ 3 sets x 6 reps"},
        {"exercise": "Pullup ­ 3 sets x 6 reps"},
        {"exercise": "Standing Shoulder Press ­ 1 set x 6 reps", },
        {"exercise": "Lat Pulldown ­ 1 set x 6"},
        {"exercise": "Bicep Curl ­ 3 sets x 8­-12 reps "},
        {"exercise": "Skullcrusher ­ 3 sets x 8­-12 reps "},
      
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