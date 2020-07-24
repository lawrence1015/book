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
                           background-color: #a7d7c5;">Tip</h3>
     <div style="padding : 16px;">


<p>
  People commonly get confused with the usage of the following words. Review them carefully.
</p>

<p>
  Using "Your" and "You're"
</p>

<li style="list-style-type: none;">Your - shows possession; the possessive form of the pronoun 'you'
</li>

<li style="list-style-type: none;">Ex. That is your shirt, not mine.
</li>

<br />

<li style="list-style-type: none;">You're- a shortened form of the words "you are"
</li>

<li style="list-style-type: none;">Ex. You're a wonderful person' (You are a wonderful person')
</li>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
     <div style="padding : 16px;">


<p>Fill in the blanks with the correct word. Say "a" for "your" and "b" for "you're."
</p>

<ol style="margin: 12px;">
  <li> ______ homework should be submitted on Monday next week.
  </li>

  <li>Will you bring _____ laptop to school today?
  </li>

  <li>Thank you for _____ kindness!
  </li>

  <li>Among all the people I have known, _____ the funniest!
  </li>

  <li>_____ never going to believe what happened to me today!
  </li>

  <li>She knows that ______ not feeling fine today.
  </li>

  <li>Like the flowers in spring, ______ so full of life and hope.
  </li>

  <li>Did you find _____ silver bracelet?
  </li>

  <li>How come ______ so thin when you eat more than I do?
  </li>

  <li>_____ voice is like that of a mermaid!
  </li>

  <li>We understand why ______ nervous of your big promotion.
  </li>

  <li>I thought ______ not going to come anymore!
  </li>

  <li>_____ shoes are under the cabinet
  </li>

  <li>Love _____ mother and father.
  </li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Can you usually remember your dreams?
  </li>

  <li>What do you dream about more often?
  </li>

  <li>Do you believe that dreams have meanings?
  </li>

  <li>What is one dream that you can't forget?
  </li>

  <li>What do you think it means about your life?
  </li>

  <li>When you are dreaming, do you know that you are just sleeping?
  </li>

  <li>Do you try to find out the interpretation of your dreams? Why or why not?
  </li>

  <li>Which do you have more often: pleasant dreams or nightmares?
  </li>

  <li>What is your most unforgettable nightmare?
  </li>

  <li>Have you ever talked in your sleep?
  </li>

  <li>Have you ever walked in your sleep?
  </li>

  <li>Can dreams predict the future?
  </li>

  <li>Some artistic people turn their dreams into paintings, novels or movies. What do you want to turn your dreams into?
  </li>

  <li>Have you ever dreamed in English?
  </li>

  <li>Can you control what you are doing in your dreams?
  </li>

  <li>What if you dreamed about a massive fire in a building next to your apartment. Will you warn the people there about it?
  </li>

  <li>Did you have a dream that became real? How did you feel about it?
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
