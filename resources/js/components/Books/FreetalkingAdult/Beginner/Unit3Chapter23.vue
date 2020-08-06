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
  <li>What are your hobbies?
  </li>

  <li>How often do you do your hobbies?
  </li>

  <li>How long have you had your hobbies?
  </li>

  <li>Why did you start your hobbies? Why do you enjoy them?
  </li>

  <li>Can you make a living out of your hobbies? Why or why not?
  </li>

  <li>Are there hobbies you want to learn? Why? Do you know some weird hobbies?
  </li>

  <li>Why do people have hobbies?
  </li>

  <li>Does your hobby interfere with your work/study/personal life?
  </li>

  <li>Do you spend money on your hobby?
  </li>

  <li>Does your hobby influence your choice of friends?
  </li>

  <li>Can a hobby save a child from a bad peer influence?
  </li>

  <li>Which hobbies are the most expensive? Cheapest?
  </li>

  <li>Which hobbies cost nothing at all?
  </li>

  <li>Which hobbies are the most popular in your country?
  </li>

  <li>Which hobbies are the most popular with women in your country? With men?
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
          speech:"What is your favorite hobby?"
        },
        {
          name:'M :',
          speech:"It is fishing. I really enjoy it."
        },
        {
          name:'F :',
          speech:"How often do you go fishing? Why do you enjoy it so much?"
        },
        {
          name:'M :',
          speech:"As often as possible! I think I do it every weekend because I have to work daily. It relaxes me."
        },
        {
          name:'F :',
          speech:"I thought fishing is boring"
        },
        {
          name:'M :',
          speech:"Well, it can be, but catching fish is thrilling!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Do you like watching movies?"
        },
        {
          name:'F :',
          speech:"I certainly do' I watch movies almost every day!"
        },
        {
          name:'M :',
          speech:"Really? In the theater?"
        },
        {
          name:'F :',
          speech:"No, no. I mean I watch them at home. I go to the theater occasionally because I am quite busy. How about you?"
        },
        {
          name:'M :',
          speech:"I actually work inside the theater so I watch movies daily."
        },
        {
          name:'F :',
          speech:"Really? That's amazing!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"가장 좋아하는 취미가 뭐야?"
        },
        {
          name:'M :',
          speech:"그건 낚시야. 나는 정말 그것을 즐겨."
        },
        {
          name:'F :',
          speech:"얼마나 자주 낚시하러 가니? 왜 그렇게 즐기거야?"
        },
        {
          name:'M :',
          speech:"가능한 한 자주! 나는 매일 일해야 하기 때문에 주말마다 하는 것 같아. 그건 날 편안하게 해."
        },
        {
          name:'F :',
          speech:"난 낚시가 지루하다고 생각했어."
        },
        {
          name:'M :',
          speech:"글쎄, 그럴 수도 있지만, 물고기를 잡는 것은 스릴 있어!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"영화 보는 거 좋아하니?"
        },
        {
          name:'F :',
          speech:"난 거의 매일 영화를 봐!"
        },
        {
          name:'M :',
          speech:"그래? 극장에서?"
        },
        {
          name:'F :',
          speech:"아니, 아니. 집에서 보는 거야. 나는 꽤 바쁘기 때문에 가끔 극장에 가. 너는 어때?"
        },
        {
          name:'M :',
          speech:"사실 나는 영화관에서 일해서 매일 영화를 봐."
        },
        {
          name:'F :',
          speech:"정말? 신기하다!"
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
