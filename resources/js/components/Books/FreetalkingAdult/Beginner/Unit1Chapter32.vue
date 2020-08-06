<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://marketplace.canva.com/MADGxlHYldY/4/screen_2x/canva-hand-of-an-elderly-holding-hand-of-younger-MADGxlHYldY.jpg">

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
       padding-bottom: 10px;">Culture</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
              <div style="padding : 16px;">

<p>A lot of comparisons have been made about Eastern versus Western culture. The most popular notion would be about Asian's being more polite and respectful, especially to their elders opposite to Westerners being rude and arrogant. Eastern culture is about close family ties while Western focuses on individualism. When it comes to feelings and opinions, Western people are frank so they are considered rude. They say what's on their mind. On the contrary, Asians are courteous so they will say "yes" even if they mean "no."
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Comparison(n)</u> -  finding similarities and differences <span class = "korean">비교함, 비교, 비유</span>
</li>

<li style="list-style-type: none;"><u>Versus(n)</u> -   against <span class = "korean">…대, …에 비해[…와 대조적으로]</span>
</li>

<li style="list-style-type: none;"><u>Tie(n)</u> -  relationship or connection <span class = "korean">묶다, 묶어 두다[놓다], 달다</span>
</li>

<li style="list-style-type: none;"><u>Individualism(n)</u> -   the self; personal goals <span class = "korean">개성, 개인주의</span>
</li>

<li style="list-style-type: none;"><u>Frank(adj)</u> - direct <span class = "korean">솔직한[노골적인], 숨김 없는;</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li>__________ people may hurt others’ feelings because of their directness.
 </li>

 <li>There will be a game with Miami ____________ Boston later this evening.
 </li>

 <li>My boyfriend and I have such deep emotional __________.
 </li>

 <li>It feels bad when people keep making ____________ between two sisters.
 </li>

 <li>Because each person is unique, we also have to accept the existence of _____________.
 </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is the most common idea about Eastern and Western culture?
</li>

<li>What are the two cultures about?
</li>

<li>Why are Westerners considered rude?
</li>

<li>Why are Asians considered courteous?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

  <p>동양과 서양의 문화에 대해 많은 비교가 이루어졌다. 가장 대중적인 생각은 서양인들이 무례하고 오만하다는 것에 반대되어 동양인들이 어른들에게 더 공손하고 공손하게 대한다는 것이다. 동양의 문화는 가족간의 긴밀한 유대에 관한 것이고 서양의 문화는 개인주의에 초점을 맞춘다. 감정과 의견에 관한 한 서양 사람들은 솔직해서 무례하다고 여겨진다. 그들은 마음에 걸리는 것을 말한다. 반대로 아시아인들은 예의가 바르다 보니 '아니오'라는 의도가 있어도 '네'라고 말할 것이다.
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
