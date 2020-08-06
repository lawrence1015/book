<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://images.unsplash.com/uploads/1411074708175ba26fea4/498d4c3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Favorite Things</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
               <div style="padding : 16px;">

<p>I own two, red luxury cars and a white townhouse but you may be surprised if I tell you that my most prized possessions are the three rectangular, yellow photo albums. They are not mere collections of pictures but diaries as well. My parents made them together. They posted our pictures and wrote down the experiences and ideas in words. They also pasted leaves and flowers that we got during our several excursions. They are very precious to me because my parents died when I was a teenager and these albums helped me not to feel that I was alone.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Luxury(adj)</u> - rich and superior in quality 호화로움, 사치, 사치, 드문 호사
</li>

<li style="list-style-type: none;"><u>Prized(v)</u> - Regard highly, think much of 소중한
</li>

<li style="list-style-type: none;"><u>Mere(adj)</u> - Being nothing more than specified 겨우 …의, …에 불과한, 단지 …만의
</li>

<li style="list-style-type: none;"><u>Excursions(n)</u> -  a journey taken for pleasure 여행
</li>

<li style="list-style-type: none;"><u>Precious(adj)</u> - of high worth or cost 귀중한, 값비싼, 귀한[소중한]
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Look at these expensive wooden chair and table! What a ___________ dining room this is!
  </li>

  <li>Mrs. Fulton __________ their family's collection of books very much.
  </li>

  <li>We are planning to have a winter __________ in Australia!
  </li>

  <li>This is a very ____________ scarf. It was given to me by a good friend from Italy.
  </li>

  <li>You are just a __________ child? What do you know about life?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What are very precious to the writer?
</li>

<li>How did he describe them?
</li>

<li>What do the albums contain?
</li>

<li>Why were they very precious?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">
  <p>
    나는 빨간 고급 승용차 두 대와 하얀 타운하우스를 가지고 있지만 내가 가장 아끼는 물건은 직사각형의 노란색 사진첩 세 장이라고 말한다면 놀랄지도 모른다.
    그것들은 단순한 그림의 모음이 아니라 일기장이다. 부모님이 함께 만드셨다.
    그들은 우리의 사진을 붙였고 경험과 아이디어를 말로 적었다. 그들은 또한 우리가 몇 번의 소풍 동안 얻은 잎과 꽃들을 붙이기도 했다.
    내가 십대였을 때 부모님이 돌아가셨고 이 앨범들은 내가 혼자라는 것을 느끼지 않도록 도와줬기 때문에 나에게 매우 소중하다.
  </p>
</div>

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="images/perfect-reading-chapter10.jpg"></v-img>
</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Conversation Samples (선생님과 역할을 나눠서 연습해보세요)</h3>
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


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">


<p>In English grammar, when you use multiple adjectives in one sentence, you must follow this sequence:
</p>

<ol style="margin: 12px;">
  <li>Determiners - a, an, the, my, your, several, three, five, etc.
  </li>

  <li>Observations - beautiful, dirty, smooth, etc.
  </li>

  <li>Size - small, big, huge, etc.
  </li>

  <li>Shape - circular, round, square, rectangle, etc.
  </li>

  <li>Age - new, old, ancient, etc.
  </li>

  <li>Color - blue, yellow, red, etc.
  </li>

  <li>Origin - Italian, French, American, etc.
  </li>

  <li>Material- silver, copper, bronze, silk, wood, etc.
  </li>

</ol>

<p>
Examples
</p>

<ol style="margin: 12px;">

  <li>I saw three, lovely, lacy, yellow Mexican dresses!
  </li>

  <li>We bought a small, circular American tin clock
  </li>

  <li>The five beautiful,   long, pink, French silk ties caught my attention!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
Make sentences using the given words and pictures. Arrange the adjectives in the proper sequence.
</p>


<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGxvIz9M8/4/screen_2x/canva-focus-photo-of-4-wooden-pawn-figurine-MADGxvIz9M8.jpg ">
                                </v-card-media>

                                <v-card-text>
                                    little/lovely/ wooden/British/four/
                                    <li style="list-style-type: none;">Figurines
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/5487/9642885512_980e447e83_c.jpg">
                                </v-card-media>

                                <v-card-text>
                                    purple/two/satin
                                    <li style="list-style-type: none;">Bubble Dresses
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MAAgcGT391U/1/screen_2x/canva-sunbathing-people-at-bondi-beach-MAAgcGT391U.jpg">
                                </v-card-media>

                                <v-card-text>
                                    young/thousand/Australian
                                    <li style="list-style-type: none;">People
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGydKku7A/4/screen_2x/canva-selective-focus-photography-of-jelly-beans-on-jar-MADGydKku7A.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Canadian/sweet/a bowl of/colorful
                                    <li style="list-style-type: none;">Jelly beans
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What’s your most prized possession?
  </li>

  <li>Can you describe it?
  </li>

  <li>Why is it special to you?
  </li>

  <li>How will you feel if you lose it?
  </li>

  <li>What will you do if a friend borrows it from you?
  </li>

  <li>What if a friend borrowed and lost it?
  </li>

  <li>If you can give something to your parents that you want them to prize, what will it be? How about  to  your wife/husband/children?
  </li>

  <li>Do you have something from your ancestors?
  </li>

  <li>What do you think makes a thing so precious?
  </li>



</ol>

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
