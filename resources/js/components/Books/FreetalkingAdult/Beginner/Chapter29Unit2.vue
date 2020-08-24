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
 Determine if the following is a right, an obligation or both.
</p>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGwBvyfH4/5/screen_2x/canva-sleeping-baby--MADGwBvyfH4.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To Live
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv0Pu9es/7/screen_2x/canva-woman-and-man-waiting-on-train-station-MADGv0Pu9es.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To Travel
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv0G8T5A/7/screen_2x/canva-family-sitting-on-grass-near-building-MADGv0G8T5A.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To Raise a Family
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQ5tXju_c/1/screen/canva-untitled-MADQ5tXju_c.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To get an Education
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQ46Y8bUg/1/screen_2x/canva-untitled-MADQ46Y8bUg.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To Vote
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGxyrpAsQ/4/screen_2x/canva-man-in-white-button-down-shirt-leaning-on-silver-beetle-car-MADGxyrpAsQ.jpg">
                               </v-card-media>

                               <v-card-text>
                                   To own Possessions
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
