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
           background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">


<p>Using adverbs of time
</p>

<li style="list-style-type: none;">Adverbs of time are words that tell us when an action happened, for how long, and how often.
</li>






<v-container>
  <v-layout>
    <v-flex xs12 sm12 md4>
      <div>
<table>

  <tr>
    <td>When?</td>
    <td>today, yesterday, later, now, last year</td>
  </tr>
  <tr>
    <td>For how long?</td>
    <td>all day, not long, for a while, since last year</td>
  </tr>
  <tr>
    <td>How often?</td>
    <td>sometimes, frequently, never, often, yearly.</td>
  </tr>

</table>
</div>
</v-flex>
</v-layout>
</v-container>

<p>
  Examples
</p>

<ol style="margin: 12px;">
  <li>I went to school yesterday.
  </li>
  <li style="list-style-type: none;">Question: When did you go to school?
  </li>
  <br />

  <li>I slept all day.
  </li>
  <li style="list-style-type: none;">Question: For how long did you sleep?
  </li>
  <br />

  <li>We ride the bus sometimes.
  </li>
  <li style="list-style-type: none;">Question: How often do you ride the bus?
  </li>



</ol>



</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  A. Formulate questions based on the sentences.
</p>

<ol style="margin: 12px;">

  <li>We frequently watch baseball games
  </li>

  <li>They toured Canada last year.
  </li>

  <li>He will call you later.
  </li>

  <li>I have been waiting here for a while?
  </li>

  <li>Mr. Kim has grown rice since last summer.
  </li>

  <li>Cecille rides her bike sometimes.
  </li>

  <li>Matt has lived in the Philippines since 2001.
  </li>

  <li> I never travel alone.
  </li>

  <li>We go there yearly.
  </li>

  <li>I will talk to you now.
  </li>

  <li>The flute concert was yesterday.
  </li>

  <li>We studied all day.
  </li>

  <li>She often cooks kimbop.
  </li>

  <li>Dora travels always.
  </li>

  <li>We will watch a movie today.
  </li>
</ol>

<p>
  B. Complete the following sentences as true to your situation.
</p>

<ol style="margin: 12px;">

  <li>I always __________ when I am tired.
  </li>

  <li>I always __________ every Chuseok.
  </li>

  <li>I always __________ when I am watching TV.
  </li>

  <li>I frequently __________ with my family.
  </li>

  <li>I frequently _________ every morning.
  </li>

  <li>I frequently enjoy ____________.
  </li>

  <li>I sometimes _________ on the weekends.
  </li>

  <li>I sometimes believe in __________.
  </li>

  <li>I sometimes eat _____________.
  </li>

  <li>I occasionally go to _____________
  </li>

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
