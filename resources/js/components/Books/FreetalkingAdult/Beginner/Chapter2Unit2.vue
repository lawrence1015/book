<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

<div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://media-public.canva.com/MADGyf6U85E/4/screen_2x.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">


<p>My best friend and I went to New York last summer vacation. We went there because we wanted to see the Statue of Liberty. When we finally saw it, it was bigger than we expected! It was gigantic! We bought mini­-replicas as souvenirs. We also ate a lot of Western food like hamburgers and pizza. During our last day, our new American friend named Mary gave us a free tour of the City. It was a fantastic trip!
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">

<li style="list-style-type: none;"><u>expect</u> - to regard something as probable or likely <span class = "korean">예상하다</span>
</li>

<li style="list-style-type: none;"><u>gigantic</u> - very large <span class = "korean">거대한</span>
</li>

<li style="list-style-type: none;"><u>souvenir</u> - a remembrance <span class = "korean">(휴가지 등에서 사는) 기념품</span>
</li>

<li style="list-style-type: none;"><u>mini</u> - very short or small <span class = "korean">미니의, 아주 작은, 소형의</span>
</li>

<li style="list-style-type: none;"><u>replica</u> - a copy that is not original <span class = "korean">(실물을 모방하여 만든) 복제품</span>
</li>

<li style="list-style-type: none;"><u>fantastic</u> -- extraordinarily good <span class = "korean">기막히게 좋은, 환상적인</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>We've heard this is a good product so we __________ to get good
  </li>

  <li>That tree is very tall! It's _____________.
  </li>

  <li>Please change your _________ dress.  It's too short!
  </li>

  <li>There is a ______________ of a famous painting in her house.
  </li>

  <li>This restaurant serves very delicious food.  Our last meal was __________.
  </li>

  <li>Did you bring ___________ for us from France?
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">



<ol style="margin: 12px;">
<li>Where did they go?
</li>

<li>When did they go there?
</li>

<li>Why did they want to visit New York?
</li>

<li>How did the Statue of Liberty look like?
</li>

<li>What did they eat?
</li>

<li>What did they do on their last day?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;
           margin-left: -18px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 10px;
           margin-top: 10px;
           background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>
         나의 가장 친한 친구와 나는 지난 여름 방학에 뉴욕에 갔다. 우리는 자유의 여신상을 보고 싶어서 그곳에 갔다. 마침내 우리가 그것을 보았을 때, 그것은 우리가 예상했던 것보다 더 컸다! 정말 대단했다! 우리는 기념품으로 작은 복제품 모형을 샀다. 우리는 또한 햄버거와 피자 같은 서양 음식도 많이 먹었다. 우리의 마지막 날 동안, 메리라는 새로운 미국인 친구는 우리에게 도시를 무료로 여행하게 해주었다. 정말 환상적인 여행이었다!
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
