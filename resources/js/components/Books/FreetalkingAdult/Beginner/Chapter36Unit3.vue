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
                           background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>How many languages are spoken in your country?
  </li>

  <li>What language is used the most in your country?
  </li>

  <li>How were you able to learn it?
  </li>

  <li>What languages would you like to learn? Why?
  </li>

  <li>Do you speak other languages aside from your native one? What?
  </li>

  <li>Why are languages important?
  </li>

  <li>Is English important in your country? Why?
  </li>

  <li>How long have you been studying English?
  </li>

  <li>Do you like speaking it? Why?
  </li>

  <li>Do you want to be multilingual? Why?
  </li>

  <li>When you study a language, do you like to study reading, writing, speaking and listening?
  </li>

  <li>What language is spoken in France? China? Japan? England? Spain? Portugal?
  </li>

  <li>Do you know how to say "Hello" in other languages?
  </li>

  <li>When someone wants to tell you something in English, are you more comfortable in reading than hearing it? Why?
  </li>

  <li>What motivates you in learning a foreign language?
  </li>

  <li>What do you find most difficult about it? Easiest?
  </li>

  <li>What do you wish to accomplish within a year?
  </li>

  <li>What do you do to keep learning this language?
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
