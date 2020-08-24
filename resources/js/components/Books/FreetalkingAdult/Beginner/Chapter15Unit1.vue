<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv9u2Se0/7/screen_2x/canva-rhino-lying-on-ground-near-tree-MADGv9u2Se0.jpg">

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
        padding-bottom: 10px;">The Fauna</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Unfortunately, a lot of animal species are now on the verge of extinction.  The main reason of course are human activities like hunting and deforestation.  Many hunters kill animals for their meat and other body parts which are used for   commercial purposes like leather, fur and medicines. Conversion of forests and valleys into cities and buildings forces animals out of their habitats, causing them to die.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Fauna(n)</u> - all animal life<span class = "korean">동물상</span>
</li>

<li style="list-style-type: none;"><u>Species(n)</u> -  a group or kind of the same kind<span class = "korean">종</span>
</li>

<li style="list-style-type: none;"><u>Verge(n)</u> -  point; edge<span class = "korean">길가[도로변], 가장자리</span>
</li>

<li style="list-style-type: none;"><u>Extinction(n)</u> -  the process when related organisms die out<span class = "korean">멸종, 절멸, 소멸</span>
</li>

<li style="list-style-type: none;"><u>Deforestation(n)</u> - removing trees in an area<span class = "korean">삼림 벌채[파괴]</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>I'm not comfortable using __________ coats. I keep thinking about the animal who owned them!
  </li>

  <li>______________ makes many birds homeless.
  </li>

  <li>The _______________ of one animal group will cause the extinction of another.
  </li>

  <li>He was on the __________ of tears but he was holding them back.
  </li>

  <li>The human ___________ is said to be of the highest intelligence.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What does it mean when an animal is extinct?
</li>

<li>What is the main cause of animal extinction?
</li>

<li>Why are animals hunted?
</li>

<li>What does deforestation do?
</li>
</ol>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">

<p>불행히도 많은 동물 종들이 현재 멸종 위기에 처해 있다. 물론 주된 이유는 사냥과 삼림 벌채와 같은 인간의 활동 때문이다. 많은 사냥꾼들은 가죽, 털, 약과 같은 상업적인 목적으로 사용되는 고기와 다른 신체 부위를 위해 동물들을 죽인다. 숲과 계곡을 도시와 건물로 개조하면 동물들이 서식지에서 쫓겨나 죽게 된다.
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
