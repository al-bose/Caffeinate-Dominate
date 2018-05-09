<template>
  <div class="Weight_Tracker">
      <p>TAKE YOUR TRAINING TO THE NEXT LEVEL</p>
      <ul>
      <li v-for="(data,index) in weights" :key="index">
        {{data.weight}}
      </li>
    </ul>

    <router-link to ="/" id="back_button">&#8249; Back</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Weights',
  data () {
    return {
      weights: [
        {"weight": "Bench Press: 165"},
        {"weight": "Standing Shoulder Press:­ 75"},
        {"weight": "Lat Pulldown: 42.5"},
        {"weight": "Weighted Dips: 20"},
        {"weight": "Bicep Curl: 50"},
        {"weight": "Skullcrusher: 50"},
        {"weight": "Squat: 185"},
        {"weight": "Deadlift: 225"},
        {"weight": "Leg Curl: 120"},
        {"weight": "Hamstring Curl: 115"},
      
      ]
    }
  }
}
</script>

<style scoped>
    
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
    ul li {
    text-align: center;
    }

  #back_button {
    float: right;
  }


</style>