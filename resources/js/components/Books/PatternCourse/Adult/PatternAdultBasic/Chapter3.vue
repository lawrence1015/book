<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5EUckok/1/screen/canva-cart-in-the-grocery-MADQ5EUckok.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
      >
     <h1 style="margin:0 -30px 10px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 25px;
    background-color: rgba(2, 21, 70, 0.64);
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Much or Many
  </h1>
      </v-layout>
    </v-img>


    <h2 style="padding-top : 10px;
               padding-left : 15px;
               padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px;">


<p>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>


        <v-flex xs12>
        <v-card light color="#d7eaea">
          <v-card-text class="px-10">
          <p><i>“How much…?” “How many…?” / <span style="font-size:14px">얼마나 … ?</span></i></p>

          <hr />
          <p>
          <u>mass nouns</u> – <span style="font-size:14px">불가산명사 ( 양 )</span>
          </p>
          <p>
          <u>count nouns</u> – <span style="font-size:14px">가산명사 ( 수 )</span>
          </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

</p>






<h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Dialogue</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

<p>
<b>
In the grocery store…
</b>
</p>
<table style = "border-collapse: collapse;">
    
  <tr v-for="dialog in dialogs">
    <td class = "uppertable" >{{dialog.name}}</td>
    <td class = "lowertable" >{{dialog.speech}}</td>
  </tr>

</table>

<p>
  <span style="font-size:14px">
  식료품점에서...
  </span>
</p>
<table style = "border-collapse: collapse;">

  <tr v-for="translation in translations">
    <td class = "uppertable" >{{translation.name}}</td>
    <td class = "lowertable" >{{translation.speech}}</td>
  </tr>

</table>

<h3>Practice
</h3>

<p><i>Tell whether what kind of noun come after “How much…” and “How many…”.</i></p>

<ol style="margin: 12px;">
  <li>
    How much flour do we have left?
  </li>
  <li>
    How many students are there?
  </li>
  <li>
    How much sugar is there?
  </li>
  <li>
    How many loaves of bread are left?
  </li>
  <li>
    How much butter do we have?
  </li>
</ol>

</div>

<h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">



<v-container grid-list-md text-xs-left>
    <v-layout row wrap>


        <v-flex xs12>
        <v-card light color="#d7eaea">
          <v-card-text class="px-10">
          <p><i>In order to count mass nouns you must use “amount words” or “quantifiers.”</i></p>

          <p>
          Some examples are:
          </p>
          <ul>
            <li>
              bottles of water
            </li>
            <li>
              sacks of rice
            </li>
            <li>
              pinch of salt
            </li>
            <li>
              liter of gasoline
            </li>
            <li>
              bags of cement
            </li>
            <li>
              cups of milk
            </li>
            <li>
              a box of flour
            </li>
          </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

<h3>Make a sentence using the pictures below. Remember the use of “How much…” and “How many…”.
</h3>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGyNe_i58/4/screen_2x/canva-piled-colored-pencils-MADGyNe_i58.jpg">
                               </v-card-media>

                               <v-card-text>
                                1. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>


                           </v-card>
                       </v-flex>





                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGxyNRsa8/4/screen_2x/canva-three-lightened-bottles-MADGxyNRsa8.jpg">
                               </v-card-media>

                               <v-card-text>
                                2. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  .</u>
                               </v-card-text>
                           </v-card>
                       </v-flex>



                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQ4yZVp1Q/1/screen_2x/canva-salt-MADQ4yZVp1Q.jpg">
                               </v-card-media>

                               <v-card-text>
                                3.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>
                           </v-card>
                       </v-flex>



                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv9H6-3w/7/screen_2x/canva-books-on-bookshelves-MADGv9H6-3w.jpg">
                               </v-card-media>

                               <v-card-text>
                                4.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>
                           </v-card>
                       </v-flex>



                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQtgqg9Ck/2/screen_2x/canva-bottles-of-milk-on-the-table-MADQtgqg9Ck.jpg">
                               </v-card-media>

                               <v-card-text>
                                5.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<h3>Ask questions using the nouns in Column A and Phrases in Column B.
Use the featured pattern for Mass nouns and Count nouns.
</h3>

<p>
  <i>Ex. How many workers are there in the company?</i>
</p>


<v-container>
    <v-layout wrap align-content-center>

        <v-flex xs6>

        <v-card flat>


                <v-card-text>
                  A
                    <ol style="margin: 12px;">
                      <li>Workers
                      </li>
                      <li>Tea
                      </li>
                      <li>Water
                      </li>
                      <li>Students
                      </li>
                      <li>Books
                      </li>
                    </ol>

                </v-card-text>


            </v-card>
        </v-flex>



        <v-flex xs6>
       <v-card flat>

                <v-card-text>
                  B
                    <ol style="margin: 12px;" type="A">
                      <li>in the company
                      </li>
                      <li>in the teapot
                      </li>
                      <li>in the pail
                      </li>
                      <li>in the classroom
                      </li>
                      <li>in your bag
                      </li>
                    </ol>

                </v-card-text>

            </v-card>
        </v-flex>

    </v-layout>
</v-container>

</div>

<h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

  <ol style="padding-right: 20px;">
    <li>
      <u>flour</u> - a white or brown powder that is made by grinding grain. It is used to make bread, cakes, and pastry.
      <i>/ flour<span style="font-size:14px">밀가루</span></i>
    </li>
    <li>
      <u>loaf</u> - bread which has been shaped and baked in one piece.
      <i>/ loaf<span style="font-size:14px">덩어리</span></i>
    </li>
    <li>
      <u>pail</u> - a bucket, usually made of metal or wood.
      <i>/ pail <span style="font-size:14px">들통</span></i>
    </li>
    <li>
      <u>sack</u> - a large bag made of rough woven material.
      <i><span style="font-size:14px">/ 부대, 자루</span></i>
    </li>
  </ol>

</div>

</div>


       </v-layout>
     </v-container>
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
          name:'Mom:',
          speech:'How much flour do we have left at home?'
        },
        {
          name:'John:',
          speech:'I think we have a kilo left at home, Mom.'
        },
        {
          name:'Mom:',
          speech:'How much sugar is there?'
        },
        {
          name:'John:',
          speech:'I think we have 2 kilos of sugar, Mom.'
        },
        {
          name:'Mom:',
          speech:'Okay, then we will buy sugar next time. How about milk? How much do we have at home?'
        },
        {
          name:'John:',
          speech:'We have plenty of milk but I don’t think we have loaves of bread left.'
        },
        {
          name:'Mom:',
          speech:'John, how many loaves of bread do you want to buy?'
        },
        {
          name:'John:',
          speech:'Mom, two loaves of bread are enough for a week.'
        },
        {
          name:'Mom:',
          speech:'How much butter do we have?'
        },
        {
          name:'John:',
          speech:'We had a bar yesterday. Did you use it, Mom?'
        },
        {
          name:'Mom:',
          speech:'No, I didn’t. I think there’s no need to get more.'
        },
        ],

        translations:[
        {
          name:'엄마:',
          speech:'집에 밀가루가 얼마나 남았지?'
        },
        {
          name:'존:',
          speech:'우리 집에 1kg가 남아 있는 것 같아, 엄마.'
        },
        {
          name:'엄마:',
          speech:'설탕은 얼마나 있니? '
        },
        {
          name:'존:',
          speech:'우리 설탕 2킬로나 있는 것 같아, 엄마.'
        },
        {
          name:'엄마:',
          speech:'알았어, 그럼 설탕은 다음에 살 거야. 우유는 어때? 우리 집에는 얼마나 있니?'
        },
        {
          name:'존:',
          speech:'우유는 많이 있지만, 빵이 남아 있지 않을 것 같아.'
        },
        {
          name:'엄마:',
          speech:'존, 빵 몇 덩어리 사고 싶어?'
        },
        {
          name:'존:',
          speech:'엄마, 일주일 동안 빵 두 덩어리면 충분해.'
        },
        {
          name:'엄마:',
          speech:'버터가 얼마나 있지?'
        },
        {
          name:'존:',
          speech:'어제 한 덩어리가 있었어. 사용하셨나요, 엄마?'
        },
        {
          name:'엄마:',
          speech:'아니, 안 썼어. 더 살 필요가 없을것 같아.'
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

li{


}

body{

  font-size: 16px;
}
.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
