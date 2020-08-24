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


<p>Subject-Verb agreement is the foundation of English sentences. It is a vital factor in making grammatically correct sentences.
</p>

<p>
The rule is "When the subject is singular, the verb is singular. When the subject is plural, the verb is plural."
</p>

<li style="list-style-type: none; font-size:13px;" class="pl-2 ml-3">verb = plural
</li>
<span style='color:green; padding: 55px;'>&#8595;</span>
<li style="list-style-type: none;">They eat cakes.
</li>
<span style='color:red; padding: 15px;'>&#8593;</span>
<li style="list-style-type: none; font-size:13px;" class="pl-1 ml-1">noun = plural
</li>

<br />

<li style="list-style-type: none; font-size:13px;" class="pl-2 ml-3">verb = plural
</li>
<span style='color:green; padding: 50px;'>&#8595;</span>
<li style="list-style-type: none;">She eats cakes.
</li>
<span style='color:red; padding: 15px;'>&#8593;</span>
<li style="list-style-type: none; font-size:13px;" class="pl-1 ml-1">noun = plural
</li>

<br />

<li style="list-style-type: none;">Remember!
</li>
<li style="list-style-type: none;">Even if "I" and "You" are singular, they are followed by the base form for the verb.
</li>

<br />

<li style="list-style-type: none;">Example:
</li>
<li style="list-style-type: none;">You <u>eat</u> cakes!
</li>


</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
Identify the subject and the verb and correct the sentence if it is wrong.
</p>

<ol style="margin: 12px;">

  <li>We likes to dance.
  </li>

  <li>She know just what to do.
  </li>

  <li>Michelle dresses up well.
  </li>

  <li>Portia listen to the radio every­ day.
  </li>

  <li>My mom cook the best adobo!
  </li>

  <li>The room need serious cleaning.
  </li>

  <li>The houses is beautiful.
  </li>

  <li>My computer do not work well.
  </li>

  <li>Harry sing like Psy!
  </li>

  <li>The sisters watches this show every night!
  </li>

</ol>



<p>
Create sentences using the following words.  Make sure they follow the correct subject-verb agreement.
</p>

<ol style="margin: 12px;">

  <li>Children - is
  </li>

  <li>Sam and Clare - cook
  </li>

  <li>Tony - hide
  </li>

  <li>He - sleep
  </li>

  <li>They - like
  </li>

  <li>Bea and John - dance
  </li>

  <li>Dara - sing
  </li>

  <li>My sister - walk
  </li>

  <li>Mr. Kim - talk
  </li>

  <li>The teacher - give
  </li>

</ol>

<p>
Give the proper verb to complete the following sentences. Observe the proper grammar rules.
</p>

<ol style="margin: 12px;">

  <li>Cecile __________ really, really fast.
  </li>

  <li>We ___________ one or two mountains in a month.
  </li>

  <li>I ___________ deliver newspapers every morning as a part-time job.
  </li>

  <li>He _________ in a cafeteria after school.
  </li>

  <li>They _________ hip-hop very well.
  </li>

  <li>My mother ________ me every day.
  </li>

  <li>Dorothy _________ her family very much.
  </li>

  <li>You _________ your clothes every morning, don't you?
  </li>

  <li>He __________ nice pictures of nature and people.
  </li>

  <li>Julian and Patrick _________ very delicious cake.
  </li>

  <li>They ___________ movies every weekend.
  </li>

  <li>James and Dave _________ basketball every afternoon.
  </li>

  <li>Lee __________ his notes before going to bed.
  </li>

  <li>Anna ____________ English very well.
  </li>

  <li>Dora ___________ her money in the bank.
  </li>

</ol>

</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What are you doing right now?
  </li>

  <li>Why are you doing it?
  </li>

  <li>If you are free to do as you wish, what would you like to do now? Why?
  </li>

  <li>What things do you like to do every day?
  </li>

  <li>What things don't you like to do every day?
  </li>

  <li>What would you feel if you can go on vacation every day?
  </li>

  <li>Wouldn't you be bored?
  </li>

  <li>What things should be done every day? Why?
  </li>

  <li>What do you usually do before going to bed?
  </li>

  <li>What do you usually do when you wake up in the morning?
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
