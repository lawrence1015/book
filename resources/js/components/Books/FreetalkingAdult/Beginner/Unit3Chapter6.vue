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

<p>
<b>A.</b>
</p>

  <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>

<p>
<b>B.</b>
</p>

<table style = "border-collapse: collapse;">

  <tr v-for="dialog2 in dialogs2" :key="dialog2">
    <td class = "uppertable" ><b>{{dialog2.name}}</b></td>
    <td class = "lowertable" >{{dialog2.speech}}</td>
  </tr>

</table>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Do you know how to cook?
  </li>

  <li>What’s your favorite dish to cook? Why?
  </li>

  <li>What’s your favorite food?
  </li>

  <li>What are its ingredients?
  </li>

  <li>How is it prepared?
  </li>

  <li>What is the weirdest food you’ve tasted or heard of?
  </li>

  <li>How do you feel about trying exotic foods?
  </li>

  <li>What is the most popular food in your country?
  </li>

  <li>How can you make one?
  </li>

  <li>What’s your favorite food from other countries? Why?
  </li>

  <li>If you’re challenged to eat unusual food, would you do it?
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">

<p>
<b>A.</b>
</p>
  <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" ><b>{{translation.name}}</b></td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

<p>
<b>B.</b>
</p>
      <table style = "border-collapse: collapse;">

        <tr v-for="translation1 in translations1" :key="translation1">
          <td class = "uppertable" ><b>{{translation1.name}}</b></td>
          <td class = "lowertable" >{{translation1.speech}}</td>
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
          speech:"What is the most exotic food you have eaten?"
        },
        {
          name:'M :',
          speech:"Exotic? What does it mean?"
        },
        {
          name:'F :',
          speech:"Oh, exotic means unusual or strange."
        },
        {
          name:'M :',
          speech:"Aha! Then it has to be the casu marzu from Italy."
        },
        {
          name:'F :',
          speech:"What is that?"
        },
        {
          name:'M :',
          speech:"It's a special kind of cheese. It's made using maggots."
        },
        {
          name:'F :',
          speech:"Maggots? What are those?"
        },
        {
          name:'M :',
          speech:"Maggots are insects that look like short white worms."
        },
        {
          name:'F :',
          speech:"Unbelievable! That’s terrible!"
        },
        {
          name:'M :',
          speech:"Oh no, it's actually not.  We just ate the cheese, not the maggots. It was yummy!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Do you know how to prepare a healthy but easy to make dish?"
        },
        {
          name:'F :',
          speech:"Hmmm. I think so! I know how to make a vegetable salad."
        },
        {
          name:'M :',
          speech:"That’s great! Teach me how to!"
        },
        {
          name:'F :',
          speech:"First, just prepare the ingredients: vegetables, mayonnaise, tuna, pepper and salt. Wash the vegetables, put them in a bowl and mix the rest of the ingredients."
        },
        {
          name:'M :',
          speech:"That's easy!"
        },
        {
          name:'F :',
          speech:"Yes! You can also add other vegetables like tomatoes and carrots if you like. Instead of tuna, you can also use chicken strips."
        },
        {
          name:'M :',
          speech:"I think tuna is healthier. Gee, thanks for your advice."
        },
        {
          name:'F :',
          speech:"No problem. Just feel free to ask me anytime!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"네가 먹어본 가장 이국적인 음식은 뭐니?"
        },
        {
          name:'M :',
          speech:"이국적이라고? 그게 무슨 뜻이야?"
        },
        {
          name:'F :',
          speech:"아, 이국적인 의미는 특이하거나 낯설다는 뜻이야."
        },
        {
          name:'M :',
          speech:"아하! 그럼 이탈리아에서 온 카수 마르주야."
        },
        {
          name:'F :',
          speech:"그게 뭐야?"
        },
        {
          name:'M :',
          speech:"이건 특별한 종류의 치즈야. 구더기를 이용해서 만든 거야."
        },
        {
          name:'F :',
          speech:"구더기? 저건 뭐야?"
        },
        {
          name:'M :',
          speech:"구더기는 짧은 흰 벌레처럼 생긴 곤충이야."
        },
        {
          name:'F :',
          speech:"믿을 수 없어! 끔찍해!"
        },
        {
          name:'M :',
          speech:"아니, 사실 그렇지 않아. 우리는 구더기가 아니라 치즈만 먹었어. 맛있었어!"
        },
      ],
       translations1:[
        {
          name:'M :',
          speech:"건강하지만 만들기 쉬운 요리를 어떻게 준비하는지 아니?"
        },
        {
          name:'F :',
          speech:"음. 생각해보면 나는 야채 샐러드를 만들 줄 알아."
        },
        {
          name:'M :',
          speech:"잘됐네! 어떻게 하는지 가르쳐줘!"
        },
        {
          name:'F :',
          speech:"우선, 야채, 마요네즈, 참치, 후추, 소금 등 재료만 준비하면 돼. 야채를 씻은 후 그릇에 담고 나머지 재료들을 섞어."
        },
        {
          name:'M :',
          speech:"그건 쉬워!"
        },
        {
          name:'F :',
          speech:"그래! 원한다면 토마토와 당근 같은 다른 채소도 넣을 수 있어. 참치 대신 닭갈비를 사용할 수도 있어."
        },
        {
          name:'M :',
          speech:"난 참치가 더 건강하다고 생각해. 이런, 충고 고마워."
        },
        {
          name:'F :',
          speech:"문제 없어. 언제든지 물어봐!"
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
