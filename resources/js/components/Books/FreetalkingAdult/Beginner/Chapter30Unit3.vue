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
  Read the following with your teacher, and identify the adverbs of manner used.
</p>

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

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Have you ever broken a law? If yes, what was it?
  </li>

  <li>Why should citizens obey laws?
  </li>

  <li>What are the punishments in your country if somebody violated a traffic rule?
  </li>

  <li>What is the highest form of punishment in your country?
  </li>

  <li>Are laws strictly implemented in your country? Why or why not?
  </li>

  <li>What do you think is the most commonly violated law in your country? Why do you think?
  </li>

  <li>Do you have weird laws in your country?
  </li>

  <li>Do all lawyers lie?
  </li>

  <li>Who makes the laws in your country? Do they consult the people first?
  </li>

  <li>Who breaks the law more often, men or women? Why do you think so?
  </li>

  <li>Are you a good citizen? Why?
  </li>

  <li>What makes a good citizen?
  </li>

  <li>What will happen if all citizens are stubborn?
  </li>

  <li>To whom does a country's success depends on more; the leader or the citizens? Why?
  </li>


  <li>If you can make a law, what will it be?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
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
          speech:"What are the weirdest laws you have ever heard about?"
        },
        {
          name:'M :',
          speech:"Are there such things? I thought laws are supposed to keep peace and order in a place. Weird laws sound ridiculous."
        },
        {
          name:'F :',
          speech:"That's true but there really are such things! In France, it is illegal to sell dolls that do not have human faces. In Massachusetts, USA, you can get arrested for not taking a bath before going to bed."
        },
        {
          name:'M :',
          speech:"Are you kidding? That is totally crazy!"
        },
        {
          name:'F :',
          speech:"No, I am serious!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"You should research the laws of a country before travelling there."
        },
        {
          name:'F :',
          speech:"Why is that? When travelling, I already have many things to think about like food, lodging, money, etc."
        },
        {
          name:'M :',
          speech:"But this is really important. You can get arrested if you break some unknown and weird rules."
        },
        {
          name:'F :',
          speech:"What do you mean?"
        },
        {
          name:'M :',
          speech:"Hmm ... For example, in Singapore, chewing gums are illegal. And in Portugal, cops will arrest you if you pee in the ocean!"
        },
        {
          name:'F :',
          speech:"Oh! Really? I am actually going to Singapore next week!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"지금까지 들어본 것 중에 가장 이상한 법이 뭐야?"
        },
        {
          name:'M :',
          speech:"그런게 있어? 나는 법이 평화와 질서를 지키도록 되어 있다고 생각했어. 이상한 법률은 말도 안되는것 같아."
        },
        {
          name:'F :',
          speech:"그건 사실이지만 정말 그런 것들이 있어! 프랑스에서는 사람의 얼굴이 없는 인형을 파는 것은 불법이야. 미국 매사추세츠주에서는 잠들기 전에 목욕을 하지 않으면 체포될 수 있어."
        },
        {
          name:'M :',
          speech:"농담해? 그건 완전히 미친 짓이야!"
        },
        {
          name:'F :',
          speech:"아니, 난 진심이야!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"너는 여행하기 전에 그 나라의 법을 조사해야 해."
        },
        {
          name:'F :',
          speech:"왜 그럴까? 여행갈 때, 나는 이미 음식, 숙박, 돈 등 생각할 것이 많아."
        },
        {
          name:'M :',
          speech:"하지만 이건 정말 중요해. 알 수 없고 이상한 규칙을 어기면 체포될 수 있어."
        },
        {
          name:'F :',
          speech:"무슨 말이야?"
        },
        {
          name:'M :',
          speech:"음... 예를 들어, 싱가포르에서 껌을 씹는 것은 불법이야. 그리고 포르투갈에서는 바다에서 오줌을 누면 경찰이 체포할 거야!"
        },
        {
          name:'F :',
          speech:"오! 정말? 나 사실 다음 주에 싱가포르에 가!"
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


body{

  font-size: 16px;
}

</style>
