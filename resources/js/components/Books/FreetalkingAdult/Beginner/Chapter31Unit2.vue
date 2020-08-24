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
           background-color: #a7d7c5;">Enhance!</h3>

<div style="padding : 16px;">


<p>
  The following are "ice-breakers" or conversation starters. They are useful in making acquaintances. Try to reply to the conversation starters as your teacher asks you. You may also ask your teacher and listen to his/her answer.
</p>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv1UXRU0/7/screen_2x/canva-man-wearing-white-top-in-front-of-woman-wearing-blue-long-sleeved-top-MADGv1UXRU0.jpg">
                               </v-card-media>

                               <v-card-text>
                                 General
                                 <ol style="margin: 12px;">
                                  <li>Hi! How are you?
                                  </li>

                                  <li>The weather is very cold, isn't it?
                                  </li>

                                  <li>How was your day?
                                  </li>

                                  <li>What are your hobbies?
                                  </li>

                                 </ol>
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGvm3xwYI/7/screen_2x/canva-two-women-standing-by-the-door-MADGvm3xwYI.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Family Gathering
                                   <ol style="margin: 12px;">
                                    <li>How have you been this past year?
                                    </li>

                                    <li>How is your family?
                                    </li>

                                    <li> Where is uncle (or aunt)?
                                    </li>

                                    <li>What are your plans this weekend?
                                    </li>

                                   </ol>
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv0MML1s/7/screen_2x/canva-people-sitting-on-green-lawn-grass-while-doing-hands-up-at-daytime-MADGv0MML1s.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Going to a New School
                                   <ol style="margin: 12px;">
                                    <li>Are you new here too?
                                    </li>

                                    <li>Why did you choose this school/major?
                                    </li>

                                    <li>How do you find the school so far?
                                    </li>

                                    <li>Do you mind if I hang out with you? I don't know anybody here.
                                    </li>

                                    <li>What subjects did you take?
                                    </li>

                                   </ol>
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGvh7ugzo/7/screen_2x/canva-people-standing-on-road-beside-market-and-high-rise-buildings-MADGvh7ugzo.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Travelling

                                   <p>(To Natives)
                                   </p>

                                   <ol style="margin: 12px;">
                                    <li>Good day! We are new here. Can you recommend some place to visit?
                                    </li>

                                    <li>What food should we try?
                                    </li>

                                    <li>How much is the fare for a taxi ride?
                                    </li>

                                    <li>Can you give us some tips about what to avoid?
                                    </li>

                                    <li>How do you say "Hello" and "Thank you" in your language?
                                    </li>

                                   </ol>

                                   (To Fellow Travellers)

                                   <ol style="margin: 12px;">
                                    <li>Where are you guys from?
                                    </li>

                                    <li>Have you been here before?
                                    </li>

                                    <li>How often do you travel?
                                    </li>



                                   </ol>
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>




</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
<div style="padding : 16px;">


  <ol style="margin: 12px;">
   <li>Do you think these "conversation starters" will help in making acquaintances?
   </li>

   <li>Do you use these starters? When?
   </li>

   <li>Which of these lines do you use most often?
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
