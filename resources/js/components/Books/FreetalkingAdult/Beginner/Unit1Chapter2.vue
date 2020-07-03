<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media-public.canva.com/MADGv9WsBfM/6/screen_2x.jpg">

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
        padding-bottom: 10px;">Travelling</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>My family had a memorable trip to Jeju Island in the autumn of 2010.  I was twenty years old at that time.  We rode an airplane from Seoul and it took us about an hour to get there.   The wind was strong   and fresh. The land was green with grass. We climbed the Halla Mountain. I was very thrilled. We also swam in a beach.  The water was very clear. We ate black pigs and a special orange   fruit. My trip to Jeju Island is unforgettable!
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>thrilled</u> - to feel both excited and happy <span style="font-size:16px">(너무 좋아서) 황홀해 하는, 아주 흥분한</span>
</li>

<li style="list-style-type: none;"><u>memorable</u> - worth-remembering <span style="font-size:16px">기억할 만한</span>
</li>

<li style="list-style-type: none;"><u>unforgettable</u> - impossible to forget <span style="font-size:16px">(보통 너무 아름답거나 재미있거나 해서) 잊지 못할</span>
</li>

<li style="list-style-type: none;"><u>fresh</u> - giving vitality and energy <span style="font-size:16px">신선한,  (기억 등이) 생생한</span>
</li>

<li style="list-style-type: none;"><u>special</u> - unique <span style="font-size:16px">(다른 무엇보다 중요해서) 특별한</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>I was __________ when I saw my favorite actor smile at me.
  </li>

  <li>I will always remember my trip to Korea. It will always be ______________.
  </li>

  <li>My mother’s smoked duck is the best. It’s very ___________.
  </li>

  <li>The clean water in the river is so clear and _____________.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
<div style="padding : 16px;">




<li style="list-style-type: none;">What is the reading about?
</li>

<li style="list-style-type: none;">When did they go there?
</li>

<li style="list-style-type: none;">How did they get there?
</li>

<li style="list-style-type: none;">What was the wind in Jeju like?
</li>

<li style="list-style-type: none;">What did the writer do there?
</li>

<li style="list-style-type: none;">What did they eat?
</li>
</div>

<h3 style="padding-top: 7px;
           margin-left: -18px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 10px;
           margin-top: 10px;
           background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;">

<p>
  우리 가족은 2010년 가을 제주도로 기억에 남는 여행을 했다. 그때 나는 스무 살이었다.
  우리는 서울에서 비행기를 탔고 거기까지 가는데 약 1시간 정도 걸렸다. 바람이 세고 신선했다. 땅은 풀로 푸르렀다.
  우리는 한라산을 등반했다. 나는 매우 감격했다. 우리는 또한 해변에서 수영을 했다. 물은 매우 맑았다.
  우리는 흑돼지와 특별한 오렌지 과일을 먹었다. 나의 제주도 여행은 잊을 수 없다!
</p>

<ol style="margin: 12px;">
  <li>be동사와 인칭대명사 : be동사(...이다/있다), 인칭대명사(사람, 사물을 지칭하는 말)<br />
      I am (I'm-축약형)  / You are (you're)
  </li>

  <li>please call me Ben : 사람들은 이름대신 애칭을 많이 사용합니다.
  </li>

</ol>

</div>
</div>



       </v-layout>
     </v-container>
  </v-layout>
  </v-container>
</div>
</template>

<script>
export default {

  props: ['fontSize'],

  data(){

    return{


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
