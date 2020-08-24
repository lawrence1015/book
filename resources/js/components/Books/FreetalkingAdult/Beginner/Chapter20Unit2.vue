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
                              background-color: #a7d7c5;">Conversation Samples 
                              <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
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

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation
</h3>
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
          speech:"Can you fly a plane with no arms?"
        },
        {
          name:'F :',
          speech:"Of course not. That is not possible."
        },
        {
          name:'F :',
          speech:"Jessica Cox will definitely prove you wrong! She was born without arms and yet she is now a licensed pilot. She drives a special place called Ercoupe by only using her legs!"
        },
        {
          name:'F :',
          speech:"That is incredible!"
        },
        {
          name:'F :',
          speech:"She was also a dancer and a double black belt in taekwondo."
        },
        {
          name:'F :',
          speech:"Wow, that story certainly proves there are no limits in life."
        },
        {
          name:'F :',
          speech:"Right! So, you should keep trying to achieve your dreams in life!"
        },
      ],
       dialogs2:[
        {
          name:'M :',
          speech:"Nothing should stop you from reaching your dreams. Have you heard about Liz Murray?"
        },
        {
          name:'M :',
          speech:"No, I haven't. Is she an actress or a singer?"
        },
        {
          name:'M :',
          speech:"No. She is a professional speaker. She was born to a very poor family by drug-addicted and HIV-infected parents and yet she was able to graduate from Harvard University."
        },
        {
          name:'M :',
          speech:"Wow! How was she able to do that?"
        },
        {
          name:'M :',
          speech:"She got a scholarship. It's amazing, isn't it?"
        },
        {
          name:'M :',
          speech:"Absolutely. She must have lived a very hard life."
        },
        {
          name:'M :',
          speech:"Yeah and her life tells us that any person, rich or poor, can achieve success!"
        },
       ],
       translations:[
        {
          name:'F :',
          speech:"팔이 없는 비행기를 조종할 수 있니?"
        },
        {
          name:'F :',
          speech:"물론 아니지. 그건 불가능해."
        },
        {
          name:'F :',
          speech:"제시카 콕스는 분명히 네가 틀렸다는 것을 증명할 거야! 그녀는 팔 없이 태어났지만 지금은 조종사 면허가 있어. 그녀는 다리만으로 Ercoupe라고 불리는 특별한 장소를 운전해!"
        },
        {
          name:'F :',
          speech:"정말 대단해!"
        },
        {
          name:'F :',
          speech:"그녀는 태권도에서도 무용수였고 태권도 검은띠 보유자였어."
        },
        {
          name:'F :',
          speech:"와, 그 이야기는 인생에 제한이 없다는 것을 확실히 증명해."
        },
        {
          name:'F :',
          speech:"맞아! 그러니, 너는 인생에서 꿈을 이루기 위해 계속해서 노력해야 해!"
        },
       ],
        translations1:[
        {
          name:'M :',
          speech:"그 어떤 것도 네가 꿈에 도달하는 것을 막지 못해. 리즈 머레이에 대해 들어봤니?"
        },
        {
          name:'M :',
          speech:"아니, 난 못 봤어. 그녀는 배우니 가수니?"
        },
        {
          name:'M :',
          speech:"아니. 그녀는 전문적인 연설가야. 그녀는 마약 중독자와 HIV에 감염된 부모들에 의해 매우 가난한 가정에서 태어났지만 하버드 대학교를 졸업할 수 있었어."
        },
        {
          name:'M :',
          speech:"와! 어떻게 그녀가 그렇게 할 수 있었니?"
        },
        {
          name:'M :',
          speech:"그녀는 장학금을 받았어. 놀랍지 않니?"
        },
        {
          name:'M :',
          speech:"당연하지. 그녀는 틀림없이 매우 힘든 삶을 살았을 거야."
        },
        {
          name:'M :',
          speech:"그래, 그리고 그녀의 삶은 우리에게 부자든 가난하든 어떤 사람이든 성공을 이룰 수 있다고 말해줘!"
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

li{


}

body{

  font-size: 16px;
}

</style>
