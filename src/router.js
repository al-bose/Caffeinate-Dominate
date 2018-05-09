import Vue from 'vue'
import Router from 'vue-router'
import Workouts from './components/Workouts.vue'
import Upperbody_Heavy from './components/Upperbody_Heavy.vue'
import Upperbody_Hypertrophy from './components/Upperbody_Hypertrophy'
import Lowerbody_Heavy from './components/Lowerbody_Heavy'
import Lowerbody_Hypertrophy from './components/Lowerbody_Hypertrophy'
import Weight_Tracker from './components/Weight_Tracker'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workouts',
      component: Workouts
    },
    {
      path: '/Upperbody_Heavy',
      name: 'Upperbody_Heavy',
      component: Upperbody_Heavy
    },
    {
      path: '/Upperbody_Hypertrophy',
      name: 'Upperbody_Hypertrophy',
      component: Upperbody_Hypertrophy
    },
    {
        path: '/Lowerbody_Heavy',
        name: 'Lowerbody_Heavy',
        component: Lowerbody_Heavy
    },
    {
        path: '/Lowerbody_Hypertrophy',
        name: 'Lowerbody_Hypertrophy',
        component: Lowerbody_Hypertrophy
    },
    {
        path: '/Weight_Tracker',
        name: 'Weight_Tracker',
        component: Weight_Tracker
    }


  ]
})