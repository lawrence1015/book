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


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Do you believe in superstitions? Why or why not?
  </li>

  <li>Why do people follow some superstitions?
  </li>

  <li>What are the superstitions in your country?
  </li>

  <li>How do you feel about them?
  </li>

  <li>Do you carry anything with you for good luck?
  </li>

  <li>Do you think gems and precious stones can indeed bring good luck?
  </li>

  <li>What precious stone would you like to keep? Why?
  </li>

  <li>What do you think will bring every person good luck?
  </li>

  <li>What numbers are considered lucky in your country? Unlucky?
  </li>

  <li>What are considered as unlucky colors and days in your country? Lucky?
  </li>

  <li>What is your personal lucky number? Day? Color?
  </li>

  <li>Have you ever been to a fortune teller? Why or why not?
  </li>

  <li>Do you believe in fortune telling?
  </li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

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
          name:'M :',
          speech:"Wait! Stop! Don't go in there!"
        },
        {
          name:'F :',
          speech:"Why? What's wrong?"
        },
        {
          name:'M :',
          speech:"Look! A black cat is crossing. It will surely be bad luck to cross its path!"
        },
        {
          name:'F :',
          speech:"Hahaha! You're funny! How can you actually believe such things?"
        },
        {
          name:'M :',
          speech:"Well, if superstitious beliefs are not real, it's okay. But if they are real, I will have a very bad day! It's safer to just follow them."
        },
        {
          name:'F :',
          speech:"So this means we have to use the other street right? The black cat already crossed this one."
        },
        {
          name:'M :',
          speech:"That's right!"
        },
        {
          name:'F :',
          speech:"Well, it will be bad luck enough if we are late for work. There's only 5 minutes left and our office is still on the other side!"
        },
        {
          name:'M :',
          speech:"Oh! Let's cross our fingers!"
        },
      ],
       dialogs2:[
        {
          name:'F :',
          speech:"I do not like superstitions. They just make me worry. I am afraid of not doing them for the fear of bad luck!"
        },
        {
          name:'M :',
          speech:"Maybe superstitions aren't really true, you know. People just made up these things to make sense of what they cannot explain. My sister even keeps a black cat as a pet and she's just fine!"
        },
        {
          name:'F :',
          speech:"Right! Maybe I really shouldn't follow every superstition I know."
        },
        {
          name:'M :',
          speech:"However, it's interesting to just take note of these beliefs. They reflect our people and culture."
        },
       ],
       translations:[
        {
          name:'M :',
          speech:"잠깐! 거기 가지 마!"
        },
        {
          name:'F :',
          speech:"왜? 왜 그래?"
        },
        {
          name:'M :',
          speech:"봐! 검은 고양이가 건너고 있어. 그 길을 건너는 것은 분명 불운일 거야!"
        },
        {
          name:'F :',
          speech:"하하하! 너 웃겨! 어떻게 그런 것들을 실제로 믿을 수 있어?"
        },
        {
          name:'M :',
          speech:"음, 미신적인 믿음이 진짜가 아니라면, 괜찮아. 하지만 만약 그것들이 진짜라면, 나는 매우 나쁜 하루를 보낼 거야! 그 말을 따라가는 게 더 안전해."
        },
        {
          name:'F :',
          speech:"그럼 다른 길을 이용해야 한다는 뜻이지? 검은 고양이는 이미 이 길을 건넜어."
        },
        {
          name:'M :',
          speech:"맞아!"
        },
        {
          name:'F :',
          speech:"글쎄, 우리가 직장에 늦는다면 충분히 운이 나쁠 거야. 5분밖에 안 남았는데 우리 사무실은 아직 반대편에 있어!"
        },
        {
          name:'M :',
          speech:"오! 행운을 빌자!"
        },
       ],
       translations1:[
        {
          name:'F :',
          speech:"난 미신을 좋아하지 않아. 그들은 나를 걱정하게 만들 뿐이야. 나는 불운을 두려워해서 그것들을 하지 않는 것이 두려워!"
        },
        {
          name:'M :',
          speech:"미신은 정말 사실이 아닐 수도 있어. 사람들은 단지 설명할 수 없는 것을 이해하기 위해 이런 것들을 만들어. 내 여동생은 심지어 검은 고양이를 반려동물로 기르기도 하고, 그녀는 아주 건강해!"
        },
        {
          name:'F :',
          speech:"맞아! 어쩌면 내가 알고 있는 모든 미신을 따라 해서는 안 될지도 몰라."
        },
        {
          name:'M :',
          speech:"하지만, 이런 믿음들을 그냥 참고하는 것은 흥미로워. 그것들은 우리 민족과 문화를 반영해."
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
