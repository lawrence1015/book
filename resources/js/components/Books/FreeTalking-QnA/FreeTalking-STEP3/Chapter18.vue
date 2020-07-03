<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/beautiful-young-woman-making-selfie-by-smart-phone-while-lying-couch-home_231208-1295.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Excuses and Lies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Who lied to you last? When?
       <ul>
       <li class="mt-2"> How did you feel when you found out the truth?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        When have you lied or made up an excuse?
        <ul>
        <li class="mt-2"> Why did you do it?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever told a "white lie"?
        <ul>
        <li class="mt-2"> How is this different from any other lie (or excuse)?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever been caught in a lie? When? What did you say?
     </li>
     <br />
     <li class="mb-2">
        Why do you think some people frequently lie or make up excuses instead of telling the truth?
     </li>
     <br />
     <li class="mb-2">
        Imagine a world where everyone must always tell the truth. Describe this world.
        <ul>
        <li class="mt-2">  Do you think that in some situations it is better to lie or make up an excuse? Why or why not?</li>
       </ul>
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
