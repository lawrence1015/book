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
  <li>Do you have a pet? Why or why not?
  </li>

  <li>If yes, how did you get your pet?
  </li>

  <li>If no, would you like to have one? Why or why not?
  </li>

  <li>If you are free to have any pet, what would it be?
  </li>

  <li>What are the benefits of having a pet?
  </li>

  <li>Do you know any remarkable story of a pet?
  </li>

  <li>What do you think about Hachiko?
  </li>

  <li>What do you think about people who keep exotic pets?
  </li>

  <li>Which is a better pet, a dog or a cat? Why?
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
          speech:"It may be hard to believe this but there was once a pet pig who saved her master's life."
        },
        {
          name:'M :',
          speech:"What? A pig? I have heard about loyal dogs but pigs?"
        },
        {
          name:'F :',
          speech:"That is true! There was a pig named Lulu whose master had a heart attack. To get help, she went out in the streets to stop the traffic and to catch the attention of the people."
        },
        {
          name:'M :',
          speech:"What happened next?"
        },
        {
          name:'F :',
          speech:"Finally someone followed her back to her house and found his master in pain. Her master was saved, thanks to Lulu the pig."
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Do you prefer dogs or cats?"
        },
        {
          name:'F :',
          speech:"I think I prefer cats. They are quiet and mysterious but they are also friendly at times. How about you?"
        },
        {
          name:'M :',
          speech:"I'm absolutely a dog-lover! They are faithful and full of energy. Dogs are great playmates, too."
        },
        {
          name:'F :',
          speech:"Oh well, I just prefer to sit and lie down so I like cats."
        },
        {
          name:'M :',
          speech:"Really, dogs are better! You can walk them in the park when you jog or exercise."
        },
        {
          name:'F :',
          speech:"Cats are better! They are not needy or naughty!"
        },
        {
          name:'M :',
          speech:"Dogs are better! Hmmm.. but I guess that depends on one's personality."
        },
      ],
       translations:[
        {
          name:'F :',
          speech:"믿기 힘들겠지만, 한때 주인의 목숨을 구한 반려 돼지가 있었어."
        },
        {
          name:'M :',
          speech:"뭐? 돼지? 나는 충견에 대해 들어봤지만 돼지는 들어보지 못했는데?"
        },
        {
          name:'F :',
          speech:"그건 사실이야! 주인이 심장마비를 일으킨 루루라는 돼지가 있었어. 그녀는 도움을 얻기 위해 거리로 나가 교통을 막고 사람들의 주의를 끌었어."
        },
        {
          name:'M :',
          speech:"그 다음엔 어떻게 됐어?"
        },
        {
          name:'F :',
          speech:"마침내 누군가가 그녀를 따라 그녀의 집으로 돌아왔고, 그의 주인이 고통스러워하는 것을 발견했어. 그녀의 주인은 돼지 루루 덕분에 구조되었어."
        },
       ],
       translations1:[
        {
          name:'M :',
          speech:"넌 강아지를 좋아하니, 아니면 고양이를 좋아하니?"
        },
        {
          name:'F :',
          speech:"난 고양이가 더 좋은 것 같아. 그들은 조용하고 신비롭지만 때로는 친근하기도 해. 너는 어때?"
        },
        {
          name:'M :',
          speech:"난 정말 개를 사랑하는 사람이야! 그들은 충실하고 에너지가 넘쳐. 개들은 또한 훌륭한 놀이 친구들이야."
        },
        {
          name:'F :',
          speech:"글쎄, 난 그냥 앉아서 누워 있는 게 더 좋아서 고양이를 좋아해."
        },
        {
          name:'M :',
          speech:"정말, 개들이 더 나아! 당신은 조깅이나 운동을 할 때 그들을 공원에서 산책시킬 수 있어."
        },
        {
          name:'F :',
          speech:"고양이가 더 좋아! 그들은 궁핍하지도 않고 장난도 안쳐!"
        },
        {
          name:'M :',
          speech:"개들이 더 나아! 음.. 하지만 그건 사람의 성격에 따라 다르겠지."
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
