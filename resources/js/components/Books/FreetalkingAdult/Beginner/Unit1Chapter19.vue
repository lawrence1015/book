<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwOByWL4/5/screen_2x/canva-girl-lying-on-white-surface-petting-gray-rabbit-MADGwOByWL4.jpg">

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
        padding-bottom: 10px;">Pets</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Pets are companion animals. Humans keep them for friendship rather than for economic reasons. Most people's consideration for choosing pets are attractiveness and playfulness. For instance, many people like to keep cute and cuddly animals as friends. Some people like to keep active pets. The two most common domestic companions are of course the cat and the dog. However, some people like to keep exotic pets like snakes or spiders.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Companion(n)</u> -  something or someone who stays close <span class = "korean">동반자, 동행, 친구[벗]</span>
</li>

<li style="list-style-type: none;"><u>Economic(adj)</u> -  refers to money and economy <span class = "korean">경제의, 경제성이 있는</span>
</li>

<li style="list-style-type: none;"><u>Cuddly(adj)</u> -   nice to hug <span class = "korean">꼭 껴안고 싶은, 껴안을 수 있게 만든</span>
</li>

<li style="list-style-type: none;"><u>Domestic(adj)</u> -  near or about human homes <span class = "korean">국내의, 가정의, 집안의</span>
</li>

<li style="list-style-type: none;"><u>Exotic(adj)</u> - unusual and interesting, usually because it comes from or is related to a distant country <span class = "korean">외국의; 이국적인</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Who will be your __________ in your winter trip to Europe?
  </li>

  <li>Fried bats and ant soup are _________ food.
  </li>

  <li>My _____________ work includes cooking and washing the dishes.
  </li>

  <li>This teddy bear looks very, very ___________.
  </li>

  <li>The _____________ status of our country is good. There are a lot of businesses and jobs.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<li style="list-style-type: none;">What are pets?
</li>

<li style="list-style-type: none;">Why do humans keep them?
</li>

<li style="list-style-type: none;">What are people’s considerations in choosing pets?
</li>

<li style="list-style-type: none;">What are the two most common pets?
</li>

<li style="list-style-type: none;">What are examples of exotic pets?
</li>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

<p>
  애완동물은 반려동물이다. 인간들은 경제적인 이유보다는 우정을 위해 그것들을 키운다. 
  대부분의 사람들이 애완동물을 고를 때 고려하는 것은 매력과 장난기다. 
  예를 들어, 많은 사람들은 귀엽고 껴안고 싶은 동물들을 친구로 키우는 것을 좋아한다. 
  어떤 사람들은 활동적인 애완동물을 기르는 것을 좋아한다. 가장 흔한 두 가족 동반자는 물론 고양이와 개다. 
  하지만 어떤 사람들은 뱀이나 거미와 같은 이국적인 애완동물을 기르는 것을 좋아한다.
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
