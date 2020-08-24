<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">


<h3 style="padding-top: 7px;
           margin-left: -18px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 15px;
           margin-top: 40px;
           background-color: #a7d7c5;">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Read and answer each number in just 30 seconds. Ready? Set! Go!
</p>

<ol style="margin: 12px;">

  <li>Who should be obeyed?
  </li>
  <p>a. parents  b. cupcake
  </p>



  <li>What needs to be implemented?
  </li>
  <p>a. criminal b. rules
  </p>



  <li>What is a cop?
  </li>
  <p>
    a. a police officer b. a thief
  </p>



  <li>What do you do in a salon?
  </li>
  <p>
    a. get a hair color b. drive a car
  </p>



  <li>What do you do when giving a lecture?
  </li>
  <p>
    a. eat sweet foods b. teach students
  </p>



  <li>What needs to be treated fairly?
  </li>
  <p>
    a. nails b. people
  </p>



  <li>Who governs your country?
  </li>
  <p>
    a. the thieves b. the president
  </p>



  <li>Who are the inhabitants of China?
  </li>
  <p>
    a. Chinese b. foreigners
  </p>



  <li>What do you do to a depressed person?
  </li>
  <p>
    a. Put to jail b. cheer up
  </p>



  <li>What happens to a bankrupt business?
  </li>
  <p>
    a. closes down b. becomes successful
  </p>



  <li>What does 'staff' means?
  </li>
  <p>
    a. lawyers  b. employees
  </p>



  <li>What do you do when you unwind?
  </li>
  <p>
    a. arrest people b. relax
  </p>



  <li>I have a muscle ache. What does this mean?
  </li>
  <p>
    a. pain in the body b. heart disease
  </p>



  <li>What happens when you are included in a group?
  </li>
  <p>
    a. they hate you b. you are part of them
  </p>



  <li>What is an example of a workplace?
  </li>
  <p>
    a. an office b. president's actions
  </p>



</ol>



</div>

 </div>


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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

body{

  font-size: 16px;
}

</style>
