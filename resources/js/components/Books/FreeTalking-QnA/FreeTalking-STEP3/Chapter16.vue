<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/NDjNc/MADyQzNDjNc/1/s2/canva-man-working-on-laptop-while-woman-takes-notes-MADyQzNDjNc.jpg" style="max-width: 100%; display:block; height: auto;" >

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Employment Issues</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What do you think you should do if you have more than one supervisor and each one gives you different directions?
     </li>
     <br />
     <li class="mb-2">
        Imagine you and your friend work at the same company. You know you work harder and do a better job than your friend.
        <ul>
        <li class="mt-2"> To your surprise, your friend gets a promotion and is now your supervisor. What do you do?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Imagine your supervisor is making poor decisions for the company.
        <ul>
        <li class="mt-2"> Do you say anything? Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        If the same salary and benefits were offered by all available employers for all jobs, which job would you choose? why?
     </li>
     <br />
     <li class="mb-2">
        If you had known when you were younger what you now know about jobs and careers, what might you have done differently to be better prepared for the career you want?
     </li>
   </ol>



</div>


       </v-layout>
     </v-container>
  </v-layout>
  </v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],



  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
