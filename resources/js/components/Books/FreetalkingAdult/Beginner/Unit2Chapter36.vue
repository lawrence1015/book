<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://image.freepik.com/free-photo/senior-male-professor-standing-against-green-chalkboard_23-2148200952.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>As an English professor for over eight years, here are some recommendations for learning the language easily. First, expose yourself to English as often as possible. Read an article aloud every day. Make it a habit to read in English. It doesn't matter if it is a magazine, a book or the back of a cereal box. Second, try not to fear it. Of course, it is intimidating to learn a foreign language. It will look hard at first but trust me, the more you expose yourself to it, the easier it gets. Third, practice making sentences even when you are alone. As you wash the dishes, talk to yourself aloud in English. And finally, learn to have fun in it! Watch English comedy shows, movies and learn songs!
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



       <li style="list-style-type: none;"><u>Recommendation(n)</u> - suggestion or tips <span class = "korean">권고, 추천, 추천장[서]</span>
       </li>

       <li style="list-style-type: none;"><u>Expose(v)</u> - to experience often <span class = "korean">드러내다, 폭로하다, 노출시키다, 접하게[경험하게] 하다</span>
       </li>

       <li style="list-style-type: none;"><u>Fear(v)</u> - to be afraid of <span class = "korean">공포, 두려움, 무서움, 두려워[무서워]하다, 우려[염려]하다</span>
       </li>

       <li style="list-style-type: none;"><u>Intimidating(adj)</u> - causing fear, awe or a sense of being inadequate <span class = "korean">겁을 주는[겁나는]</span>
       </li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>To be a good artist, __________ yourself to many beautiful and inspiring things like nature and paintings.
  </li>

  <li>Do you ____ illness and death?
  </li>

  <li>I will write you a list of ____________ to help you lose weight faster.
  </li>

  <li>Talking to people of higher status like politicians is an ___________ experience.
  </li>


</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">


<ol style="margin: 12px;">
<li>Who is the writer of the reading?
</li>

<li>What is his first recommendation?
</li>

<li>What do you have to read often?
</li>

<li>When will English become easier to get?
</li>

<li>What is his third recommendation?
</li>

<li>How will you have fun in learning English?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>8년 이상 동안 영어 교수로서, 여기 영어를 쉽게 배울 수 있는 몇 가지 추천사항이 있다. 첫째, 가능한 한 자주 영어에 자신을 노출하라. 매일 큰 소리로 기사를 읽는다. 영어로 읽는 것을 습관화하라. 잡지든 책이든 시리얼 상자 뒷면이든 상관없다. 둘째, 두려워하지 않도록 노력하라. 물론 외국어를 배우는 것은 겁나는 것이다. 처음에는 어려워 보이겠지만, 날 믿어라, 당신이 더 많이 노출될수록, 더 쉬워질 것이다. 셋째, 혼자 있을 때도 문장을 만드는 연습을 한다. 설거지를 하면서 영어로 혼자 큰 소리로 말해라. 그리고 마지막으로, 재미있게 노는 법을 배워라! 영어 코미디 쇼와 영화를 보고 노래를 배워라!
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
