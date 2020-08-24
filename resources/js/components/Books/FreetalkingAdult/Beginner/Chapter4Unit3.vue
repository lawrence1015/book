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


<p>TO is followed by the base form of the verb (no -ing).
</p>

<p>We use the past tense of the verb to indicate something which already happened. We also use past time expressions like 'yesterday', 'last week', and 'ago.'
</p>

<p>We can turn most verbs into the past tense form by adding -d or -ed. Look at the table for examples:
</p>

<v-container>
  <v-layout>
    <v-flex xs12 sm12 md4>
      <div>
<table>
  <tr>
    <th>PRESENT FORM</th>
    <th style= "padding: 5px">PAST FORM</th>
  </tr>
  <tr>
    <td>change</td>
    <td>changed</td>
  </tr>
  <tr>
    <td>stop</td>
    <td>stopped</td>
  </tr>
  <tr>
    <td>jog</td>
    <td>jogged</td>
  </tr>
  <tr>
    <td>exercise</td>
    <td>exercised</td>
  </tr>
  <tr>
    <td>stroll</td>
    <td>strolled</td>
  </tr>
  <tr>
    <td>miss</td>
    <td>missed</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>cleared</td>
  </tr>
</table>
</div>
</v-flex>
</v-layout>
</v-container>

<P>
  However, many verbs also change into new forms to indicate the past tense.
</P>


<v-container>
  <v-layout>
    <v-flex xs12 sm12 md4>
      <div>
<table>
  <tr>
    <td style=" padding-right: 80px;">draw</td>
    <td style=" padding-right: 80px;">drew</td>
  <tr>
    <td style=" padding-right: 80px;">read </td>
    <td style=" padding-right: 80px;">read (but pronounced as "red")</td>
  </tr>
  <tr>
    <td style=" padding-right: 80px;">eat</td>
    <td style=" padding-right: 80px;">ate</td>
  </tr>
  <tr>
    <td style=" padding-right: 80px;">fly</td>
    <td style=" padding-right: 80px;">flew</td>
  </tr>
  <tr>
    <td style=" padding-right: 80px;">blow</td>
    <td style=" padding-right: 80px;">blew</td>
  </tr>
</table>
</div>
</v-flex>
</v-layout>
</v-container>


</div>



<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>How do you turn verbs into their past tense forms?
  </li>

  <li>What words should you use to indicate the past tense?
  </li>

  <li>Make sample sentences using some verbs in their past forms.
  </li>
</ol>

<p>Turn the sentences below into the past tense. Change the underlined verbs and use the words in the parentheses.
</p>

<ol style="margin: 12px;">
  <li> The wind blows very hard. (yesterday)
  </li>

  <li>Tina eats the cake. (last night)
  </li>

  <li>They are going to the Philippines. (a month ago)
  </li>

  <li> My brothers hate that TV show. (last year)
  </li>

  <li> I promise to help you with your homework.  (two days ago)
  </li>

  <li>My parents do not want to eat there. (last day)
  </li>

  <li> He helps me carry these boxes. (yesterday)
  </li>

  <li>She bakes delicious cookies. (this morning)
  </li>

  <li>Mina and Sunny want to rent this apartment.  (a month ago)
  </li>

  <li>Tom is making a lot of kimbap for us. (yesterday)
  </li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Where did you spend your childhood?
  </li>

  <li>What did you like to do as a child?
  </li>

  <li>Talk about your parents when you were young.
  </li>

  <li>What is your favorite memory from childhood?
  </li>

  <li>Do you still keep in touch with your childhood friends?
  </li>

  <li>When you were young, what did you want to become? Has it changed?
  </li>

  <li>Does it feel nostalgic to think about the past?
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
