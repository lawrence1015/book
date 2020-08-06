<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="//live.staticflickr.com/297/31621437531_0a8d914296_k.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; margin-left: -18px; margin-right: -18px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
</h3>

<div style="padding : 16px;">

<p>Remarkable stories about animals are widespread all over the world. One of the most memorable is that of Hachiko. He is an Akita dog from Japan. Each afternoon, he would wait for his master named Professor Ueno to return home at a train station. However, one day his master died. Despite this, Hachiko kept going to the train station every day for nine years. His loyalty gained him the attention of the people in his country and of the world. Statues of Hachiko were built to remember his exceptional loyalty.
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Remarkable(adj)</u> -  something that should be noticed or praised <span class = "korean">놀랄 만한, 주목할 만한</span>
</li>

<li style="list-style-type: none;"><u>Widespread(adj)</u> -  popular <span class = "korean">광범위한, 널리 퍼진</span>
</li>

<li style="list-style-type: none;"><u>Gain(v)</u> -  to get <span class = "korean">하게[얻게] 되다, 얻다, 쌓다[늘리다]</span>
</li>

<li style="list-style-type: none;"><u>Statues(n)</u> -  stone or wood images <span class = "korean">조각상</span>
</li>

<li style="list-style-type: none;"><u>Loyalty(n)</u> - faithfulness; dedication to a person or thing <span class = "korean">충실, 충성, 충성심</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Most men proved their __________ by fighting for their country.
  </li>

  <li>This fashion style is __________ over Asia.
  </li>

  <li>Please help me ____________ good grades.
  </li>

  <li>We build ____________ to honor heroes who protected our country.
  </li>

  <li>That is a ____________ movie!  It is very, very good!
  </li>

</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<li style="list-style-type: none;">Who is Hachiko?
</li>

<li style="list-style-type: none;">What would he do every afternoon?
</li>

<li style="list-style-type: none;">What happened when his master dies?
</li>




</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">
<p>동물에 대한 놀라운 이야기들이 전세계에 널리 퍼져 있다. 그중 가장 기억에 남는 것은 하치코다. 
  그는 일본에서 온 아키타 개다. 매일 오후, 그는 우에노 교수라는 이름의 주인이 기차역에서 집으로 돌아오기를 기다리곤 했다. 
  그러나 어느 날 그의 주인이 죽었다. 그런데도 하치코는 9년 동안 매일 기차역에 계속 갔다. 
  그의 충성심은 그에게 조국과 세계의 이목을 집중시켰다. 하치코 동상은 그의 남다른 충성심을 기억하기 위해 세워졌다.
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
