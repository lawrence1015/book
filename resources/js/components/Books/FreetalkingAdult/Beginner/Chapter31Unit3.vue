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
                           background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>


<ol style="margin: 12px;">
 <li>Do you enjoy meeting new people? Why or why not?
 </li>

 <li>Are you usually the first to talk to new people? Why or why not?
 </li>

 <li>How do you usually start conversations with new people?
 </li>

 <li>When do you start considering an acquaintance as a friend?
 </li>

 <li>Do you invite acquaintances into your home?
 </li>

 <li>Do you eat out or drink with acquaintances?
 </li>

 <li>What do you do when you are introduced to a new person?
 </li>

 <li> Can you tell if an acquaintance would become a friend immediately? How?
 </li>

 <li>What type of people do you like to meet?
 </li>

 <li>Do all acquaintances you meet become your friends?
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
