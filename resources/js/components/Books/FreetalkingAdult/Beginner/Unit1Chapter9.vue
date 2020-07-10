<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwJm1cCE/5/screen_2x/canva-group-of-people-on-beach-photo-MADGwJm1cCE.jpg">

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
        padding-bottom: 10px;">The Weather</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Yesterday was a lovely cloudy day! There were clumps of round white clouds in the blue sky so my family decided to go to the beach. It was the perfect weather for swimming and frolicking in the beach   because we never want to get sunburned. However, the clouds cleared and it was too sunny at noon so we walked back to our cottage to eat. We were talking and laughing when we realized it was getting gloomy outside. Dark clouds have obscured the sun? My parents have to work the next day so we had to drive through the heavy downpour. What a fickle weather that was?
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Clumps(n)</u> - in every way, fully <span style="font-size:16px">(사람·사물의) 집단</span>
</li>

<li style="list-style-type: none;"><u>Frolic(v) </u> - shy and uncomfortable <span style="font-size:16px">즐겁게 뛰놀다, 놀이[장난]</span>
</li>

<li style="list-style-type: none;"><u>Gloomy(adj)</u> - small amount or number <span style="font-size:16px">어둑어둑한; 음울한, 우울한</span>
</li>

<li style="list-style-type: none;"><u>Obscure(v)</u> - reason <span style="font-size:16px">이해하기 힘든, 모호한</span>
</li>

<li style="list-style-type: none;"><u>Downpour(n)</u> - magnificent <span style="font-size:16px">폭우</span>
</li>

<li style="list-style-type: none;"><u>Fickle(adj)</u> - very funny <span style="font-size:16px">변덕스러운, 변화가 심한</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The news said there will be a ____________ today so bring your umbrella, please.
  </li>

  <li>My best friend will live in another country.  I feel ________ about it.
  </li>

  <li>The clouds _________ the stars.
  </li>

  <li>The children ___________ in the park.
  </li>

  <li>Women have such ______________ minds!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Why did the writer’s family decide to go to the beach?
</li>

<li>Why was the weather perfect for swimming?
</li>

<li>What happened at noon?
</li>

<li>Why was it gloomy during the late afternoon?
</li>

<li>Why did they have to go home?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">
  <p>
    어제는 아주 흐린 날씨였다! 파란 하늘에 동그란 흰 구름이 뭉쳐 있어서 우리 가족은 해변으로 가기로 했다. 해변에서 수영하고 놀기에 완벽한 날씨였다.
    왜냐하면 우리는 결코 햇볕에 그을리고 싶지 않기 때문이다. 하지만, 구름이 걷히고 정오에는 너무 화창해서 우리는 먹기 위해 우리 오두막집으로 되돌아갔다. 우리는 말하고 웃다가 밖이 어두워지고 있다는 것을 깨달았다.
    먹구름이 태양을 가렸다. 다음날 부모님이 일을 하셔야 해서 우리는 폭우를 뚫고 운전해야 했다. 얼마나 변덕스러운 날씨였을까?
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
