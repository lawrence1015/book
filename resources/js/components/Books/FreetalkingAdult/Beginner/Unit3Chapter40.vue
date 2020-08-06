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

  <li style="list-style-type: none;">People commonly get confused with the usage of the following words. Review them carefully.
  </li>
  <li style="list-style-type: none;">Using “Its” and “It’s”
  </li>
  <li style="list-style-type: none;">Its - shows possession; the possessive for of the pronoun ‘it’
  </li>
  <li style="list-style-type: none; margin-left: 50px;">Ex. Its color is very bright and lively.
  </li>
  <li style="list-style-type: none;"> It’s - a shortened form of the words “it is.”
  </li>
  <li style="list-style-type: none; margin-left: 50px;">Ex. It’s my gift for you.
  </li>
  <li style="list-style-type: none; margin-left: 50px;">(It is my gift for you.)
  </li>


</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
<div style="padding : 16px;">

  <p>Fill in the blanks with the correct word. Say “a” for “its” and “b” for “it’s.”
  </p>

  <ol style="margin: 12px;">
   <li>I can’t use my car today. _____ tires are flat.
   </li>

   <li>_____ always a pleasure to meet you.
   </li>

   <li>We’ll never know until _____ finished.
   </li>

   <li>As you can see, _____ a sunny day today.
   </li>

   <li>When you press this button, _____ color will change to green.
   </li>

   <li>_____ not a problem!
   </li>

   <li>Feel good about your work. _____ the product of your efforts.
   </li>

   <li>_______ never too late to learn what you are interested in.
   </li>

   <li>This oven is affordable. ______ price is cheap but the quality is good.
   </li>

   <li>The document is in ____ folder.
   </li>

   <li>______ always great and wonderful to meet my relatives.
   </li>

   <li> My name is not Marnie. _____ Marie.
   </li>

   <li>I can’t read ____ writings.
   </li>

   <li>_______ going to be this Tuesday.
   </li>

   <li>The book was great! ____ characters are all interesting!
   </li>


  </ol>


</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
 <li>What holiday do you look forward to the most? Why?
 </li>

 <li>What is the biggest holiday in your country?
 </li>

 <li>How does your country celebrate New Year?
 </li>

 <li>How does your country celebrate Christmas?
 </li>

 <li>What do you usually do during a holiday?
 </li>

 <li>What celebration do you celebrate with families and relatives?
 </li>

 <li>What will you do if your boss asks you to work on a holiday?
 </li>

 <li>Are some holidays connected to special food? Give examples.
 </li>

 <li>Are some holidays associated with special clothes? Give examples.
 </li>

 <li>Do you know anyone who needs a holiday vacation? Why?
 </li>

 <li>Where would you like to have a holiday vacation? Why?
 </li>

 <li>What Western holidays are celebrated in your country? Do older people also participate?
 </li>

 <li>What's your favorite holiday food? Activity?
 </li>

 <li>Do you light fireworks on New Year's Eve?
 </li>

 <li>If you can visit a country for a Christmas holiday trip, where will you go? Why?
 </li>

 <li>If you can make a holiday, what will it be? How will people celebrate it?
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
       dialogs:[
        {
          name:'F :',
          speech:"I hate holidays! I feel upset when there’s a holiday!"
        },
        {
          name:'M :',
          speech:"Why? You’re the only person I know who thinks that way!"
        },
        {
          name:'F :',
          speech:"Holidays are bad for the economy. There is no work and people just stay at home, not buying things."
        },
        {
          name:'M :',
          speech:"You’re just saying that because you’re a workaholic! I love holidays! It gives me time to take a rest from my very busy work."
        },
        {
          name:'F :',
          speech:"I just keep on worrying about my work and my office. I would rather be at my office working than taking a rest at home."
        },
        {
          name:'M :',
          speech:"Come on! Give yourself a break. It’s not healthy to just work, work and work."
        },
        {
          name:'F :',
          speech:"Well… I’ll try to rest this coming holiday… after working."
        },
       ],
        translations:[
        {
          name:'F :',
          speech:"난 휴일이 싫어! 휴일이 있으면 속상해!"
        },
        {
          name:'M :',
          speech:"왜? 내가 아는 사람 중에 그렇게 생각하는 사람은 너밖에 없어!"
        },
        {
          name:'F :',
          speech:"휴일은 경제에 좋지 않아. 일이 없고 사람들은 물건을 사지 않고 그냥 집에만 있어."
        },
        {
          name:'M :',
          speech:"넌 그냥 일 중독자라서 그런 말을 하는 거야! 난 휴일이 너무 좋아! 매우 바쁜 일에서 쉴 수 있는 시간을 줘."
        },
        {
          name:'F :',
          speech:"난 내 일과 사무실에 대해 계속 걱정해. 집에서 쉬느니 차라리 회사에서 일하고 싶어."
        },
        {
          name:'M :',
          speech:"어서! 좀 쉬어. 일, 일, 일만 하는 것은 건강하지 않아."
        },
        {
          name:'F :',
          speech:"음… 이번 연휴에는 일 끝나고 쉴 수 있도록 노력할게."
        },
        ]


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
