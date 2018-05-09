<template>
  <div id="app">
    
    <h1>CAFFEINATE & DOMINATE</h1>
    <nav id="back_nav">
      <router-link to ="/" id="back_button">Workouts</router-link>
      <router-link to = "/Weight_Tracker" id="weight_tracker">Max Weights</router-link>
    </nav>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Workouts from './components/Workouts.vue'

export default {
  name: 'app',
  components: {
    Workouts
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Shrikhand);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
body {
  background-image:url(https://thenx.com/blog/wp-content/uploads/2017/04/DSC03351-e1493233529481.jpg);
  background-size:cover;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

#app {
    width: 50%;
    align-content:right;
}

h1 {
    text-align:center;
    padding: 30px;
    color : rgb(255, 255, 255);
    font-family: 'Shrikhand', cursive;
    font-size: 50px;
    }

#back_nav {
  padding: 20px 20px 20px 0;
  text-align: center;
}
#back_button, #weight_tracker {
  padding: 10px;
  text-decoration: none;
  background:black;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  font-family: 'Source Sans Pro', sans-serif;
  margin-right: 15px;
  text-decoration: underline;
}

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
    ul li {
    padding: 5px;
    font-size: 1.3em;
    background-color: black;
    margin-bottom: 2px;
    color:white;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
     }



 p {
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    align-content: center;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    background-color: rgb(197, 193, 193);
    font-size: 1em;
    padding: 1em 0 1em 0;
   }
  
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}



</style>
