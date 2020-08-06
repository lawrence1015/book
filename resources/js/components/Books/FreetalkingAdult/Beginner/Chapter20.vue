<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="//live.staticflickr.com/8284/7559815244_5b8890cf4a_k.jpg">

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
        padding-bottom: 10px;">Inspiring People</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
               <div style="padding : 16px;">

<p>Walt Disney will remain as one of the most popular and inspiring people to ever live in this world. He is best known as an American director, producer and animator. Before he became highly successful, he was first a boy in a poor family of four brothers and one sister. Throughout his life, he continued to keep and develop his interest in drawing and performing.  He met many failures in his life. He had been rejected several times when he was still starting out.  In the end, because of his persistence, he had given the world the gift of animation, optimism and imagination. Disney's life will always serve as a story of inspiration.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Reject(v)</u> -  to turn down; to not accept 거부[거절]하다, 거부하다[불합격시키다]
</li>

<li style="list-style-type: none;"><u>Persistence(n)</u> -   to continue despite hardships 고집, 지속됨
</li>

<li style="list-style-type: none;"><u>Optimism(n)</u> -  positive thinking 낙관론, 낙관[낙천]주의
</li>

<li style="list-style-type: none;"><u>Inspiration(n)</u> -   something that provides motivation 영감, 영감[자극]을 주는 사람[것]
</li>

<li style="list-style-type: none;"><u>Inspiring(adj)</u> - giving inspiration 고무[격려/자극]하는
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Stories of failures which turned into success are always _____________.
  </li>

  <li>The teacher will _____________ the presentation if it is not good enough.
  </li>

  <li>Do not give up on your dreams. Have some ______________.
  </li>

  <li>With ______________ you   will learn to see the good side of everything.
  </li>

  <li>My family is my _____________ to succeed.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Who is Walt Disney?
</li>

<li>Who was he before he became successful?
</li>

<li>What did he do throughout his life?
</li>

<li>What did he do when he was rejected?
</li>

<li>What is Disney’s gift to the world?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">

  <p>월트 디즈니는 세상에서 가장 인기 있고 영감을 주는 사람들 중 하나로 남을 것이다. 그는 미국의 감독, 프로듀서, 애니메이터로 가장 잘 알려져 있다. 그가 크게 성공하기 전에, 그는 처음에는 4남 1녀의 가난한 집안의 소년이었다. 그는 일생 동안 계속해서 그림 그리기와 공연에 대한 관심을 유지하고 발전시켰다. 그는 인생에서 많은 실패를 만났다. 그는막 시작했을 때 몇 번이나 거절당한 적이 있었다. 결국 그의 끈기 때문에 그는 세상에 애니메이션, 낙관, 상상력의 선물을 주었다. 디즈니의 삶은 언제나 영감의 이야기로 작용할 것이다.
  </p>
  </div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Conversation Samples (선생님과 역할을 나눠서 연습해보세요)
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


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">


<p>Possessive Forms
</p>

<li style="list-style-type: none;">A. Possessive Nouns
</li>
<li style="list-style-type: none;">To indicate possession or ownership, we have to add -'5 to a name. However, when the word has one syllable and ends with the letter s, we just have to add -' (apostrophe).
</li>

<br />

<li style="list-style-type: none;">Example:
</li>
<li style="list-style-type: none;">That is Jamie's horse.
</li>
<li style="list-style-type: none;">(Adding 's means Jamie owns the horse.)
</li>

<br />

<li style="list-style-type: none;">This is Chris' notebook.
</li>
<li style="list-style-type: none;">(Because the name Chris has only one syllable and ends with s, we only add -' (apostrophe).
</li>

<br />

<li style="list-style-type: none;">B. Possessive Pronouns
</li>
<li style="list-style-type: none;">Instead of using names, we can also use the following pronouns to show ownership. Study the sentences and the table
</li>
<li style="list-style-type: none;">below:
</li>





<v-container>
  <v-layout>
    <v-flex xs12 sm12 md4>
      <div>
<table>
  <tr>
    <th style=" padding-right: 50px;">Pronoun</th>
    <th style=" padding-right: 50px;">Possessive Form</th>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">I</td>
    <td style=" padding-right: 50px;">My, Mine</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">You</td>
    <td style=" padding-right: 50px;">Your</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">We</td>
    <td style=" padding-right: 50px;">Our</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">They</td>
    <td style=" padding-right: 50px;">Their</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">He</td>
    <td style=" padding-right: 50px;">His</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">She</td>
    <td style=" padding-right: 50px;">Her</td>
  </tr>
  <tr>
    <td style=" padding-right: 50px;">It</td>
    <td style=" padding-right: 50px;">Its</td>
  </tr>
</table>
</div>
</v-flex>
</v-layout>
</v-container>


<ol style="margin: 12px;">
  <li>That is <u>my</u> book.
  </li>

  <li><u>Your</u> new table looks great.
  </li>

  <li><u>His</u> eyes are blue. (Male)
  </li>

  <li><u>Her</u> dogs are cute and cuddly. (Female)
  </li>

  <li><u>Their</u> classes will start next week.
  </li>

  <li>Will you come to <u>our</u> party?
  </li>

  <li>My garden is nice. <u>Its</u> flowers are in full bloom today. (Thing)
  </li>

</ol>



</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  A. Use the correct possessive form of the nouns in the following sentences.
</p>

<ol style="margin: 12px;">

  <li>We would like to borrow ______________ guitar. (Miss Park)
  </li>

  <li>I want to see ______________ amazing tourist spots. (Korea)
  </li>

  <li>_____________ movies are great! (Angelina Jolie)
  </li>

  <li>_____________ house is painted in yellow and brown. (Mr. Tass)
  </li>

  <li>You should really watch ______________ dance performance. (Ysa)
  </li>

  <li>We are happy to know that _____________  grades are higher! (Bess)
  </li>

  <li> _________________ friends visited him. (Alexander)
  </li>

  <li>That is ______________ family! (Dorothy)
  </li>

  <li>_______________ voice is sweet and nice. (Amy)
  </li>

  <li>I can't wait to see _____________ new dress design! (Lora)
  </li>

</ol>

<p>
  B. Change the underlined words into its proper possessive pronoun form.
</p>

<ol style="margin: 12px;">

  <li>(We) cakes are made from the finest ingredients.
  </li>

  <li>It's really nice to see (they) concert.
  </li>

  <li>(Scarlet) essay about Culture was praised by the teacher.
  </li>

  <li>We should probably clean (the dog) house.
  </li>

  <li>(John) new shoes were bought from United Kingdom.
  </li>

  <li>Have you heard (they) new sonqs?
  </li>

  <li>We are glad to know about (your) fantastic vacation in Thailand.
  </li>

  <li>Did you see (Allie) new sports car?
  </li>

  <li>(Julie) website designs are attractive and user-friendly.
  </li>

  <li>We are thinking about renovating (we) apartment.
  </li>

</ol>


</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What can you say about Disney's story?
  </li>

  <li>Who or what is your inspiration in life? Why?
  </li>

  <li>Do you know about other inspiring stories? Can you narrate some it?
  </li>

  <li>Who do you consider as the most inspiring Korean person? Why?
  </li>

  <li>Who among your family members encourages you the most?
  </li>

  <li>What do you do to encourage yourself when you’re having a hard time?
  </li>

  <li>How do you want other people to encourage you?
  </li>

  <li>Do you encourage others when you see them sad or crying? How?
  </li>

  <li> Do you also consider yourself an inspiration? Why or why not?
  </li>

  <li>What do you want to achieve in your life?
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

body{

  font-size: 16px;
}

</style>
