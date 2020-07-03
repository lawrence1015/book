<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxpdJy3g/4/screen_2x/canva-selective-focus-photography-of-gift-boxes-MADGxpdJy3g.jpg">

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
        border-radius: 30px;">Nouns (2) 명사
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
                <p>
                  <u>abstract nouns<span style="font-size:14px">(추상 명사)</span></u> – <span style="font-size:14px">품질, 감정, 아이디어등 추상적 개념을
                    나타내는 명사</span>
                </p>
                <p>
                  <u>concrete nouns<span style="font-size:14px">(구상 명사)</span></u> - <span style="font-size:14px">구체적인 물체를 나타내는 명사</span>
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

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <hr />

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

      <h3>Practice
      </h3>
      <ol style="padding-right: 20px;">
        <li>
          What are Tina’s birthday wishes?
        </li>
        <li>
          What are Marie’s birthday wishes?
        </li>
        <li>
          Compare Tina’s birthday wishes from Marie’s.
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


    <h3>Make sentences using the pattern “I need…” and “I want…” Fill in the blanks with the correct noun.
        Choose from the given choices found in the parentheses.</h3>


    <ol style="margin: 12px;">
      <li>I need _________, because I will go to school.  (books, love)<i>Concrete</i></li>
      <li>I am hungry. I need __________.  (care, food)<i></i>Concrete</li>
      <li>It’s her birthday today. I want her to have________________.  (peace, bags)<i>Abstract</i></li>
      <li>I want to have a new ________________.  (love, cellphone<i>Concrete</i></li>
      <li>Maria needs ________________.  (happiness, clothes)<i>Abstract</i></li>
      <li>I want to wish him ________________ on his birthday.  (success, toys)<i>Abstract</i></li>
      <li>Joe’s house was burnt down. He needs ________________.  (sadness, clothes)<i>Concrete</i></li>
      <li>I need ________________ on my birthday.  (cosmetics, love)<i>Abstract</i></li>
      <li>They need a new ________________ because it’s getting crowded. (house, faith)<i>Concrete</i></li>
      <li>They need ________________ because they are our elders. (cars, respect)<i>Abstract</i></li>

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
          name:'Tina:',
          speech:'Tomorrow is my birthday. I want to receive gifts from my family. I want shoes, bags and cosmetics. How about you, Marie?'
        },
        {
          name:'Marie:',
          speech:'I want to have peace in my family. I want happiness. Good health is one of my hopes as well.'
        },
        ],

        translations:[
        {
          name:'Tina:',
          speech:'내일은 내 생일이야. 나는 가족들로부터 선물을 받고 싶어. 나는 신발, 가방, 화장품을 원해. Marie야, 너는 어때?'
        },
        {
          name:'Marie:',
          speech:'나는 우리 가족의 화목을 원해. 나는 행복을 원해. 건강도 나의 희망 중 하나야.'
        },
        ],
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
