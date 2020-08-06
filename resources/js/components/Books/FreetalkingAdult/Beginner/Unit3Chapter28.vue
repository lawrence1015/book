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
                           background-color: #a7d7c5;">Conversation Samples <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span>
</h3>

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
  <li>What causes your stress?
  </li>

  <li>How often do you feel stressed?
  </li>

  <li>What is the most stressful thing in your life?
  </li>

  <li>What do you plan to do with it?
  </li>

  <li>What are your relaxation activities?
  </li>

  <li>How often do you unwind?
  </li>

  <li>Do men relax differently from women? In what ways?
  </li>

  <li>What is the most expensive relaxation you have done?
  </li>

  <li>When can stress be a good thing?
  </li>

  <li>What food makes you relax?
  </li>

  <li>What music and color make you feel better?
  </li>

  <li>Can you suggest some other ways to relax?
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
          speech:"I know it's weird but I feel much better after watching zombie movies."
        },
        {
          name:'M :',
          speech:"Are you serious? But that's scary!"
        },
        {
          name:'F :',
          speech:"No, not really. I just enjoy watching these kinds of films. And sometimes I find them funny too. It just completely takes off my mind from work or worries. How about you?"
        },
        {
          name:'M :',
          speech:"Oh, I really enjoy singing in our karaoke machine at home. I sing even when I am."
        },
        {
          name:'F :',
          speech:"Really? That sounds fun!"
        },
       ],
       dialogs2:[
        {
          name:'M :',
          speech:"People have different ways of relaxing. For instance, my boss feels better when he is working. When he doesn't do anything, he complains of feeling weak and sad."
        },
        {
          name:'F :',
          speech:"Really? That's strange! I mean lots of people do not want to work."
        },
        {
          name:'M :',
          speech:"That's right' He's quite the opposite. Imagine, if all people are like that, it will be good for the economy."
        },
        {
          name:'F :',
          speech:"Ha! That is very true! However, I can't imagine myself liking work more than rest or sleep!"
        },
       ],
       translations:[
        {
          name:'F :',
          speech:"이상하다는 건 알지만 좀비 영화를 보고 나니 기분이 훨씬 좋아졌어."
        },
        {
          name:'M :',
          speech:"진심이야? 하지만 그것은 무서워!"
        },
        {
          name:'F :',
          speech:"아니, 그렇지 않아. 나는 이런 종류의 영화를 보는 것을 즐겨. 그리고 가끔 나는 그것들이 웃긴다고 생각해. 그것은 일이나 걱정으로부터 내 마음을 완전히 앗아가. 너는 어때?"
        },
        {
          name:'M :',
          speech:"아, 난 집에서 노래방 기계로 노래 부르는 걸 정말 좋아해. 나는 노래를 할 때도 부른다."
        },
        {
          name:'F :',
          speech:"정말? 정말 재밌겠다!"
        },
       ],
       translations1:[
        {
          name:'M :',
          speech:"사람들은 긴장을 푸는 다른 방법을 가지고 있어. 예를 들어, 내 상사는 일할 때 기분이 좋아져. 그는 아무 일도 하지 않을 때는 몸이 허약하고 슬프다고 불평해."
        },
        {
          name:'F :',
          speech:"정말? 그거 참 이상하네! 내 말은 많은 사람들이 일하고 싶어하지 않는다는 거야."
        },
        {
          name:'M :',
          speech:"맞아. 그와는 정반대야. 상상해봐, 만약 모든 사람들이 다 그런 식이라면, 그것은 경제에 좋을 거야."
        },
        {
          name:'F :',
          speech:"하! 그건 정말 사실이야! 하지만, 나는 휴식이나 수면보다 일을 더 좋아하는 내 자신을 상상할 수 없어!"
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
