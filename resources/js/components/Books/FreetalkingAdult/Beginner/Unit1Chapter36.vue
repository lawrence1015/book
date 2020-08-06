<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwH4yJkk/5/screen/canva-man-reading-a-book-MADGwH4yJkk.jpg">

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
        padding-bottom: 10px;">Learning Foreign Languages</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>My name is Michael and I am a Filipino. There are about 170 languages in our country! Because my parents are from different regions, they spoke different languages to me when I was very young. This made me want to learn languages. Interest is the greatest motivating factor in learning anything. For example, I was interested in learning English and in fairy tales so I just quickly picked up the language as I read story books and adventure novels. It also helps that the TV programs shown in the national television have a lot of English in it. When you want to learn a new language, be sincerely interested. Most of all, love it and have fun!
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Region(n)</u> - area; political unit within a country <span class = "korean">지방, 지역, 지방, 부위[부분]</span>
</li>

<li style="list-style-type: none;"><u>Motivating(adj)</u> - giving reason and inspiration <span class = "korean">동기부여</span>
</li>

<li style="list-style-type: none;"><u>Pick up(v)</u> - acquire something casually or not intending it <span class = "korean">태우러[데리러] 감; 찾으러 감</span>
</li>

<li style="list-style-type: none;"><u>Sincerely(adv)</u> - honestly <span class = "korean">진심으로</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>It is colder in the higher __________ compared to the lower ones.
  </li>

  <li>It is very _________ when parents show vocal support to their children.
  </li>

  <li>If you _________ want something, you are willing do anything to achieve it.
  </li>

  <li>If we send you to a good school, you may be able to __________ some good habits!
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>How many languages are there in his country?
</li>

<li>How did he become interested in languages?
</li>

<li>What was he interested in?
</li>

<li>How was he able to pick up the English language?
</li>

<li>How did TV programs help him?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>내 이름은 마이클이고 필리핀 사람입니다. 우리나라에는 170여 개의 언어가 있답니다! 우리 부모님은 다른 지역 출신이기 때문에 내가 아주 어렸을 때 다른 언어를 사용하셨습니다. 이것은 내가 언어를 배우고 싶게 만들었습니다. 흥미는 어떤 것을 배우는데 있어서 가장 큰 동기부여 요인입니다. 예를 들어, 저는 영어와 동화에 관심이 있어서 이야기책과 모험 소설을 읽으면서 금방 언어를 습득했습니다. 그것은 또한 국영 TV에 방영되는 TV프로그램에 영어가 많이 포함되어 있다는 것은 또 도움이 되었습니다. 새로운 언어를 배우고 싶을 때, 진심으로 관심을 가지세요. 무엇보다도, 그것을 사랑하고 재미있게 보내세요!
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


body{

  font-size: 16px;
}

</style>
