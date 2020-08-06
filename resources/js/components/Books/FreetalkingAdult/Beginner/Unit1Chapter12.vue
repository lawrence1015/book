<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5mus8ec/1/screen_2x/canva-untitled-MADQ5mus8ec.jpg">

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
        padding-bottom: 10px;">Past Happenings</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
          </h3>
               <div style="padding : 16px;">

<p>This morning, I went to the supermarket to buy some groceries. I was exhilarated because there was a sale! I got 20% discount on meat products and 30% on fruits and vegetables. When I found out the snack bars were discounted by 80%, I was super happy! I loaded up a whole cart just with them! I went home whistling with happiness. However, I couldn't have been more disappointed with myself when my youngest daughter said out of the blue, "Mom, all these snack bars are going to expire in two days." Oh well, I think we will have to eat some and give some away tomorrow. What a waste!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Exhilarate(v)</u> - to make somebody feel happy and alive <span class = "korean">아주 기쁘게 만들다</span>
</li>

<li style="list-style-type: none;"><u>Discount(n,v)</u> -  reduce the price of something <span class = "korean">할인, 할인하다, 할인해서 팔다</span>
</li>

<li style="list-style-type: none;"><u>Load(v)</u> -  to put something on a vehicle or animal <span class = "korean">짐[화물], 짐의 양[적재량]</span>
</li>

<li style="list-style-type: none;"><u>Whistle(v)</u> -  make sound through the lips <span class = "korean">호각[호루라기] 소리, 휘파람</span>
</li>

<li style="list-style-type: none;"><u>Out of the blue</u> - unexpectedly <span class = "korean">갑자기, 난데없이</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>We already _______ all the things in the car.
  </li>

  <li>We should get a __________ on the presents to save some money!
  </li>

  <li>The beautiful view of the mountaintop __________ me!
  </li>

  <li>Jake ____________ a happy tune while I sang.
  </li>

  <li>___________, he fell on his knees and took out a ring!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What did she do this morning?
</li>

<li>How much did she get on meat?
</li>

<li>Why did she buy so many snack bars?
</li>

<li>What are they going to do with the snack bars?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Grammar Stop</h3>
<div style="padding : 16px;" class = "korean">
  <p>
    오늘 아침, 나는 식료품을 사러 슈퍼마켓에 갔다. 세일이 있어서 신났다! 나는 고기 제품을 20%, 과일과 야채는 30% 할인을 받았다.
    스낵바가 80% 할인된다는 것을 알았을 때, 나는 정말 행복했다! 나는 그것들을 함께 수레를 한 대 가득 실었다!
    나는 행복에 겨워 휘파람을 불며 집에 갔다.
    그러나 막내딸이 느닷없이 "엄마, 이 스낵바들이 이틀이면 다 만기가 될 거야"라고 말했을 때 나 자신에게 이보다 더 실망할 수는 없었을 것이다.
    그래, 내일은 좀 먹고 나눠줘야 할 것 같다. 아깝다!
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
