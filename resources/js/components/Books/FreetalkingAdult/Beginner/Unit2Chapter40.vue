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
How do you celebrate during these holidays and special occasions?
</p>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MAAgcORAf6Q/1/screen/canva-sydney-new-years-eve-celebrations-2001-MAAgcORAf6Q.jpg">
                               </v-card-media>

                               <v-card-text>
                                   New Year
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGx6GNFrY/4/screen/canva-couple-walking-on-city-street-MADGx6GNFrY.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Valentine's Day
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://image.freepik.com/free-photo/daughter-mother-with-presents-taking-selfie_23-2148078809.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Mother's Day
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://image.freepik.com/free-photo/little-girl-enjoying-breakfast-with-her-father_23-2148100472.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Father's Day
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQ5tGuGPI/1/screen/canva-celebrating-independence-day-with-sparklers-MADQ5tGuGPI.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Independence Day
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="//live.staticflickr.com/8317/8046081159_e9e3678b15_k.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Chuseok
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQtgrUqmA/2/screen/canva-little-girls-with-painted-faces-MADQtgrUqmA.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Halloween
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://image.freepik.com/free-photo/happy-people-with-burning-bengal-fires-festive-table_23-2147973725.jpg">
                               </v-card-media>

                               <v-card-text>
                                   Christmas
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>




</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Conversation Samples
<br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span>
</h3>

<div style="padding : 16px;">

  <p>
  <b>A</b>
  </p>


  <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

    </table>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;">

  <p>
  <b>A</b>
  </p>


    <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" ><b>{{translation.name}}</b></td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

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
