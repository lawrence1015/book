<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADQ5RUoVbc/1/screen_2x/canva-untitled-MADQ5RUoVbc.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; margin-left: -18px; margin-right: -18px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
</h3>

<div style="padding : 16px;">

<p>Have you ever heard of the Galapagos Giant Turtle? It has been aptly named because it is indeed a giant! It is bigger than an adult dog! It lives in the Island of Galapagos. From a number of more than a hundred thousand, only 15,000 are said to exist now which made them to be considered as threatened species. For many years they have been eaten by humans and their eggs have been destroyed by rats and cats brought by humans to their island. These are the reasons why their number dwindled.
</p>

</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Aptly(adv)</u> - appropriate <span class = "korean">적절히</span>
</li>

<li style="list-style-type: none;"><u>Indeed(adv)</u> -  word to give emphasis; really <span class = "korean">정말[확실히], 정말[참으로]</span>
</li>

<li style="list-style-type: none;"><u>Threatened(adj)</u> -  likely to become extinct <span class = "korean">&lt;야생 동물의 종이&gt; 멸종할 위기에 직면한</span>
</li>

<li style="list-style-type: none;"><u>Exist(v)</u> -  to live <span class = "korean">존재[실재/현존]하다, 살아가다</span>
</li>

<li style="list-style-type: none;"><u>Dwindle(v)</u> - to decrease little by little <span class = "korean">줄어들다</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>This lotion is _________ priced! It's a little expensive but it's worth it!
  </li>

  <li>That is ________ a beautiful painting!
  </li>

  <li>What do you _________ for? Money or love?
  </li>

  <li>If we don't do something, the number of our clients will ___________.
  </li>

  <li>The Siberian Tiger is a __________ species. Only a few thousands are left.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is special about the Galapagos giant turtles?
</li>

<li>Where can they be found?
</li>

<li>Why are they considered endangered species?
</li>

<li>What caused their number to dwindle?
</li>

<li>How many are left now?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  
            margin-left: -18px; 
            margin-right: -18px;  
            padding-bottom: 10px;  
            padding-top: 10px; 
            padding-left: 10px; 
            background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">
<p>갈라파고스 거대 거북이에 대해 들어본 적이 있는가? 그것은 정말 거인이기 때문에 적절한 이름이 붙여졌다! 그것은 성견 보다 더 크다! 갈라파고스 섬에 산다. 10만 마리가 넘는 개체수에서 지금은 1만5000마리만이 존재한다고 알려져 있어 멸종위기에 처한 종으로 간주되고 있다. 수년 동안 그들은 인간에게 잡아 먹혔고 그들의 알은 인간이 그들의 섬으로 데려온 쥐와 고양이들에 의해 파괴되었다. 이들의 수가 줄어든 이유들이다.
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

li{


}

body{

  font-size: 16px;
}

</style>
