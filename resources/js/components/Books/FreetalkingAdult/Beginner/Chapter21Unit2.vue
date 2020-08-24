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


<p>Using adverbs of manner.
</p>

<li style="list-style-type: none;">Adverbs of manner are words that answers the question “how?" and explains the manner to which something is done.
</li>
<li style="list-style-type: none;">They usually (not all) end with -Iy.
</li>

<br />

<li style="list-style-type: none;">Example: He drove slowly.
</li>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  A. Fill in the blanks with the proper adverb of the words found after the sentences.
</p>

<ol style="margin: 12px;">

  <li>She waited ___________ for three hours. (patient)
  </li>

  <li>They greeted the guests ___________. (politely)
  </li>

  <li>The heroes fought for their country __________. (brave)
  </li>

  <li>These cupcakes are ______________ baked! (nice)
  </li>

  <li>Billy answered his homework _____________. (correct)
  </li>

  <li>Mother ___________ tucked the children to bed. (gentle)
  </li>

  <li>We ___________ understood today's English lesson. (easy)
  </li>

  <li> _______________, the students apologized to their teacher. (respectful)
  </li>

  <li> You should ____________ pack these vases. (careful)
  </li>


</ol>

<p>
B. Change the following words into their adverb forms and make a sentence for each.
</p>

<ol style="margin: 12px;">

  <li>loud
  </li>

  <li>soft
  </li>

  <li>beautiful
  </li>

  <li>thoughtful
  </li>

  <li>quiet
  </li>

  <li>cheerful
  </li>

  <li>slow
  </li>

  <li>easy
  </li>

  <li>impatient
  </li>

  <li>positive
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
