<template>

<div :style = "{fontSize: fontSize + 'px'}">

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 60px; background-color: #a7d7c5;">Tips</h3>
     <div style="padding : 16px;">

<p>
<b>A.</b> Use “DOES” for singular (only one) subject in the present tense except for “I” and "You."
<br>
<li style="list-style-type: none;">She does not want to go there.
</li>
<li style="list-style-type: none;">He does his homework every night. Does Jack like spicy food?
</li>
<br>
<b>B.</b> Use “DO” for plural (two or more) in the present tense as well as “I" and "You."
<br>
<br>
<li style="list-style-type: none;">You do look like Tom Cruise a bit.
</li>
<li style="list-style-type: none;">Do I have to write a report today?
</li>
<li style="list-style-type: none;">They do not want to join the team.
</li>
<li style="list-style-type: none;">My classmates do want to have a cultural festival.
</li>
<br>
<b>C.</b> Use “DID” for singular or plural subjects in the past tense. It is followed by the base or singular present form of the verb.
<br>
<br>
<li style="list-style-type: none;">Did she know about this last month?
</li>
<li style="list-style-type: none;">They did not prepare yesterday.
</li>
<li style="list-style-type: none;">You and I did have some differences.
</li>
<li style="list-style-type: none;">My brothers did go to America last year.
</li>
</p>





</div>

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
     <div style="padding : 16px;">

  <p>Complete the sentences below. Use "do", "does" or "did."
  </p>

  <ol style="margin: 12px;">
    <li>We _________ not want to be late for class
    </li>

    <li> ___________ you go to the library yesterday?
    </li>

    <li>She _________ study always.
    </li>

    <li>I _________ want to become a pilot when I was young.
    </li>

    <li>My sisters _________ not like to eat fatty foods.
    </li>

    <li> ___________ you want to eat now?
    </li>

    <li>Susy and Annie ___________ like baking.
    </li>

    <li>He _______ know about Egypt's history.
    </li>

    <li> _________ she go to Canada last month?
    </li>

    <li>I _________ want some ice cream right now.
    </li>


  </ol>

</div>

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What is your favorite color?
  </li>

  <li>What is your least favorite color?
  </li>

  <li>What color makes you feel happy?
  </li>

  <li>What color makes you feel sad?
  </li>

  <li>What color do you like to wear the most?
  </li>

  <li>What color do you like to wear the least?
  </li>

  <li>What color do you remember when you say “winter”?
  </li>

  <li>What color do you remember when you say “summer”?
  </li>

  <li>Why do you think colors are important?
  </li>

  <li>Would you like to change the color of the sky or the clouds?
  </li>

  <li>Would you like to change the color of the grass?
  </li>

</ol>

</div>

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
