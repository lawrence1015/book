<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwMpOhLc/5/screen_2x/canva-man-wearing-black-officer-uniform-MADGwMpOhLc.jpg">

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
        padding-bottom: 10px;">Laws</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>As a cop, it is my obligation to implement the law in my country. Arresting and scolding people is a serious and stressful job but it should be done to keep peace and progress. The commonly broken laws are usually related to traffic. Some drivers do not follow the traffic lights and sometimes are over speeding. Some pedestrians are also stubborn! They cross inappropriate areas and do not follow the traffic lights too! It gets really risky, exciting and frightening if we are chasing robbers or criminals. So far, I haven't used my gun while on duty and I wish I never will.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">


<li style="list-style-type: none;"><u>Cop(n)</u> -  policeman <span class = "korean">경찰관, 겪다, 당하다, 주목하다, &lt;범인을&gt; 잡다, 포박하다</span>
</li>

<li style="list-style-type: none;"><u>Implement(v)</u> -   to put something into use or action <span class = "korean">시행하다, 도구[기구]</span>
</li>

<li style="list-style-type: none;"><u>Arrest(v)</u> -   to stop or take somebody into jail <span class = "korean">체포하다, 막다[저지하다]</span>
</li>

<li style="list-style-type: none;"><u>Scold(v)</u> -   to criticize <span class = "korean">야단치다[꾸짖다]</span>
</li>

<li style="list-style-type: none;"><u>Progress(n)</u> -  positive development <span class = "korean">진전; 진척[진행], 감[나아감], 진전을 보이다; 진행하다</span>
</li>

<li style="list-style-type: none;"><u>Pedestrian(n)</u> -  a person walking along a road or in a developed area. <span class = "korean">보행자, 보행자용의; 보행자의</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>A driver and a ____________ got into a fight because one of them disobeyed a traffic regulation.
  </li>

  <li>Billy wants to be a ___________ so he can protect innocent people.
  </li>

  <li>You are having much __________ in your English studies!
  </li>

  <li>The woman ____________ her naughty and noisy child.
  </li>

  <li>We have to ___________ you for breaking the traffic rules. We will take you to the local jail.
  </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Who is speaking in the article?
</li>

<li>What is his duty?
</li>

<li>Why should arresting and scolding of people be done?
</li>

<li>What are the commonly disobeyed rules?
</li>

<li>What are pedestrians’ common mistakes?
</li>

<li>When does it get risky?
</li>
</ol>
</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

  <p>경찰로서, 우리나라에서 법을 시행하는 것은 나의 의무다. 사람들을 체포하고 꾸짖는 것은 심각하고 스트레스가 많은 일이지만 평화와 발전을 위해 해야 한다. 일반적으로 위반되는 법률은 대개 교통과 관련이 있다. 일부 운전자들은 신호등을 따르지 않고 때때로 과속을 한다. 어떤 보행자들은 고집이 세기도 하다! 그들은 부적절한 지역을 횡단하고 신호등을 따르지 않는다! 만약 우리가 강도나 범죄자를 쫓는다면 그것은 정말 위험하고, 흥미진진하고, 무섭다. 지금까지 나는 근무 중에 총을 사용하지 않았고 절대 사용하지 않았으면 좋겠다.</p>

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
