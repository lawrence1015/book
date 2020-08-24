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


<p>
  People commonly get confused with the usage of the following words. Review them carefully.
</p>



<li style="list-style-type: none;">Using “They’re” and “Their”
</li>

<li style="list-style-type: none;">Their - shows possession; the possessive for of the pronoun “they”
</li>

<li style="list-style-type: none; margin-left: 50px;">Ex. Their house is very nice.
</li>

<br />

<li style="list-style-type: none;">They’re - a shortened form of the words “they are”
</li>

<li style="list-style-type: none; margin-left: 50px;">Ex. They’re American tourists.
</li>

<li style="list-style-type: none; margin-left: 50px;">(They are American tourists.)
</li>


</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
     <div style="padding : 16px;">


<p>Fill in the blanks with the correct word. Say “a” for “their” and “b” for “they’re.”
</p>

<ol style="margin: 12px;">
  <li>Will you go to _____ concert?
  </li>

  <li>If the manager will talk to them, ______ going to change _______ minds.
  </li>

  <li>_________ new to this place.
  </li>

  <li>Sometimes ______ also touring in Africa or South America.
  </li>

  <li>Your artistic designs will convince _____ boss to work with us!
  </li>

  <li>Have you tried ______ new menu?
  </li>

  <li>_________ warm and hospitable to tourists.
  </li>

  <li>This coming September, ______ going to release a new iPhone model.
  </li>

  <li>Our sincerity and simple gifts will put smiles on _____ faces.
  </li>

  <li>Because of the good reviews, I want to visit _____ resort.
  </li>

  <li>________not coming here often anymore.
  </li>

  <li>You should have seen ______ reactions when Brad Pitt got out of the car.
  </li>

  <li>The Boston Celtics will make ____ games greater this year.
  </li>

  <li>________ about to close the shop! Hurry!
  </li>

  <li>I want to know what’s on _____ minds.
  </li>
</ol>

</div>



<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What is your favorite invention?  Why?
  </li>

  <li>Have you tried inventing some anything?
  </li>

  <li>Why is it important to invent and upgrade?
  </li>

  <li>What inventions you find useful in your daily life?
  </li>

  <li>Name one invention that you can carry around which you find extremely useful at work. (Example, stapler)
  </li>

  <li>Do you know any famous inventors? Who?
  </li>

  <li>What famous inventions came from your country?
  </li>

  <li>If you can invent a machine that creates money, what will you do?
  </li>

  <li>If you can invent a machine that creates food, what will you do?
  </li>

  <li>If you can invent a machine that turns water into soju, what will you do?
  </li>

  <li>What would you like to invent?
  </li>

  <li>As an inventor, what would ill if you do if you found out somebody copied your work?
  </li>

  <li>What thing do you think shouldn’t have been invented? (ex. Guns, bomb)
  </li>

  <li>What invention in the future are you looking forward to? (ex. Flying cars)
  </li>

  <li>Is it possible in the future to live on the moon or on other planets in the future? Would you like to live there?
  </li>

  <li>How did television change people’s lives?
  </li>

  <li>Should scientist invent something to make a person immortal? Why or why not?
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
