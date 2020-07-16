<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://marketplace.canva.com/MADGyPfFJfc/4/screen_2x/canva-fire-fighter-wearing-black-and-yellow-uniform-pointing-for-something-MADGyPfFJfc.jpg">

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
       padding-bottom: 10px;">Rights and Duties</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
         </h3>
              <div style="padding : 16px;">

<p>Every person has rights and obligations. Rights mean the things that you are entitled to. It is your freedom to do or have something. For example, everybody has the right to go to school, to possess things, to get a job and be treated fairly. On the other hand, obligations mean the things that a person should do. It is one's duty or responsibility. For example, it is a citizen's obligation to obey the rules of his nation and to serve his countrymen. It is truly sad that most people enjoy exercising their rights but often forget their obligations.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Entitled(v)</u> -  the right to have or do something <span style="font-size:16px">~라는 제목의</span>
</li>

<li style="list-style-type: none;"><u>Possess(v)</u> -   to own <span style="font-size:16px">소유[소지/보유]하다, 지니다[갖추고 있다], 사로잡다[지배하다]</span>
</li>

<li style="list-style-type: none;"><u>Treat(v)</u> -  to behave towards somebody in a particular way <span style="font-size:16px">다루다, 여기다, 치부하다</span>
</li>

<li style="list-style-type: none;"><u>Fairly(adv)</u> -   honestly <span style="font-size:16px">상당히, 꽤, 공정[타당]하게; 정직하게, 정말</span>
</li>

<li style="list-style-type: none;"><u>Obey(v)</u> - to follow <span style="font-size:16px">시키는 대로 하다, 따르다[지키다], 순종[복종]하다</span>
</li>

<li style="list-style-type: none;"><u>Countrymen(n)</u> -  people from the same nation <span style="font-size:16px">동포 , 같은 나라 사람, 시골 남자</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li>Most of my __________ support our new president.
 </li>

 <li>In the past, women were not allowed to ___________ anything.
 </li>

 <li>The winner was determined ___________ by the judges.
 </li>

 <li>Children should learn to ____________ their parents.
 </li>

 <li>You are _____________ to a one year scholarship at the English High School!
 </li>

 <li>Please ____________ your younger brothers and sisters nicely.
 </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is the reading about?
</li>

<li>What are rights?
</li>

<li>What are obligations?
</li>

<li>What are the two mentioned obligations of a citizen?
</li>

<li>What is the writer sad about?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

  <p>모든 사람은 권리와 의무가 있다. 권리는 당신이 자격이 있다는 것들을 의미한다. 무언가를 하거나 가지는 것은 너의 자유다. 예를 들어, 모든 사람은 학교에 갈 권리가 있고, 물건을 소유할 권리가 있으며, 직업을 얻고, 공정하게 대우받을 권리가 있다. 반면에 의무는 사람이 해야 할 일을 의미한다. 그것은 자신의 의무나 책임이다. 예를 들어, 조국의 규칙을 따르고 조국을 섬기는 것은 시민의 의무다. 대부분의 사람들이 권리를 행사하는 것을 즐기지만 종종 의무를 잊는다는 것은 정말 슬픈 일이다.
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
