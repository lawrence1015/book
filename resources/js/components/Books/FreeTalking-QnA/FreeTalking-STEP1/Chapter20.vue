<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/wQVL0/MADyRSwQVL0/1/s2/canva-man-smoking-cigar-MADyRSwQVL0.jpg">

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
        padding-bottom: 10px;">Smoking</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       When do people smoke?<br />
       <br />
     </li>
     <li class="mb-2">
       If you were a smoker, how long has it been since you quit smoking?
       <ul>
         <li class="mt-2">How do you feel about quitting?</li>
         <li>
           How did you stop smoking?
         </li>
         <li>
           Have you ever felt tempted to go back to smoking again? Explain.
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       In many cities in the United States, smoking is banned in supermarkets, restaurants, hospitals, department stores, airplanes, and most forms of public transportation.

       <ul>
         <li class="mt-2">Do you think that people should be permitted to smoke on airplanes, buses, or trains? Why or why not?</li>
         <li>
           Should people be allowed to smoke in public places? Why or why not?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Is smoking banned anywhere in your country? Where?
       <ul>
         <li class="mt-2">Is there a legal age for smoking in your country?</li>
         <li>
           If so, what is it? If not, should there be?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Whose "rights" are more important, smokers or non-smokers? why?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       사람들은 언제 담배를 피우나요?
     </li>
     <br />
     <li class="mb-2">
       당신이 흡연자라면 담배를 끊은 지 얼마나 되었습니까?
       <ul>
       <li class="mt-2">그만두신 소감이 어떠세요?</li>
       <li>어떻게 담배를 끊었어요?</li>
       <li>다시 담배를 피우고 싶은 유혹을 느낀 적이 있나요? 설명해 주세요.</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       미국의 많은 도시에서, 흡연은 슈퍼마켓, 식당, 병원, 백화점, 비행기 그리고 대부분의 대중 교통에서 금지됩니다.
       <ul>
       <li class="mt-2">여러분은 사람들이 비행기, 버스, 기차에서 담배를 피우는 것이 허용되어야 한다고 생각하나요? 왜 그런가요, 아니면 왜 아닌가요?</li>
       <li>사람들이 공공장소에서 담배를 피우는 것이 허용되어야 할까요? 왜 그럴까요, 아니면 왜 아닐까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신 나라 어디에서도 흡연이 금지되어 있나요? 어디인가요?
       <ul>
       <li class="mt-2">나라에는 흡연에 대한 법적 연령이 있나요?</li>
       <li>만약 그렇다면, 그것은 몇살입니까? 그렇지 않다면, 있어야 하나요?</li>
       </ul>
   </li>
   <br />
   <li class="mb-2">
       흡연자와 비흡연자 중 누구의 "권리"가 더 중요할까요? 이유는 무엇인가요?
   </li>
   </ol>

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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

</style>
