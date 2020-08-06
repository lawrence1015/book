<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://live.staticflickr.com/5250/5274270428_c4dff8b634_b.jpg">

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
        padding-bottom: 10px;">Time Travel</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   
                     padding-top : 10px;  
                     padding-left : 10px; 
                     padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>One of the most unforgettable science fiction movies would be “Back to the Future” which was released   in 1985. It tells the story of Marty McFly who, with the help of a scientist friend can travel through time.  To the future, the past, or the present, Marty can reach by riding a modified DeLorean car. His adventure started when he accidentally travelled to the past and attracted his teenage mother who was still in high school! His mission was to make her fall in love with his father and repair his damage to history.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Fiction(n)</u> - work of imagination <span class = "korean">소설, 허구</span>
</li>

<li style="list-style-type: none;"><u>Modified(adj)</u> -  changed <span class = "korean">완화된, 한정된, 수정된</span>
</li>

<li style="list-style-type: none;"><u>Adventure(n)</u> -   exciting experience <span class = "korean">모험, 모험심</span>
</li>

<li style="list-style-type: none;"><u>Mission(n)</u> -  assigned task <span class = "korean">임무, 사절단[파견단];</span>
</li>

<li style="list-style-type: none;"><u>Repair(v)</u> - to fix <span class = "korean">수리[보수/수선]하다, 바로잡다, 수리, 보수, 수선손상, 피해, 훼손, 악영향</span>
</li>

<li style="list-style-type: none;"><u>Damage(n)</u> - harm or injury <span class = "korean">손상, 피해, 훼손, 악영향</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The car’s _________ was caused by a minor road accident.
  </li>

  <li>This story is not real. It is just a __________.
  </li>

  <li>We _________ the dance to make it nicer.
  </li>

  <li>Our family will tour Europe soon. It will be an __________!
  </li>

  <li>The soldiers’ _________ is to help the typhoon victims.
  </li>

  <li>Can you ________ my computer? It is not working well!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What was the article about?
</li>

<li>When was this movie released?
</li>

<li>What was the movie about?
</li>

<li>What did Marty use to travel through time?
</li>

<li>What started his adventure?
</li>

<li>What was his mission?
</li>
</ol>



</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

  <p>가장 잊을 수 없는 공상과학 영화 중 하나는 1985년에 개봉된 "백 투 더 퓨처"일 것이다. 이 영화는 과학자 친구의 도움으로 시간을 여행할 수 있는 마티 맥플라이에 대한 이야기를 들려준다. 미래, 과거, 또는 현재를 향해 마티는 개조된 델로레아 자동차를 타고 도달할 수 있다. 그의 모험은 그가 우연히 과거로 여행을 가서 아직 고등학교에 다니던 10대 어머니를 끌어들였을 때 시작되었다! 그의 임무는 그녀가 그의 아버지와 사랑에 빠지도록 만들고 그의 이력을 회복시키는 것이었다.
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
