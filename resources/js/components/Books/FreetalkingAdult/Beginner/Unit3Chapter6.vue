<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

 <div style="padding : 16px;">

<h3 style="padding-top: 7px;
           margin-left: -18px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 15px;
           margin-top: 40px;
           background-color: #a7d7c5;">Conversation Samples <span style="font-size:18px">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
     <div style="padding : 16px;">

<p>
<b>A.</b>
<br>
<b>F</b>: What is the most exotic food you have eaten?
<br>
<b>M</b>: Exotic? What does it mean?
<br>
<b>F</b>: Oh, exotic means unusual or strange.
<br>
<b>M</b>: Aha! Then it has to be the casu marzu from Italy.
<br>
<b>F</b>: What is that?
<br>
<b>M</b>: It's a special kind of cheese. It's made using maggots.
<br>
<b>F</b>: Maggots? What are those?
<br>
<b>M</b>: Maggots are insects that look like short white worms.
<br>
<b>F</b>:  Unbelievable! That’s terrible!
<br>
<b>M</b>: Oh no, it's actually not.  We just ate the cheese, not the maggots. It was yummy!
</p>

<p>
<b>B.</b>
<br>
<b>M</b>: Do you know how to prepare a healthy but easy to make dish?
<br>
<b>F</b>: Hmmm. I think so! I know how to make a vegetable salad.
<br>
<b>M</b>: That’s great! Teach me how to!
<br>
<b>F</b>: First, just prepare the ingredients: vegetables, mayonnaise, tuna, pepper and salt. Wash the vegetables, put them in a bowl and mix the rest of the ingredients.
<br>
<b>M</b>: That's easy!
<br>
<b>F</b>: Yes! You can also add other vegetables like tomatoes and carrots if you like. Instead of tuna, you can also use chicken strips.
<br>
<b>M</b>: I think tuna is healthier. Gee, thanks for your advice.
<br>
<b>F</b>: No problem. Just feel free to ask me anytime!

</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Do you know how to cook?
  </li>

  <li>What’s your favorite dish to cook? Why?
  </li>

  <li>What’s your favorite food?
  </li>

  <li>What are its ingredients?
  </li>

  <li>How is it prepared?
  </li>

  <li>What is the weirdest food you’ve tasted or heard of?
  </li>

  <li>How do you feel about trying exotic foods?
  </li>

  <li>What is the most popular food in your country?
  </li>

  <li>How can you make one?
  </li>

  <li>What’s your favorite food from other countries? Why?
  </li>

  <li>If you’re challenged to eat unusual food, would you do it?
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</span></h3>
     <div style="padding : 16px;">

<p>
<b>A.</b>
<br>
<b>F</b>: 네가 먹어본 가장 이국적인 음식은 뭐니?
<br>
<b>M</b>: 이국적이라고? 그게 무슨 뜻이야?
<br>
<b>F</b>: 아, 이국적인 의미는 특이하거나 낯설다는 뜻이야.
<br>
<b>M</b>: 아하! 그럼 이탈리아에서 온 카수 마르주야.
<br>
<b>F</b>: 그게 뭐야?
<br>
<b>M</b>: 이건 특별한 종류의 치즈야. 구더기를 이용해서 만든 거야.
<br>
<b>F</b>: 구더기? 저건 뭐야?
<br>
<b>M</b>: 구더기는 짧은 흰 벌레처럼 생긴 곤충이야.
<br>
<b>F</b>: 믿을 수 없어! 끔찍해!
<br>
<b>M</b>: 아니, 사실 그렇지 않아. 우리는 구더기가 아니라 치즈만 먹었어. 맛있었어!
</p>

<p>
<b>B.</b>
<br>
<b>M</b>: 건강하지만 만들기 쉬운 요리를 어떻게 준비하는지 아니?
<br>
<b>F</b>: 음. 생각해보면 나는 야채 샐러드를 만들 줄 알아.
<br>
<b>M</b>: 잘됐네! 어떻게 하는지 가르쳐줘!
<br>
<b>F</b>: 우선, 야채, 마요네즈, 참치, 후추, 소금 등 재료만 준비하면 돼. 야채를 씻은 후 그릇에 담고 나머지 재료들을 섞어.
<br>
<b>M</b>: 그건 쉬워!
<br>
<b>F</b>: 그래! 원한다면 토마토와 당근 같은 다른 채소도 넣을 수 있어. 참치 대신 닭갈비를 사용할 수도 있어.
<br>
<b>M</b>: 난 참치가 더 건강하다고 생각해. 이런, 충고 고마워.
<br>
<b>F</b>: 문제 없어. 언제든지 물어봐!

</p>

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
