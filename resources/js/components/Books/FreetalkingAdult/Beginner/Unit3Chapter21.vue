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
  <li>Who is your favorite superhero? Why?
  </li>

  <li>Can you tell about his/her story?
  </li>

  <li>Do you think superheroes are real? Why or why not?
  </li>

  <li>Does the world need real superheroes?
  </li>

  <li>Do you want to be a superhero? Why or why not?
  </li>

  <li>What superpower would you like to possess?
  </li>

  <li>What will you do when you become a superhero?
  </li>

  <li>Will you keep your identity as a secret? Why or why not?
  </li>

  <li>Will you ask people to pay you in exchange for the help that you might give them?
  </li>

  <li>Do you want to work with another superhero? Who is it?
  </li>

  <li> If you saw Superman in your house one day, what would you do?
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
          speech:"Spiderman is my favorite superhero! Comics and movies have interestingly portrayed his story as a human and as a hero."
        },
        {
          name:'M :',
          speech:"I agree. His unique spider webs and agility are incredible. However, my favorite is Superman!"
        },
        {
          name:'F :',
          speech:"Oh, why is that? Superman funnily looks weird in his costume!"
        },
        {
          name:'M :',
          speech:"Okay, his underpants and cape looks funny but he is so strong. He can fly!"
        },
        {
          name:'F :',
          speech:"But only because he is an alien! He came from planet Krypton! Spiderman and Batman are real humans."
        },
        {
          name:'M :',
          speech:"That's true but Superman is still the strongest!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Would you like to be a superhero?"
        },
        {
          name:'F :',
          speech:"Sure!"
        },
        {
          name:'M :',
          speech:"What superpower would you like to have?"
        },
        {
          name:'F :',
          speech:"Hmmm... I would like to be able to fly."
        },
        {
          name:'M :',
          speech:"Why?"
        },
        {
          name:'F :',
          speech:"So I won’t be late for work. I will not need to ride the bus anymore!"
        },
        {
          name:'M :',
          speech:"That is quite a selfish reason!"
        },
        {
          name:'F :',
          speech:"Oh… I’m sorry! You’re right. Anyway, how about you?"
        },
        {
          name:'M :',
          speech:"I want to be super strong."
        },
        {
          name:'F :',
          speech:"Why?"
        },
        {
          name:'M :',
          speech:"So I can help and protect people who are abused and treated unfairly."
        },
        {
          name:'F :',
          speech:"You would make a really wonderful superhero!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"스파이더맨은 내가 가장 좋아하는 슈퍼히어로야! 만화와 영화는 그의 이야기를 인간으로서 그리고 영웅으로서 흥미롭게 묘사해 왔어."
        },
        {
          name:'M :',
          speech:"나도 동의해. 그의 독특한 거미줄과 민첩성은 놀라워. 하지만, 내가 가장 좋아하는 것은 슈퍼맨이야!"
        },
        {
          name:'F :',
          speech:"아, 왜? 슈퍼맨은 우스꽝스럽게 복장을 하고 있어!"
        },
        {
          name:'M :',
          speech:"좋아, 그의 속옷과 망토는 우습게 보이지만, 너무 강해. 그는 날 수 있어!"
        },
        {
          name:'F :',
          speech:"하지만 그건 그가 외계인이기 때문이지! 크립톤 행성에서 왔어! 스파이더맨과 배트맨은 진짜 인간이야."
        },
        {
          name:'M :',
          speech:"그건 사실이지만, 슈퍼맨은 여전히 가장 힘이 세!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"슈퍼히어로가 되고 싶니?"
        },
        {
          name:'F :',
          speech:"물론이지!"
        },
        {
          name:'M :',
          speech:"어떤 초능력을 갖고 싶어?"
        },
        {
          name:'F :',
          speech:"음... 나는 날 수 있었으면 좋겠어."
        },
        {
          name:'M :',
          speech:"왜?"
        },
        {
          name:'F :',
          speech:"그래서 나는 직장에 늦지 않을 거야. 나는 더 이상 버스를 탈 필요가 없을 거야!"
        },
        {
          name:'M :',
          speech:"그건 꽤 이기적인 이유야!"
        },
        {
          name:'F :',
          speech:"아…미안해! 네 말이 맞아. 그나저나, 너는 어때?"
        },
        {
          name:'M :',
          speech:"난 정말 강해지고 싶어."
        },
        {
          name:'F :',
          speech:"왜?"
        },
        {
          name:'M :',
          speech:"그래서 나는 학대받고 부당한 대우를 받는 사람들을 돕고 보호할 수 있을 거야."
        },
        {
          name:'F :',
          speech:"넌 정말 멋진 슈퍼히어로가 될 거야!"
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
