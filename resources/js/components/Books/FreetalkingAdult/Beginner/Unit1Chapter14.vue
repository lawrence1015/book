<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxz0laFQ/4/screen_2x/canva-2-peacock-butterflies-perched-on-yellow-flower-in-close-up-photography-during-daytime-MADGxz0laFQ.jpg">

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
        padding-bottom: 10px;">Nature</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Nature refers to the physical environment around us including the animals and plants. The word "nature"	is derived from the Latin word "natura" which means "essential qualities." Earth, the planet where we live in is the only one known to human knowledge to support life. It has the perfect conditions such as mineral composition and temperature to nurture the natural world as we know it now. From the mountains to the sea, we are enjoying the gifts of Nature so we must take care of it too!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Physical(adj)</u> - having substance or material existence <span class = "korean">육체[신체]의, 물질의</span>
</li>

<li style="list-style-type: none;"><u>Derive(v)</u> -  come from <span class = "korean">끌어내다, 얻다</span>
</li>

<li style="list-style-type: none;"><u>Mineral(n)</u> -  solid homogenous inorganic substances occurring in nature having a definite chemical composition <span class = "korean">광물; 무기물, 미네랄</span>
</li>

<li style="list-style-type: none;"><u>Composition(n)</u> -  something that is created by arranging several things to form a unified whole <span class = "korean">구성 요소들; 구성</span>
</li>

<li style="list-style-type: none;"><u>Nurture(v)</u> - help develop, help grow <span class = "korean">육성[양성]하다, 키우다</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li> _____________ beauty is only temporary.  What is important is the inner beauty.
  </li>

  <li>My mother _________ my abilities and talents.
  </li>

  <li>Diamond is the hardest and most beautiful ____________.
  </li>

  <li>The _______________ of the school population includes students of all ages.
  </li>

  <li>The graduation toga is actually _________ from the clothes of ancient Romans.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is nature?
</li>

<li>Where was the term derived from?
</li>

<li>What is so special about the planet Earth?
</li>

<li>How is it able to support life?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">
  <p>자연은 동식물을 포함한 우리 주변의 물리적 환경을 가리킨다. 
     자연이란 말은 본질적인 자질을 뜻하는 라틴어 '나투라(natura)'에서 유래한 말이다. 
     우리가 살고 있는 행성인 지구는 인간의 지식으로 알려진 유일한 생명체다. 
     광물 구성과 온도 등 완벽한 조건을 갖춰 우리가 지금 알고 있는 자연계를 육성한다. 
     산부터 바다까지, 우리는 자연의 선물을 즐기고 있으니 우리도 그것을 돌봐야 해!
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
