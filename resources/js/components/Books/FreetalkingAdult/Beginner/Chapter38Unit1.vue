<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv0Gd57E/7/screen/canva-person-covering-woman-with-blanket-MADGv0Gd57E.jpg">

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
        padding-bottom: 10px;">Dreams</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>Last night was the weirdest dream I ever had-or at least among those that I can remember. Michael Jackson was in my dream, dancing 'Billie Jean' in our family garage. I shooed him away because I found his singing noisy. Out of nowhere, an elephant fell into our garden from the sky. Mr. Jackson transformed into a ninja and began fighting with the elephant which actually had fangs and claws. What was funny was the Big Bang group appeared out of nowhere and pacified the elephant. I don't even like this band and I was shocked they were in my dream! Riding on the elephant's back, we all decided to go to North Korea. My math professor blocked our path and she said something in English. That was when I woke up and realized I still have to do my Math assignment!
   </p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Weird</u> - strange <span class = "korean">기이한, 기묘한, 기괴한, 섬뜩한</span>
</li>

<li style="list-style-type: none;"><u>Garage</u> - the place in a house where the car is parked <span class = "korean">차고, 주차장</span>
</li>

<li style="list-style-type: none;"><u>Shoo</u> -  to tell an animal or person to go away <span class = "korean">숴이[훠이]라고 하다, 저리 가</span>
</li>

<li style="list-style-type: none;"><u>Claw</u> - long, sharp nails of an animal <span class = "korean">발톱, 집게발, 갈고리 모양의 도구[기계], 할퀴다[긁다]</span>
</li>

<li style="list-style-type: none;"><u>Pacify</u> - to calm down <span class = "korean">진정시키다[달래다], 평화를 가져오다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The policemen need to __________ those two boys! They keep on punching each other!
  </li>

  <li>________ the dogs away please! I am scared of them.
  </li>

  <li>When cats get angry, they show their _________.
  </li>

  <li> Mart is a ________ person. He wears a Superman costume at home and studies about aliens.
  </li>

  <li>Where's the car? It's not in the ___________.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What was Michael Jackson doing in her dream?
</li>

<li>What did she do to him and why?
</li>

<li>Where did the elephant come from?
</li>

<li>Who pacified the elephant?
</li>

<li>What did they ride to go to North Korea?
</li>

<li>What made here wake up?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>어젯밤은 내가 꿨었던 중 가장 이상한 꿈이었다. 적어도 내가 기억할 수 있는 꿈들 중에서 말이다. 마이클 잭슨은 우리 가족 차고에서 '빌리 진' 춤을 추면서 내 꿈속에 있었다. 나는 그의 노랫소리가 시끄럽다는 것을 알고 그를 쫓아냈다. 갑자기 하늘에서 코끼리 한 마리가 우리 정원으로 떨어졌다. 잭슨씨는 닌자로 변신하여 송곳니와 발톱을 가진 코끼리와 싸우기 시작했다. 재미있는 것은 빅뱅 그룹이 갑자기 나타나 코끼리를 달래는 것이었다. 나는 이 밴드를 좋아하지도 않고 그들이 내 꿈속에 있다는 것에 충격을 받았다! 코끼리를 등에 업고 우리는 모두 북한으로 가기로 했다. 우리 수학 교수님이 길을 막으시고 영어로 뭐라고 하셨다. 그때 내가 잠에서 깨어났을 때 나는 아직 수학 숙제를 해야 한다는 것을 깨달았다!
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
