<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyJ893V4/4/screen_2x/canva-men%27s-red-beanei-MADGyJ893V4.jpg">

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
        padding-bottom: 10px;">Relaxation</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Working five days a week, eight hours a day can be very stressful especially for a teacher like me. I lecture all day to eight different high school classes. After standing in the classroom or sitting in the office for too long, I often experience muscle aches especially on my back and legs. To unwind, I often visit the sauna at night for at least twice a week. Sometimes during the weekends, I also visit a spa salon to get a full body massage. Somehow this lessens my stress and prepares me for my job in the upcoming week.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Stressful(adj)</u> -  causing stress <span style="font-size:16px">스트레스가 많은</span>
</li>

<li style="list-style-type: none;"><u>Lecture(v)</u> -  to teach <span style="font-size:16px">강의, 강연, 잔소리[설교], 강의[강연]하다, 잔소리[설교]를 하다</span>
</li>

<li style="list-style-type: none;"><u>Ache(v)</u> -   pain <span style="font-size:16px">아프다, 못 견디다, 아픔, 아픔, 통증, 동통., 연속통으로 괴로워하는 것.</span>
</li>

<li style="list-style-type: none;"><u>Unwind(v)</u> -  to relax <span style="font-size:16px">풀다, 긴장을 풀다</span>
</li>

<li style="list-style-type: none;"><u>Salon(n)</u> - place for beauty treatments <span style="font-size:16px">상점, 응접실, 살롱</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Our professor will __________ about world history.
  </li>

  <li>After playing soccer all day, I had some body ___________.
  </li>

  <li>I need to go to the _________ to get a new haircut.
  </li>

  <li>Listening to slow music helps me _____________.
  </li>

  <li>My boss is very _________! She is very strict and demanding!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is her job? How often does she work?
</li>

<li>What does she complain about her body?
</li>

<li>Where does she experience muscle aches?
</li>

<li>What does she do to relax at night?
</li>

<li>What does she do on the weekends?
</li>
</ol>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

  <p>일주일에 5일, 하루에 8시간을 일하는 것은 특히 나 같은 선생님에게 매우 스트레스를 줄 수 있다. 나는 하루 종일 8개의 고등학교 수업을 강의한다. 교실에 서 있거나 사무실에 너무 오래 앉아 있으면 특히 허리와 다리에 근육통이 오는 경우가 많다. 긴장을 풀기 위해, 나는 종종 적어도 일주일에 두 번 밤에 사우나를 방문한다. 가끔 주말에, 나는 전신 마사지를 받기 위해 스파 미용실을 방문하기도 한다. 왜인지 이것이 내 스트레스를 줄여주고 다가오는 주에 내가 일할 수 있도록 준비시켜 준다.
  </p>

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
