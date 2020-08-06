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
  <li>What happened to you this morning? What about yesterday?
  </li>

  <li>Since your birth up to the present, what’s your most favorite happening so far?
  </li>

  <li>Is there something you would like to change about your past? Why or why not?
  </li>

  <li>If you could travel to the past, would you? Why or why not?
  </li>

  <li>At what point would you like to go back to? Why?
  </li>

  <li>What were you like before?
  </li>

  <li>Do you like your life now? Why or why not?
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
          speech:"How was your freshman year? You're in the second year now, right?"
        },
        {
          name:'M :',
          speech:"Yes, that is true. Last year was both tough and awesome at the same time. It was quite hard adjusting to a new school and new people."
        },
        {
          name:'F :',
          speech:"How did you find your subjects?"
        },
        {
          name:'M :',
          speech:"Some were difficult but some were enjoyable. My favorite was literature and history."
        },
        {
          name:'F :',
          speech:"What were the difficult subjects?"
        },
        {
          name:'M :',
          speech:"Math and programming of course! Those are my weak points!"
        },
        {
          name:'F :',
          speech:"Wait, what? What's your major again?"
        },
        {
          name:'M :',
          speech:"I'm now taking up International Studies."
        },
        {
          name:'F :',
          speech:"I thought you're taking Engineering!"
        },
        {
          name:'M :',
          speech:"I did last year but I shifted!"
        },
      ],
      dialogs2:[
        {
          name:'F :',
          speech:"Have you heard about the pyramids in Egypt?"
        },
        {
          name:'M :',
          speech:"Yes, a little.  I have heard they were very big and amazing."
        },
        {
          name:'F :',
          speech:"That is true! l wonder how the ancient Egyptians  built them. At those times there were no machines. They just cut and carried those stones! They must have weighed a hundred tons each'"
        },
        {
          name:'M :',
          speech:"They cut them perfectly too.  These pyramids are real architectural wonders! They were built perfectly."
        },
        {
          name:'F :',
          speech:"Some people said aliens helped the ancient Egyptian civilization! It is quite ridiculous as far as I know, but it is possible!"
        },
        {
          name:'M :',
          speech:"Aliens! From other planets?"
        },
        {
          name:'F :',
          speech:"Yes! It took advanced technology to build those pyramids!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"신입생 생활은 어땠어? 이제 2학년이지?"
        },
        {
          name:'M :',
          speech:"그래, 그건 사실이야. 작년은 힘들기도 하고 멋지기도 했어. 새로운 학교와 새로운 사람들에 적응하는 것은 꽤 어려웠어."
        },
        {
          name:'F :',
          speech:"과목은 어떻게 찾았니?"
        },
        {
          name:'M :',
          speech:"몇몇은 힘들었지만, 몇몇은 재미있었어. 내가 가장 좋아하는 것은 문학과 역사였어."
        },
        {
          name:'F :',
          speech:"어려운 과목은 뭐였어?"
        },
        {
          name:'M :',
          speech:"물론 수학과 프로그래밍! 그게 내 약점이야!"
        },
        {
          name:'F :',
          speech:"잠깐, 뭐라고? 전공이 뭐야?"
        },
        {
          name:'M :',
          speech:"난 지금 국제학 수업을 듣고 있어."
        },
        {
          name:'F :',
          speech:"엔지니어링을 수강하는 줄 알았는데!"
        },
        {
          name:'M :',
          speech:"작년에 그랬는데 바뀌었어!"
        },
      ],
      translations1:[
        {
          name:'F :',
          speech:"이집트의 피라미드에 대해 들어본 적 있니?"
        },
        {
          name:'M :',
          speech:"그래, 조금. 나는 그들이 매우 크고 놀랍다고 들었어."
        },
        {
          name:'F :',
          speech:"그건 사실이야! 고대 이집트인들이 어떻게 그것들을 지었는지 궁금해. 그 당시에는 기계가 없었어. 저 돌들을 자르고 옮겼어! 그들은 각각 백 톤이나 무게가 나갔을 거야."
        },
        {
          name:'M :',
          speech:"그들은 돌들을 완벽하게 잘랐어. 이 피라미드들은 정말 놀라운 건축물이야! 그것들은 완벽하게 지어졌어."
        },
        {
          name:'F :',
          speech:"어떤 사람들은 외계인이 고대 이집트 문명을 도왔다고 말했어! 내가 아는 한 그것은 꽤 우스꽝스럽지만, 가능한 일이야!"
        },
        {
          name:'M :',
          speech:"외계인! 다른 행성에서?"
        },
        {
          name:'F :',
          speech:"그래! 피라미드를 짓기 위해서는 첨단 기술이 필요했어!"
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
