<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://marketplace.canva.com/MADGvtDso2M/7/screen/canva-two-hanged-blue-stonewash-and-blue-jeans-MADGvtDso2M.jpg">

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
       padding-bottom: 10px;">Fashion</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
              <div style="padding : 16px;">

<p>Jeans are probably the most popular garment on the planet. Perhaps each person has at least a pair of jeans! The history of this iconic garment can be traced back to 1873 with the invention of Jacob Davis and Levi Strauss of the "blue jeans." These jeans use copper rivets to reinforce pocket corners. Originally designed for factory workers, miners and cowboys, these clothing eventually became popular among teenagers. In the 1950's, wearing jeans was a symbol of rebellion and they were often banned in theatres and restaurants. By the 1970's, it became an acceptable fashion in the US for casual wear.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Probably(adv)</u> -  likely, possibly <span style="font-size:16px">아마</span>
</li>

<li style="list-style-type: none;"><u>Garment(n)</u> -   clothing them <span style="font-size:16px">의복, 옷</span>
</li>

<li style="list-style-type: none;"><u>Iconic(adj)</u> -  famous <span style="font-size:16px">…의 상징[아이콘]이 되는, 우상의</span>
</li>

<li style="list-style-type: none;"><u>Rivet(n)</u> -   short metal fastener <span style="font-size:16px">대갈못, 리벳, 고정시키다[사로잡다], 대갈못[리벳]으로 고정하다</span>
</li>

<li style="list-style-type: none;"><u>Rebellion(n)</u> - opposition of authority <span style="font-size:16px">반란, 모반, 반대[저항], 반항</span>
</li>

<li style="list-style-type: none;"><u>Ban(v)</u> -   to stop <span style="font-size:16px">금하다, ~에게 ~을 금하다, 금지</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li> The airplane will __________ land this afternoon but I am not sure.
 </li>

 <li>The government officials __________ the import of China-made toys.
 </li>

 <li>Let's use __________ to attach these things together. They just keeping falling off!
 </li>

 <li>Gangnam Style has become ___________!
 </li>

 <li>These boutique sells high-quality ____________.
 </li>

 <li>The __________ was started to replace the president.
 </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>When was the blue jeans invented and by whom?
</li>

<li>What was special with the blue jeans?
</li>

<li>For whom were jeans originally designed for?
</li>

<li>How were jeans viewed in the 1950’s?
</li>
</ol>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

    <p>청바지는 아마도 지구상에서 가장 인기 있는 옷일 것이다. 아마도 각 사람은 적어도 한 벌의 청바지를 가지고 있을 것이다! 이 상징적인 의복의 역사는  제이콥 데이비스와 레비 스트라우스의 "청바지" 발명으로 1873년으로 거슬러 올라갈 수 있다. 이 청바지는 구리 리벳으로 주머니 모서리를 보강한다. 원래 공장 노동자, 광부, 카우보이들을 위해 디자인된 이 옷들은 결국 십대들 사이에서 인기를 끌었다. 1950년대에 청바지를 입는 것은 반란의 상징이었고 극장이나 식당에서는 종종 금지되었다. 1970년대까지 미국에서는 캐주얼한 옷차림으로 받아들여질 수 있는 패션이 되었다.
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
