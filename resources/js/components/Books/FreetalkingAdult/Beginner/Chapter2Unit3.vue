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
  <li>Have you been abroad?
  </li>

  <li>What countries have you visited?
  </li>

  <li>What was your favorite trip? Why?
  </li>

  <li>What food from other countries did you like the most?
  </li>

  <li>Have you travelled alone? Where?
  </li>

  <li>Do you prefer to travel alone or with friends?
  </li>

  <li>Can you recommend a place in Korea for tourists?
  </li>

  <li>Why did you choose that place?
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">
     </div>

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
          speech:"Good afternoon! l thought  you're in France now!"
        },
        {
          name:'M :',
          speech:"Hello! We have just arrived this morning. We decided to go home earlier than planned because we were all homesick."
        },
        {
          name:'F :',
          speech:"How long did you stay there?"
        },
        {
          name:'M :',
          speech:"We stayed for almost two months! It was a wonderful vacation."
        },
        {
          name:'F :',
          speech:"What did you do there? Did you see the Eiffel tower?"
        },
        {
          name:'M :',
          speech:"Oh yes! We saw it for maybe ten or more times. We were mostly touring and taking pictures. My favorite place was Paris because it was filled with beautiful buildings and cafes."
        },
        {
          name:'F :',
          speech:"Did you bring any souvenir for me?"
        },
        {
          name:'M :',
          speech:"Haha! Sure! Here, I brought you a replica of the Eiffel tower!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"I'm planning to have a winter vacation abroad."
        },
        {
          name:'F :',
          speech:"That's great! Where do you want to go?"
        },
        {
          name:'M :',
          speech:"I would really like to go to Italy but I also want to go to Japan."
        },
        {
          name:'F :',
          speech:"Those are great choices! Italian food is delicious. There are so many nice places to go in Italy. Japan is also beautiful.  You should see the cherry blossoms!"
        },
        {
          name:'M :',
          speech:"Wow! Really?"
        },
        {
          name:'F :',
          speech:"Yes! Maybe you can go to one country this winter and to another on your next vacation."
        },
        {
          name:'M :',
          speech:"That's a good idea."
        },
        {
          name:'F :',
          speech:"So where will you go this winter?"
        },
        {
          name:'M :',
          speech:"I think I will go to Japan first!"
        },

      ],
      translations:[
        {
          name:'F :',
          speech:"좋은 오후! 난 네가 지금 프랑스에 있는 줄 알았어!"
        },
        {
          name:'M :',
          speech:"여보세요! 우리는 오늘 아침에 막 도착했다. 우리는 모두 향수병에 걸려서 예정보다 일찍 집에 가기로 했어."
        },
        {
          name:'F :',
          speech:"거기 얼마나 머물렀니?"
        },
        {
          name:'M :',
          speech:"우리는 거의 두 달 동안 머물렀어! 멋진 방학이었지."
        },
        {
          name:'F :',
          speech:"거기서 뭐 했어? 에펠탑 봤어?"
        },
        {
          name:'M :',
          speech:"오, 그래! 우리는 아마도 에펠탑을 열 번 또는 그 이상 보았어. 우리는 대부분 관광을 하고 사진을 찍었어. 내가 가장 좋아하는 장소는 파리였어. 왜냐하면 그곳은 아름다운 건물들과 카페들로 가득 차 있었기 때문이야."
        },
        {
          name:'F :',
          speech:"기념품 가져왔어?"
        },
        {
          name:'M :',
          speech:"하하! 물론이지! 여기, 내가 너에게 에펠탑의 모형을 가져왔어!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"해외에서 겨울 방학을 보낼 계획이야."
        },
        {
          name:'F :',
          speech:"잘됐네! 어디로 가고 싶어?"
        },
        {
          name:'M :',
          speech:"나도 이탈리아에 꼭 가고 싶지만, 일본도 가고 싶어."
        },
        {
          name:'F :',
          speech:"그건 좋은 선택이야! 이탈리아 음식은 맛있어. 이탈리아에는 가기 좋은 곳이 정말 많아. 일본도 아름다워. 벚꽃을 봐야지!"
        },
        {
          name:'M :',
          speech:"와! 정말?"
        },
        {
          name:'F :',
          speech:"그래! 이번 겨울에는 한 나라에 갈 수 있고 다음 방학 때는 다른 나라로 갈 수 있을 거야."
        },
        {
          name:'M :',
          speech:"좋은 생각이야."
        },
        {
          name:'F :',
          speech:"그래, 이번 겨울에 어디로 갈 거야?"
        },
        {
          name:'M :',
          speech:"나 먼저 일본에 갈 것 같아!"
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
