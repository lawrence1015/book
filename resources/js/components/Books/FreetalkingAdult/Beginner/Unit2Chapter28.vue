<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADQ5ZkO8ZQ/1/screen_2x/canva-untitled-MADQ5ZkO8ZQ.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; margin-left: -18px; margin-right: -18px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #a7d7c5;">Reading Practice 
  <br><span class = "korean"> ( 선생님의 안내에 따라 문장을 읽어 주세요 )  </span></h3>

<div style="padding : 16px;">

<p>Stress is a natural thing. When one works or studies very hard, stress is our body's way to tell us that we are tired and need to relax a bit. It is important to take a rest because if stress becomes very great, we might become sick and depressed. Here are some ways to relax without spending too much:
</p>

<ol style="margin: 12px;">
  <li>Drink a warm cup of milk and get a good, long sleep.
  </li>

  <li>Watch a comedy film while eating chocolates or ice cream.
  </li>

  <li>Take a walk in the park.
  </li>

  <li>Get a manicure or a new hairstyle. 
  </li>

  <li>Call up a very close friend.
  </li>



</ol>


</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Natural (adj)</u> -  normal <span class = "korean">자연[천연]의, 자연 발생적인, 정상적인, 당연한, 타고난, 천부적인, 천성의</span>
</li>

<li style="list-style-type: none;"><u>Stress (n)</u> -  an unpleasant feeling <span class = "korean">스트레스, 압박, 긴장, 중점, 역점, 강조, 강세, 악센트</span>
</li>

<li style="list-style-type: none;"><u>Depressed (adj)</u> -  very sad and weak <span class = "korean">우울한[암울한], 우울증을 앓는, 활기가 없는, 침체된</span>
</li>

<li style="list-style-type: none;"><u>Manicure (n)</u> -   hand and nails treatment <span class = "korean">손톱 손질, 손 관리, 손톱 손질[손 관리]을 하다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>My nails are dirty so I will get a ___________.
  </li>

  <li>A common cause of _________ is work.
  </li>

  <li>A common cause of _________ is work.
  </li>

  <li>It is ____________ to feel angry when you see your boyfriend with another girl.
  </li>



</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What does our body tell us when we are stressed?
</li>

<li>Why is it important to take a rest?
</li>

<li>According to the article, what is the first way to relax?
</li>

<li>What should you do while watching comedy films?
</li>

<li>Whom should you call?
</li>
</ol>



</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

  <p>스트레스는 자연스러운 것이다. 어떤 사람이 매우 열심히 일하거나 공부를 할 때, 스트레스는 우리가 피곤하고 조금 쉴 필요가 있다는 것을 말해주는 우리 몸의 방법이다. 만약 스트레스가 매우 커지면, 우리는 아프고 우울해질 수 있기 때문에 휴식을 취하는 것이 중요하다. 많은 비용을 들이지 않고 휴식을 취할 수 있는 몇 가지 방법이 있다.
  </p>

<ol style="margin: 12px;">
  <li>따뜻한 우유 한 컵을 마시고, 푹 오래 잔다.
  </li>

  <li>초콜릿이나 아이스크림을 먹으면서 코미디 영화를 본다.
  </li>

  <li>공원을 산책한다.
  </li>

  <li>매니큐어나 새로운 헤어스타일을 한다. 
  </li>

  <li>아주 친한 친구에게 전화를 한다.
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
