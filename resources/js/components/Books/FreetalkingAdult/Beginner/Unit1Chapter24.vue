 <template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5GcYz7I/1/screen_2x/canva-untitled-MADQ5GcYz7I.jpg">

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
        padding-bottom: 10px;">Personal Habits</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;  
                     padding-top : 10px;  
                     padding-left : 10px; 
                     padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Habits refer to the regularly repeated behavioral patterns. These may either be good or bad. In my case, my good habits would refer to my grooming and hygiene. I take a bath every day and brush my teeth after every meal. Every weekend, I also go hiking and jogging with my friends to keep my body fit. However, I have some bad habits too. I like to eat fatty and junk food such as cheese curls and burger. I often sleep late though. Sometimes I don't even sleep at all because I don't want to stop playing videogames!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Refer(v)</u> -  describes; relates to <span class = "korean">&lt;…을&gt; &lt;…에게&gt; 알아보도록 하다, 조회하다, &lt;서적 등을&gt; 참조하게 하다</span>
</li>

<li style="list-style-type: none;"><u>Pattern(n)</u> -   regular manner <span class = "korean">양식, 패턴, 모범, 귀감, 무늬, 본, 견본, 무늬를 만들다[이루다]</span>
</li>

<li style="list-style-type: none;"><u>Hygiene(n)</u> -  cleanliness <span class = "korean">위생</span>
</li>

<li style="list-style-type: none;"><u>Fit(adj)</u> -   in good health <span class = "korean">맞다, 가봉하다, 설치[설비]하다, 끼우다[맞추다], 적절하다[들어맞다];</span>
</li>

<li style="list-style-type: none;"><u>However(adv)</u> - but <span class = "korean">아무리 …해도, 하지만, 그러나</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Hygiene _______ to one's cleanliness.
  </li>

  <li>Exercise and right food will help you stay _________.
  </li>

  <li>My sleeping __________ changed after I got a new work schedule.
  </li>

  <li>It is important to have good __________ to look and smell nice.
  </li>

  <li>He likes her __________, they are still too young to be in a relationship.
  </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What are habits?
</li>

<li>What are the writer’s good habits?
</li>

<li>What does he do every weekend?
</li>

<li>What are his bad habits?
</li>

<li>Why doesn’t he sleep at all sometimes?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;" class = "korean">

  <p>습관은 규칙적으로 반복되는 행동 패턴을 가리킨다. 이것들은 좋거나 나쁘거나 둘 중 하나이다. 나의 경우, 나의 좋은 습관은 나의 몸치장과 위생을 가리킬 것이다. 매일 목욕을 하고 식사 후에는 이를 닦는다. 주말마다, 나는 내 몸을 건강하게 유지하기 위해 친구들과 하이킹과 조깅을 하러 간다. 하지만, 나는 나쁜 습관도 있다. 나는 치즈 컬이나 버거와 같은 기름지고 정크 푸드를 먹는 것을 좋아한다. 하지만 나는 종종 늦게 잔다. 가끔 나는 비디오 게임을 그만하고 싶지 않아서 잠을 전혀 자지 않는다!
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
