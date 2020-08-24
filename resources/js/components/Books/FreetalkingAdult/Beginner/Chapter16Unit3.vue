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
      background-color: #a7d7c5;">Conversation Samples <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span></h3>

<div style="padding : 16px;">

  <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Do you like flowers? Why or why not?
  </li>

  <li>What is your favorite flower? Why?
  </li>

  <li>Have you ever received flowers from anyone?
  </li>

  <li>What were they and for what occasion?
  </li>

  <li>Have you given flowers to anyone? Why or why not?
  </li>

  <li>What flower would you like to receive?
  </li>

  <li>What is the national flower of your country?
  </li>

  <li>Do you like plants and gardening? Why or why not?
  </li>

  <li>What is the weirdest plant or flower you have heard of?
  </li>

  <li>What benefits do you think we can get from plants?
  </li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;">

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
          speech:'Perhaps one of the most famous and beautiful flowers are roses. All girls love roses! However, do you know that every color has its own special meaning?'
        },
        {
          name:'M :',
          speech:"Really? Thank you for telling me that! I am thinking of buying someone roses but I'm not sure what color to pick!"
        },
        {
          name:'F :',
          speech:"Oh really? That's great! Red means " + '"I love you" while pink means "I admire you."'
        },
        {
          name:'M :',
          speech:'Hmmm ... how about the white ones?'
        },
        {
          name:'F :',
          speech:'White may mean true love or respect but they’re usually used for the dead or for weddings.'
        },
        {
          name:'M :',
          speech:'Can you tell me about the yellow ones?'
        },
        {
          name:'F :',
          speech:"Oh, yellow usually means friendship or cheer up. There are also orange ones and they mean " + '"I'+"'m proud of you."+'"'
        },
        {
          name:'M :',
          speech:'Thank you! That helps me a lot.'
        },
        {
          name:'F :',
          speech:'So which roses are you going to buy?'
        },
        {
          name:'M :',
          speech:"That's a secret!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:'아마도 가장 유명하고 아름다운 꽃 중 하나가 장미일 거야. 모든 소녀들은 장미꽃을 좋아해! 하지만,  모든 색이 자신만의 특별한 의미를 가지고 있다는 것을 너는 아니?'
        },
        {
          name:'M :',
          speech:"그래? 그것을 말해줘서 고마워! 누군가에게 장미꽃을 사줄까 생각 중인데 어떤 색을 골라야 할지 모르겠어!"
        },
        {
          name:'F :',
          speech:"오 그래? 대단하다! 빨간색은 " + '"사랑해" 를 의미하고 분홍색은 "사랑해" 를 의미해'
        },
        {
          name:'M :',
          speech:'음... 흰색은 어때?'
        },
        {
          name:'F :',
          speech:'흰색이 진정한 사랑이나 존경을 의미할 수도 있지만, 그것들은 보통 죽은 사람이나 결혼식에 쓰일 거야.'
        },
        {
          name:'M :',
          speech:'노란색에 대해 말해줄 수 있어?'
        },
        {
          name:'F :',
          speech:'아, 노란색은 보통 우정이나 힘내라는 뜻이야. 오렌지색도 있는데 그건  "난 네가 자랑스러워"라는 뜻이야.'
        },
        {
          name:'M :',
          speech:'고마워! 그건 나에게 많은 도움이 돼.'
        },
        {
          name:'F :',
          speech:'그래서 어떤 장미를 살 거야?'
        },
        {
          name:'M :',
          speech:"그건 비밀이야!"
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
