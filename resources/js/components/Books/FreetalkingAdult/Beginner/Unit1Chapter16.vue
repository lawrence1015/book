<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="//live.staticflickr.com/7173/13890819315_65afa9386b_k.jpg">

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
        padding-bottom: 10px;">The Flora</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean"> ( 선생님의 안내에 따라 문장을 읽어 주세요 ) </span>
          </h3>
               <div style="padding : 16px;">

<p>Flowers are generally attractive and sweet-smelling. However, there is one exception to that rule – the rafflesia. Rafflesia is a plant that has no true leaves, roots or stems. It only looks like one big red flower.  Because it can measure up to 100 centimeters and weigh up to ten kilograms, it is considered as one of the world's largest flower. It is considered a parasite because it feeds from other vines. The blossoms look and smell like rotten meat so it is also known as the "corpse flower" or "meat flower."  It can be found in the rainforests of Thailand, Indonesia and the Philippines.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Flora(n)</u> - refers to a plant life <span class = "korean">식물군[상]</span>
</li>

<li style="list-style-type: none;"><u>Parasite(n)</u> -  an organism that lives by getting the resources of another organism <span class = "korean"> 기생 동물[식물], 기생충</span>
</li>

<li style="list-style-type: none;"><u>Blossoms(n)</u> -  flowers <span class = "korean">꽃</span>
</li>
 
<li style="list-style-type: none;"><u>Rotten(adj)</u> -  to decompose <span class = "korean"> 썩은, 부패[부식]한, 형편없는, 끔찍한</span>
</li>

<li style="list-style-type: none;"><u>Corpse(n)</u> - dead body <span class = "korean">시체, 송장</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Roses ________ are beautiful and sweet-smelling.
  </li>

  <li>These tomatoes are __________. They smell really bad!
  </li>

  <li>A ____________ of a man was found in the river! It was shocking!
  </li>

  <li>_____________ in the stomach can make a person sick and thin.
  </li>

  <li>The ___________ in these forests is diverse and interesting.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is Rafflesia generally like?
</li>

<li>How much does it measure and weigh?
</li>

<li>Why is it considered a parasite?
</li>

<li>Why is it known as the “corpse flower”?
</li>

<li>How will you describe the rafflesia based on the picture?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;" class = "korean">


<p>꽃은 일반적으로 매력적이고 향기롭다. 그러나 그 규칙에는 한 가지 예외가 있는데 바로 라플레시아다. 라플레시아는 진정한 잎, 뿌리, 줄기가 없는 식물이다. 그것은 오직 하나의 큰 빨간 꽃처럼 보인다. 최대 100cm, 최대 10kg까지 잴 수 있어 세계 최대 꽃 중 하나로 꼽힌다. 다른 덩굴에서 먹이를 먹기 때문에 기생충으로 간주된다. 이 꽃들은 썩은 고기처럼 생겼고 냄새가 나서 "시체 꽃" 또는 "고기 꽃"으로도 알려져 있다. 그것은 태국, 인도네시아, 필리핀의 열대우림에서 발견될 수 있다.
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
