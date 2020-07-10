<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/sea-sunset-beach-boracay_121-74755.jpg">

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
        padding-bottom: 10px;">The Future</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span> </h3>
               <div style="padding : 16px;">

<p>Cindy and Jas are very excited for next month! They can't wait for it! They won a trip for two at a raffle promo of a big mall. For two weeks, they will tour to some Asian countries. They will have a stopover in Japan first and eat some very nice sushi. They will travel to the Philippines next and they will visit some very beautiful places there like Palawan and Boracay. Their next stop will be in Thailand and they will definitely visit the ancient Buddhist temples.  Finally, they will explore Singapore and they will swim at Sentosa beach!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Raffle(n)</u> -  an even where numbered tickets are drawn at random to win prizes <span style="font-size:16px">래플(특정 프로젝트기관의 기금 모금을 위한 복권)</span>
</li>

<li style="list-style-type: none;"><u>Promo(n) </u> - something to promote a product <span style="font-size:16px">판촉[홍보]용의</span>
</li>

<li style="list-style-type: none;"><u>Stop(n)</u> - a place to visit on the way <span style="font-size:16px">멈춤, 중단; (잠시) 머묾</span>
</li>

<li style="list-style-type: none;"><u>Definitely(adv)</u> - certainly, exactly <span style="font-size:16px">분명히[틀림없이]; 절대, 확실히, 분명히</span>
</li>

<li style="list-style-type: none;"><u>Explore(v)</u> - travel for discovery, investigate <span style="font-size:16px">답사[탐사/탐험]하다, 탐구[분석]하다</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>I like buy-one-take-one __________. They help me save a lot of money.
  </li>

  <li>Rizal Park was a major __________ in our Manila tour.
  </li>

  <li>If your name will be drawn in the __________, you will win a brand new car.
  </li>

  <li>You should _________ the Philippines. There are so many beautiful tourist spots.
  </li>

  <li>That is _________ a good kimchi. It is so delicious!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Why are Cindy and Jas excited?
</li>

<li>How did they win an Asian trip?
</li>

<li>What will they do in Japan?
</li>

<li>How about in the Philippines?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">
  <p>Cindy와 Jas는 다음달을 매우 기대하고 있다! 그들은 그것을 기다릴 수 없다! 
     그들은 큰 쇼핑몰의 추첨에서 두 사람 몫의 여행에 당첨되었다. 
     2주 동안, 그들은 몇몇 아시아 국가들을 순회할 것이다. 그들은 먼저 일본에 들러서 맛있는 초밥을 먹을 것이다. 
     그들은 다음에 필리핀으로 여행을 갈 것이고 팔라완과 보라카이와 같은 매우 아름다운 곳을 방문할 것이다. 
     그들의 다음 목적지는 태국에 있을 것이고 그들은 반드시 고대 불교 사원을 방문할 것이다. 
     마지막으로, 그들은 싱가포르를 탐험할 것이고 센토사 해변에서 수영을 할 것이다!
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

li{


}

body{

  font-size: 16px;
}

</style>
