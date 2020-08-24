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
  <li>What do you think about Damon and Pythias?
  </li>

  <li>Will you do the same thing for your friend? Why or why not?
  </li>

  <li>What is friendship to you?
  </li>

  <li>How many friends do you have?
  </li>

  <li>How did you become friends with them?
  </li>

  <li>How many best friends do you have?
  </li>

  <li>How did you meet them?
  </li>

  <li>Describe one of your closest friends.
  </li>

  <li>Can you recall an unforgettable situation with your friends?
  </li>

  <li>Are you still friends with your childhood buddies?
  </li>

  <li>Do you have friends from other countries?
  </li>

  <li>How have your friends helped you?
  </li>

  <li>How will you feel if you have no friends?
  </li>

  <li>Is friendship important to you? Why or why not?
  </li>

  <li>If you can give one friendship award, to whom will you give it?
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
          name:'Damon :',
          speech:"Do not worry about me Pythias! Just go back to your family."
        },
        {
          name:'Pythias :',
          speech:"You can trust me to be back Damon! I may be delayed but I will return. I cannot let you die! You are my greatest friend."
        },
        {
          name:'Damon :',
          speech:"I will count on your words, my friend. I know that you are an honest man. Please send my family my words of love!"
        },
        {
          name:'Pythias :',
          speech:"I will do that and I will be back within a month."
        },
        {
          name:'Damon :',
          speech:"Hurry on my friend! Farewell!"
        },
        {
          name:'Pythias :',
          speech:"Farewell my good friend! I will see you soon."
        },
      ],
      dialogs2:[
        {
          name:'F :',
          speech:"Do you have friends?"
        },
        {
          name:'M :',
          speech:"Of course! All people should have friends."
        },
        {
          name:'F :',
          speech:"How many friends do you have?"
        },
        {
          name:'M :',
          speech:"Hmmm. Maybe I can say I have 20 close friends."
        },
        {
          name:'F :',
          speech:"Wow! That's a lot. How many best friends do you have?"
        },
        {
          name:'M :',
          speech:"Best friends? What's the difference?"
        },
        {
          name:'F :',
          speech:"Friends are people you get easily along with. Best friends are the very close ones whom you share your deepest secrets and feelings with."
        },
        {
          name:'M :',
          speech:"Oh! I only then have one very best friend!"
        },
      ],
      translations:[
       {
          name:'데이먼 :',
          speech:"내 걱정은 하지 마! 피디아스! 그냥 가족들에게 돌아가."
        },
        {
          name:'피디아스 :',
          speech:"날 믿어도 돼 데이먼! 늦어질지 모르지만 돌아올게. 널 죽게 내버려 둘 순 없어! 너는 나의 가장 좋은 친구야."
        },
        {
          name:'데이먼 :',
          speech:"내 친구야, 너의 말을 믿을게. 나는 네가 정직한 사람이라는 것을 알아. 나의 가족에게 나의 사랑의 말을 전해줘!"
        },
        {
          name:'피디아스 :',
          speech:"그렇게 하고 한 달 안에 돌아올 거야."
        },
        {
          name:'데이먼 :',
          speech:"어서가! 안녕!"
        },
        {
          name:'피디아스 :',
          speech:"안녕, 나의 좋은 친구야! 곧 보자."
        },
      ],
      translations1:[
        {
          name:'F :',
          speech:"친구 있어?"
        },
        {
          name:'M :',
          speech:"물론이지! 모든 사람은 친구가 있어야 해"
        },
        {
          name:'F :',
          speech:"친구가 몇 명 있어?"
        },
        {
          name:'M :',
          speech:"음. 아마도 나는 20명의 친한 친구가 있다고 말할 수 있을 것 같아."
        },
        {
          name:'F :',
          speech:"와우! 엄청 많네. 너는 가장 친한 친구가 몇 명 있니?"
        },
        {
          name:'M :',
          speech:"가장 친한 친구? 뭐가 다른데?"
        },
        {
          name:'F :',
          speech:"친구는 너와 함께하는 사람이야. 가장 친한 친구들은 당신이 가장 깊은 비밀과 감정을 공유하는 사람들이야."
        },
        {
          name:'M :',
          speech:"오! 난 그러면 아주 친한 친구가 한명 있어!"
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
