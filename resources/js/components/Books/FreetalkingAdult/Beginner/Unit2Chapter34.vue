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
          speech:"Excuse me Miss. Good day to you! I would like to ask how to get back to the hotel. I think I got lost from wandering around the city."
        },
        {
          name:'F :',
          speech:"Good day! Oh, you just walk straight along this road and turn right. Continue walking until you see the bakeshop then turn left. You should be able to see the hotel building."
        },
        {
          name:'M :',
          speech:"Umm .. Can you please repeat that? I didn't catch everything!"
        },
        {
          name:'F :',
          speech:"Oh, I will just write you a map. Can you wait a minute please?"
        },
        {
          name:'M :',
          speech:"Sure! Thank you very much! "
        },
        {
          name:'F :',
          speech:"You're welcome. Just be careful next time."
        },
        {
          name:'M :',
          speech:"Can you also tell me how to get to the Palm Spring's Resort?"
        },
        {
          name:'F :',
          speech:"Oh, I think I need to draw another map then!"
        },
       ],
       dialogs2:[
        {
          name:'F :',
          speech:"Are you sure that the pet clinic is across Dolly's Shop? There seems to be no pet shop here'"
        },
        {
          name:'M :',
          speech:"Yes, I am sure. According to the veterinarian, we just need to walk along Demi Street and turn left. I am pretty sure she said it is across Dolly's Shop."
        },
        {
          name:'F :',
          speech:"Their office used to be inside the mall near my office. I don't know why they were relocated. It was much more convenient for me if they were still there."
        },
        {
          name:'M :',
          speech:"But the good thing here is that it is now near the nicest cafes in the city!"
        },
        {
          name:'F :',
          speech:"Look, over there! It's the pet shop!"
        },
        {
          name:'M :',
          speech:"Finally we found it!"
        },
        {
          name:'F :',
          speech:"And it is across Rolly's Shop, not Dolly's!"
        },
       ],
       translations:[
        {
          name:'M :',
          speech:"실례합니다, 아가씨. 좋은 하루 보내세요! 호텔로 어떻게 돌아가는지 물어보고 싶어요. 시내를 배회하다가 길을 잃은 것 같아서요."
        },
        {
          name:'F :',
          speech:"좋은 하루입니다! 아, 이 길을 곧장 걸어가다가 오른쪽으로 꺾으세요. 베이크샵이 보일 때까지 계속 걷다가 왼쪽으로 돌으세요. 호텔 건물을 볼 수 있을 거예요."
        },
        {
          name:'M :',
          speech:"음.. 다시 한 번 말해줄래? 제가 다 이해한게 아니라서요!"
        },
        {
          name:'F :',
          speech:"아, 지도만 하나 바로 그려드릴게요. 잠깐만 기다려 주시겠어요?"
        },
        {
          name:'M :',
          speech:"물론이죠! 정말 고마워요!"
        },
        {
          name:'F :',
          speech:"천만에요. 다음부터는 조심해요."
        },
        {
          name:'M :',
          speech:"팜스프링 리조트에 어떻게 가는지도 가르쳐 줄래요?"
        },
        {
          name:'F :',
          speech:"아, 그럼 다른 지도를 그려야 할 것 같아요!"
        },
       ],
       translations1:[
        {
          name:'F :',
          speech:"동물병원이 돌리스 가게 건너편에 있는 게 확실해? 여기는 동물가게가 없는 것 같아."
        },
        {
          name:'M :',
          speech:"그래, 확실해. 수의사 말로는 데미 가를 따라 걸어가서 왼쪽으로 돌면 된다고 하던데. 나는 그녀가 동물병원이 돌리스 가게 건너편에 있다고 말했다고 확신해"
        },
        {
          name:'F :',
          speech:"그들의 사무실은 내 사무실 근처 쇼핑몰 안에 있었어. 나는 그들이 왜 재배치되었는지 모르겠어. 그들이 아직 거기 있으면 내게 훨씬 편했어."
        },
        {
          name:'M :',
          speech:"하지만 여기서 좋은 점은 이제 이 도시에서 가장 좋은 카페 근처에 있다는 거야!"
        },
        {
          name:'F :',
          speech:"저기 봐! 동물 가게야!"
        },
        {
          name:'M :',
          speech:"드디어 찾았어!"
        },
        {
          name:'F :',
          speech:"그리고 그건 롤리 가게 건너편에 있어. 돌리가 아니라!"
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
