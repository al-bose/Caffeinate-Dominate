<template>
  <div class="hello">

    
    <div class="holder">
    
     <p>SELECT YOUR WORKOUT</p>
    <ul>
      <li v-for="(data,index) in workouts" :key="index">
        <nav>
        <router-link :to ="`/${data.url}`">{{data.workout}}</router-link>
        </nav>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workouts',
  data () {
    return {
      workouts: [
        {"workout": "Upperbody Heavy", "url": "Upperbody_Heavy"},
        {"workout": "Upperbody Hypertrophy", "url": "Upperbody_Hypertrophy"},
        {"workout": "Lowerbody Heavy", "url": "Lowerbody_Heavy"},
        {"workout": "Lowerbody Hypertrophy", "url": "Lowerbody_Hypertrophy"}

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

  ul li:hover {
    background-color: rgb(56, 54, 54);
  }


nav {
  padding: 20px 20px 20px 0;
}

nav a {
  text-decoration: none;
  color :white;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
}
 
</style>
