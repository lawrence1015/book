<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
   <div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://live.staticflickr.com/4020/4279449039_56a8a095e7_b.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; 
            margin-left: -18px; 
            margin-right: -18px; 
            padding-left: 10px; 
            margin-top: 10px; 
            padding-bottom: 10px; 
            margin-bottom: 12px;  
            padding-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
</h3>

<div style="padding : 16px;">

<p>What if you can travel through time but cannot control when to use it? This is Henry DeTamble's dilemma in the internationally acclaimed novel “The Time Traveler’s Wife.” He has a genetic disease that causes him to travel in time without his control. His wife has to endure his frequent absences which when happens mean he is thrust into the past or the future. Through all these, they have to strive to make their relationship work and prove their love to each other.  This novel was written   by Audrey Niffenegger in 2003 and was made into a film in 2009.
</p>


</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Dilemma(n)</u> - problem <span class = "korean">딜레마</span>
</li>

<li style="list-style-type: none;"><u>Acclaimed(adj)</u> -  received with praises <span class = "korean">칭찬을 받고 있는</span>
</li>

<li style="list-style-type: none;"><u>Genetic(adj)</u> -  passed on through families <span class = "korean">유전의; 유전학의</span>
</li>

<li style="list-style-type: none;"><u>Endure(v)</u> -  to experience hardships without giving up <span class = "korean">견디다, 참다, 인내하다</span>
</li>

<li style="list-style-type: none;"><u>Strive(v)</u> - to try hard <span class = "korean">분투하다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Like my mother, I also have blue eyes. It is __________.
  </li>

  <li>I cannot __________ this hear anymore! It is too hot!
  </li>

  <li>You must __________ to get good grades.
  </li>

  <li>The __________ athlete was applauded by many people.
  </li>

  <li>My biggest __________ right now is how to find a high-paying job.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What was Henry De Tamble’s dilemma?
</li>

<li>Who is he?
</li>

<li>What does his wife have to endure?
</li>

<li>What do they have to strive to do?
</li>

<li>What was the title of the novel and who wrote it?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">
  <p>만약 당신이 시간을 여행할 수는 있지만 언제 그것을 사용할지 조절할 수 없다면? 국제적으로 호평을 받은 소설 '시간 여행자의 아내'의 헨리 드탬블의 딜레마다. 그는 통제할 수 없이 시간 여행을 하게 하는 유전병이 있다. 그의 아내는 그가 자주 없는 것을 견뎌야 하는데, 그것은 그가 과거나 미래를 향해 돌진하는 것을 의미한다. 이 모든 것을 통해, 그들은 그들의 관계가 잘 풀리고 서로에 대한 사랑을 증명하기 위해 노력해야 한다. 이 소설은 2003년 오드리 니프제네거에 의해 쓰여졌고 2009년에 영화로 만들어졌다.</p>
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
