<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MAA1JhvmerA/1/screen_2x/canva-stack-of-pancake-on-a-plate-MAA1JhvmerA.jpg">

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
        padding-bottom: 10px;">Food</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
          </h3>
               <div style="padding : 16px;">

   <p>Every morning, I eat pancakes before going to work. I like them because I have a tight schedule and they are very easy to cook. First, I prepare the ingredients. I just need a cup of flour, a teaspoon of butter, a cup of water, and a fresh egg. Second, I mix them all together in a bowl. Third, I pour a sufficient quantity in my small frying pan. After about two minutes, I flip it over to heat the other side. Lastly, I put fresh butter and sweet syrup on the top. Sometimes, I eat pancakes with sweet strawberries or slices of fresh bananas.
   </p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Ingredient</u> - an element required for something <span class = "korean">재료[성분], 구성 요소</span>
</li>

<li style="list-style-type: none;"><u>Sufficient</u> - enough <span class = "korean">충분한</span>
</li>

<li style="list-style-type: none;"><u>Flip</u> - turn something over <span class = "korean">홱 뒤집다, 휙 젖히다[젖혀지다], 탁 누르다[돌리다]</span>
</li>

<li style="list-style-type: none;"><u>Tight schedule</u> - not enough time <span class = "korean">꽉 찬 일정</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>We don't have ________ sugar to make a cake.
  </li>

  <li>Raw fish is an important __________ in making sushi.
  </li>

  <li> ___________ the cards. What is it?
  </li>

  <li>I'll be busy on Monday. I'll have a _____________.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What does he eat in the morning?
</li>

<li>Why does he prefer this food?
</li>

<li>What are the ingredients?
</li>

<li>According to the article, what are the steps in making pancakes?
</li>

<li>What does he add to his pan cakes sometimes?
</li>
</ol>
</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">
       <p>
         매일 아침, 나는 출근하기 전에 팬케이크를 먹는다.
         나는 일정이 빡빡하고 요리하기 매우 쉽기 때문에 그것들을 좋아한다. 먼저 재료를 준비한다.
         밀가루 한 컵, 버터 한 티스푼, 물 한 컵과 신선한 달걀 한 개만 있으면 된다.
         둘째, 나는 그것들을 모두 그릇에 넣고 섞는다. 셋째, 나는 작은 프라이팬에 충분한 양을 붓는다.
         약 2분 후에, 나는 반대편을 데우기 위해 뒤집는다. 마지막으로, 나는 신선한 버터와 달콤한 시럽을 위에 얹었다.
         때때로, 나는 달콤한 딸기나 신선한 바나나를 곁들인 팬케이크를 먹는다.
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
