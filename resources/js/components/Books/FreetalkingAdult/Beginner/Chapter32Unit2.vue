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
 The following pictures show the comparison between Eastern and Western culture. What do you think the pictures mean?
</p>

<li style="list-style-type: none;">Red= Asians/Easterners
</li>
<li style="list-style-type: none;">Blue= Westerners
</li>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>


                          <v-img src="images/family.jpg" />

                               <v-card-text>
                                 Friends/Family
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/opinions.jpg" />

                               <v-card-text>
                                 Expressing Opinions
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/boss.jpg" />

                               <v-card-text>
                                 The Boss
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/conversation.jpg" />

                               <v-card-text>
                                 Conversation
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/time.jpg" />

                               <v-card-text>
                                 Time
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>




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
