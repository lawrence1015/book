<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

    <div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="images/perfect-reading-chapter10.jpg"></v-img>
</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Conversation Samples <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
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
          speech:"Can I borrow this thick, ancient, green book? It's yours, isn’t it?"
        },
         {
          name:'M :',
          speech:"Yes it is. You can borrow it but promise me that you'll take good care of it."
        },
         {
          name:'F :',
          speech:"Sure. It sounds that this has deep sentimental value to you."
        },
         {
          name:'M :',
          speech:"Sentimental? You mean it’s marked by tender and warm emotions?"
        },
         {
          name:'F :',
          speech:"Exactly. May I know why?"
        },
         {
          name:'M :',
          speech:"It was given to me by my wise grandfather. This is my very first book.  He wrote a special, short poem to me in the last page."
        },
         {
          name:'F :',
          speech:"Oh! I don’t think I should borrow it then? I'll just borrow this square, new, red book.  Is that okay with you?"
        },
         {
          name:'M :',
          speech:"Hmmm ... Actually that is something very special, too."
        },
      ],
      dialogs2:[
        {
          name:'F :',
          speech:"I went to the mall today and I saw three, lovely, lacy, yellow Mexican-made dresses? They were so beautiful?"
        },
        {
          name:'M :',
          speech:"Did you buy them?"
        },
        {
          name:'F :',
          speech:"I was about to but then I saw a small, circular, American tin clock that would be perfect for my room so I forgot about the dresses."
        },
        {
          name:'M :',
          speech:"Did you buy the clock then?"
        },
        {
          name:'F :',
          speech:"I almost did! However, the five beautiful, long, pink, French silk ties caught my attention? I have always wanted to own one."
        },
        {
          name:'M :',
          speech:"Did you buy one then?"
        },
        {
          name:'F :',
          speech:"No! I realized it would be a lot better to buy just one delicious, huge, square, Italian pepperoni pizza for us to eat together!"
        },
        {
          name:'M :',
          speech:"Ah! Where’s the pizza then?"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"이 두껍고 오래된 녹색 책을 빌릴 수 있을까? 네 거지?"
        },
         {
          name:'M :',
          speech:"그래. 빌려도 되지만 잘 다루겠다고 약속해줘."
        },
         {
          name:'F :',
          speech:"물론이지. 이것은 너에게 깊은 감상적 가치가 있는 것으로 들린다."
        },
         {
          name:'M :',
          speech:"감상적? 부드럽고 따뜻한 감정으로 이루어져 있다는 말이야?"
        },
         {
          name:'F :',
          speech:"맞아. 내가 그 이유를 알아도 되겠니?"
        },
         {
          name:'M :',
          speech:"그건 지혜로우신 할아버지가 준 거야. 이것은 나의 첫 번째 책이야. 그는 마지막 페이지에 나에게 특별하고 짧은 시를 써주었어."
        },
         {
          name:'F :',
          speech:"아! 그럼 빌리면 안 될 것 같은데? 그냥 이 사각형의 새 빨간 책을 빌릴게. 괜찮니?"
        },
         {
          name:'M :',
          speech:"음... 사실 그것 또한 매우 특별한 것이야."
        },
      ],
      translations1:[
        {
          name:'F :',
          speech:"오늘 쇼핑몰에 갔는데, 사랑스럽고 레이스로 된 노란 멕시코제 드레스 세 벌 봤어. 그것들은 정말 아름다웠어."
        },
        {
          name:'M :',
          speech:"샀어?"
        },
        {
          name:'F :',
          speech:"사려고 했는데, 내 방에 딱 맞는 작고 동그란 미국식 양철 시계가 보여서 옷을 잊어버렸어."
        },
        {
          name:'M :',
          speech:"그럼 시계 샀어?"
        },
        {
          name:'F :',
          speech:"하마터면 살 뻔했어! 하지만, 아름답고 길고 분홍색의 프랑스 실크 넥타이 다섯 개가 나의 관심을 끌었지. 나는 항상 그것을 갖고 싶었어."
        },
        {
          name:'M :',
          speech:"그럼 하나 샀어?"
        },
        {
          name:'F :',
          speech:"아니! 나는 우리가 함께 먹을 수 있도록 맛있고, 거대하고, 네모난, 이탈리아 페퍼로니 피자 하나만 사는 게 훨씬 더 나을 거라는 걸 깨달았어!"
        },
        {
          name:'M :',
          speech:"아! 그럼 피자는 어디 있지?"
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
