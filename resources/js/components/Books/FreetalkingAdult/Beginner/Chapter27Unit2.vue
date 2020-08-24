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


  <li style="list-style-type: none;">In comparing two different things, use the word "while."
  </li>
  <li style="list-style-type: none;">Example:
  </li>
  <li style="list-style-type: none;">The first picture is green while the second picture is blue.
  </li>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
 Consider the following job advertisements.
</p>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>


                               <v-card-text>

                                   <li style="list-style-type: none; text-align: center;">We are currently looking for:
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">Secretary
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">Sales Person
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">General Manager
                                   </li>

                                   <br />

                                   <li style="list-style-type: none; text-align: center;">You must have the following:
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">a Business major
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">a pleasant personality
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">a passion for excellence and success
                                   </li>

                                   <br />

                                   <li style="list-style-type: none; text-align: center;">Career. Good Salary. Happy Co-workers.
                                   </li>
                                   <li style="list-style-type: none; text-align: center;">Join us now!
                                   </li>


                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>


                               <v-card-text>
                                 <li style="list-style-type: none; text-align: center;">SUCCESS
                                 </li>
                                 <li style="list-style-type: none; text-align: center;">awaits you!
                                 </li>

                                 <br />

                                 <li style="list-style-type: none; text-align: center;">Do you have good marketing skills?
                                 </li>
                                 <li style="list-style-type: none; text-align: center;">Do you enjoy business jobs?
                                 </li>
                                 <li style="list-style-type: none; text-align: center;">Are you good with communication?
                                 </li>

                                 <br />

                                 <li style="list-style-type: none; text-align: center;">Apply Now!
                                 </li>

                                 <br />

                                 <li style="list-style-type: none; text-align: center;">Vacancies are open for:
                                 </li>

                                 <br />

                                 <li style="list-style-type: none; text-align: center;">Sales Representatives
                                 </li>
                                 <li style="list-style-type: none; text-align: center;">Customer Assistants
                                 </li>

                                 <br />

                                 <li style="list-style-type: none; text-align: center;">Get a High Salary!
                                 </li>
                                 <li style="list-style-type: none; text-align: center;">Travel for Free!
                                 </li>



                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>



<ol style="margin: 12px;">
 <li>What is the first poster about? The second one?
 </li>

 <li>What jobs are open in the first poster? The second one?
 </li>

 <li>What are the requirements in the first poster? The second one?
 </li>

 <li>What are the benefits in the first poster? The second one?
 </li>

 </ol>



</div>





<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
 <li>Do you have a job?
 </li>

 <li>If yes, what is it? How long have you been working already?
 </li>

 <li>Do you enjoy it?
 </li>

 <li>If no, what job would you like to have? Why?
 </li>

 <li>What do you think is the nicest job in the world?
 </li>

 <li>What is the most stressful job?
 </li>

 <li>What things should you consider in a job?
 </li>

 <li>As an employee, what benefits would you like to have?
 </li>

 <li>What are some working culture in your country?
 </li>

 <li>What job suits your personality? Why?
 </li>

 <li>Can you describe your workplace?
 </li>

 <li>What can you say about your co-workers?
 </li>

 <li>Is it important to like the people you work with? Why?
 </li>

 <li>Did you use to have a part-time job? What is it?
 </li>

 <li>What makes a good employee?
 </li>

 <li>What makes a good boss?
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
