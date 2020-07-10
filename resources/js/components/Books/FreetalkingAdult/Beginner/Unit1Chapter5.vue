<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGvve_Cpw/7/screen_2x/canva-woman-wearing-black-sleeveless-dress-holding-white-headphone-at-daytime-MADGvve_Cpw.jpg">

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
        padding-bottom: 10px;">Music</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>People may not know it but scientific researches prove that music has lots of benefits to our health. First, listening to music can help a person feel better. Many people say that listening to their favorite songs or singers can decrease their stress levels or boost their mood. Second, some types of music can help improve focus and concentration. Lastly, music can be an effective treatment in dealing with mental problems because it can be an outlet for emotional expression.
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Benefit</u> - something that is good or helpful <span style="font-size:16px">혜택, 이득, 수당[보조금], 특전[수당]; 보험금</span>
</li>

<li style="list-style-type: none;"><u>Decrease</u> - to make smaller <span style="font-size:16px">줄다[감소하다]; 줄이다[감소시키다], 감소, 하락</span>
</li>

<li style="list-style-type: none;"><u>Boost</u> -  to increase or raise <span style="font-size:16px">신장시키다, 북돋우다, 훔치다, 격려, 힘, 부양책</span>
</li>

<li style="list-style-type: none;"><u>Mood</u> - state of feelings <span style="font-size:16px">기분, 분위기</span>
</li>

<li style="list-style-type: none;"><u>Outlet</u> - an activity that expresses emotions <span style="font-size:16px">발산[배출]</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Lazy employees will __________ our company's sales.
  </li>

  <li>She needs to _________ her efforts so she can get higher grades.
  </li>

  <li>I'm in a good _________ today. I feel happy!
  </li>

  <li>Exercise has lots of ____________.
  </li>

  <li>My emotional __________ is painting. I express my feelings through art.
  </li>

</ol>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>How can music help a person feel better?
</li>

<li>What can music do to our mental ability?
</li>

<li>How can music help in treating mental problems?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">
       <p>
         사람들은 그것을 모를 수도 있지만, 과학적인 연구는 음악이 우리의 건강에 많은 이점이 있다는 것을 증명한다.
         첫째로, 음악을 듣는 것은 사람의 기분을 좋게 할 수 있다.
         좋아하는 노래나 가수를 들으면 스트레스가 줄어들거나 기분이 좋아질 수 있다는 의견이 많다.
         둘째, 어떤 종류의 음악은 집중력과 집중력을 향상시키는데 도움을 줄 수 있다.
         마지막으로 음악은 감정표현의 배출구가 될 수 있기 때문에 정신적인 문제를 다루는데 효과적인 치료법이 될 수 있다.
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
