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
  <li>Do you want to travel through time?  Why or why not?
  </li>

  <li>What year would you like to travel to?  Why?
  </li>

  <li>Is there something you would like to change in the past?
  </li>

  <li>If you travelled to the future, what would you do?
  </li>

  <li>What would you do if you got stuck in a different time?
  </li>

  <li>What century and place would you like to live in the past?
  </li>

  <li>Do you think your actions in either the past or present can affect the present?
  </li>

  <li>Have you seen a movie or TV show about time travel? What was it about?
  </li>

  <li>What will happen if people are free to travel through time as they please?
  </li>

  <li>If you are Clare in the novel The Time Traveler’s Wife and your husband keeps on travelling to the future and the past and be gone for a long, long time, what will you do?
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
          speech:"I am greatly inspired by Mother Teresa. Too bad I cannot meet her anymore."
        },
        {
          name:'F :',
          speech:"Yes you can... if you can travel through time!"
        },
        {
          name:'M :',
          speech:"Oh that's impossible! That's only in the movies and books."
        },
        {
          name:'F :',
          speech:"Who knows? People way back thought that flying was impossible. Now we know we can ride airplanes to other countries in a matter of hours!"
        },
        {
          name:'M :',
          speech:"Oh well. It is still far from reality though."
        },
        {
          name:'F :',
          speech:"Anyway, why do you want to meet Mother Teresa?"
        },
        {
          name:'M :',
          speech:"I want to hear her wise words. I want to be inspired to help others."
        },
        {
          name:'F :',
          speech:"Then you can also read her books. That will also be like talking to her and time travelling."
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Would you rather go into the past or the future?"
        },
        {
          name:'F :',
          speech:"I would say… the past! I want to change something about my past!"
        },
        {
          name:'M :',
          speech:"Really? What is it?"
        },
        {
          name:'F :',
          speech:"I wish I gave more attention to my family and grades. How about you?"
        },
        {
          name:'M :',
          speech:"I want to travel to the future!"
        },
        {
          name:'F :',
          speech:"Why?"
        },
        {
          name:'M :',
          speech:"So I will know what will be on our test tomorrow then I can go back and study about it!"
        },
        {
          name:'F :',
          speech:"Hey that's bad!"
        },
      ],
      translations:[
        {
          name:'M :',
          speech:"테레사 수녀에게 큰 영감을 받았어. 그녀를 더 이상 만날 수 없어서 아쉬워."
        },
        {
          name:'F :',
          speech:"그래, 할 수 있어... 만약 당신이 시간을 여행할 수 있다면!"
        },
        {
          name:'M :',
          speech:"그건 불가능해! 그건 영화와 책에나 나오는 얘기야."
        },
        {
          name:'F :',
          speech:"누가 알겠어? 옛날 사람들은 비행이 불가능하다고 생각했어. 이제 우리는 비행기를 타고 몇 시간 안에 다른 나라로 갈 수 있다는 것을 알고 있어!"
        },
        {
          name:'M :',
          speech:"오, 그래. 하지만 아직 현실과는 거리가 멀어."
        },
        {
          name:'F :',
          speech:"어쨌든, 왜 테레사 수녀를 만나고 싶어?"
        },
        {
          name:'M :',
          speech:"나는 그녀의 현명한 말을 듣고 싶어. 나는 다른 사람들을 돕기 위해 영감을 받고 싶어."
        },
        {
          name:'F :',
          speech:"그러면  너는 그녀의 책을 읽을 수 있을 거야. 그것은 또한 그녀와 대화하고 시간을 여행하는 것과 같을 거야."
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"과거로 가는 게 좋을까, 미래로 가는 게 좋을까?"
        },
        {
          name:'F :',
          speech:"과거라고 말할 수 있어! 내 과거에 대해 뭔가 바꾸고 싶어!"
        },
        {
          name:'M :',
          speech:"그래? 뭔데?"
        },
        {
          name:'F :',
          speech:"가족과 성적에 더 많은 관심을 가졌으면 좋겠어. 너는 어때?"
        },
        {
          name:'M :',
          speech:"난 미래를 여행하고 싶어!"
        },
        {
          name:'F :',
          speech:"왜?"
        },
        {
          name:'M :',
          speech:"그래서 나는 내일 우리 시험에서 무엇이 나올지 알 거야. 그러면 난 돌아가서 그것에 대해 공부할 수 있을 거야!"
        },
        {
          name:'F :',
          speech:"야, 그건 나빠!"
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
