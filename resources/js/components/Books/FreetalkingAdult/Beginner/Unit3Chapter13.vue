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


</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Where will you be in ten years from now?
  </li>

  <li>Where will you live? What will you be doing?
  </li>

  <li>How about fifty years from now?
  </li>

  <li>How do you see your country fifty years from now?
  </li>

  <li>What do you think will happen to the world?
  </li>

  <li>What will be the most powerful country at that time? Why did you say so?
  </li>

  <li>What kind of clothes will people be wearing?
  </li>

  <li>Do you think flying cars are possible?
  </li>

  <li>Do you know Artificial Intelligence? If yes, what is this?
  </li>

  <li>Do you think robots that act like humans will become possible?
  </li>

  <li>What other technological advancements are possible?
  </li>

  <li>What kind of world would you like to see fifty years from now?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;">

  <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" ><b>{{translation.name}}</b></td>
          <td class = "lowertable" >{{translation.speech}}</td>
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
          speech:"What do you think will happen 50 years from now?"
        },
        {
          name:'M :',
          speech:"We will be old of course!"
        },
        {
          name:'F :',
          speech:"Well, that is pretty obvious! How about your plans? Or the world in general?"
        },
        {
          name:'M :',
          speech:"I just want to retire at that time.  Probably, I will be living in Jeju Island in a nice house near the sea."
        },
        {
          name:'F :',
          speech:"That sounds nice!"
        },
        {
          name:'M :',
          speech:"I think at that time, technology will be very advanced."
        },
        {
          name:'F :',
          speech:"Hmm ... Good point! Like what, for example?"
        },
        {
          name:'M :',
          speech:"I think we will have flying cars, very thin phones and chips embedded in our skin so we don't have to carry money around."
        },
        {
          name:'F :',
          speech:"What an imagination you have!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"앞으로 50년 후에는 어떻게 될 것 같아?"
        },
        {
          name:'M :',
          speech:"우리는 당연히 늙을 거야!"
        },
        {
          name:'F :',
          speech:"음, 그건 아주 뻔해! 너의 계획은 어떠니? 아니면 세상은 어떨까?"
        },
        {
          name:'M :',
          speech:"난 그냥 그 시간에 은퇴하고 싶어. 아마 나는 제주도에 바다 근처에 있는 멋진 집에서 살고 있을 거야."
        },
        {
          name:'F :',
          speech:"그거 좋은 생각이야!"
        },
        {
          name:'M :',
          speech:"그 때는 기술이 매우 발달할 것 같아."
        },
        {
          name:'F :',
          speech:"음... 좋은 지적이야! 가령, 예를 들면?"
        },
        {
          name:'M :',
          speech:"나는 하늘을 나는 자동차, 우리가 돈을 가지고 다닐 필요 없이 아주 얇은 전화기, 칩을 피부에 박아 둘 것이라고 생각해."
        },
        {
          name:'F :',
          speech:"정말 상상력이 대단하구나!"
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
