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
Using Indefinite Pronouns.
 </p>



 <p>
Indefinite pronouns- words that refer to things or people without mentioning who or what they are.
 </p>


 <p>
Study the table below:
 </p>

 <table style="width:100%; border: 1px solid black;
  border-collapse: collapse;">

   <tr>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">People</td>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">Things</td>

   </tr>
   <tr>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">Singular</td>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">nobody, anybody,  Nothing, anything, someone/somebody,   something, everyone, everything</td>

   </tr>
   <tr>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">Plural</td>
     <td style="width:50%; border: 1px solid black; border-collapse: collapse;">both, few, many, several, others</td>

   </tr>

 </table>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Supply the sentences with the appropriate indefinite singular pronoun.
</p>

<ol style="margin: 12px;">

  <li>You can give me _________ for Christmas. I don't really care.
  </li>

  <li>__________ will go to see the concert! There will surely be many people!
  </li>

  <li>There is __________at the garden.
  </li>

  <li> ____________ is keeping me busy right now.
  </li>

  <li>Mrs. Crawford owns ___________ you see in this building!
  </li>

  <li> ___________ can stop me from reaching my dream!
  </li>

  <li>With the internet, ___________ can have access to many websites.
  </li>

  <li> ___________ should go with you to Europe. It's dangerous to go alone!
  </li>

  <li>___________ can go to Lotte world!
  </li>

  <li>It will be wonderful if ____________ in the world will be happy!
  </li>


</ol>




</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>


<ol style="margin: 12px;">
 <li>Can you name some of a person's rights?
 </li>

 <li>Which ones are you most grateful with? Why?
 </li>

 <li>In some countries, citizens have limited rights. What can you say about that?
 </li>

 <li>Should men's rights be different from women's? Why or why not?
 </li>

 <li>In the past, women have no right to vote. What is your reaction to this?
 </li>

 <li>As a citizen of your country, what are your obligations?
 </li>

 <li>As a family member, what are your obligations?
 </li>

 <li>Should men's obligations be different from women's? Why or why not?
 </li>

 <li>Does the president of a country has more obligations than an ordinary citizen? Why?
 </li>

 <li>You have the right to sing and play music. However, your neighbor in the next apartment complains. He said he has the right to sleep which he cannot do because you are noisy. What will you do in this situation?
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
