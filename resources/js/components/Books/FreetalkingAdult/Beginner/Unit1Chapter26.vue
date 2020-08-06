<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://marketplace.canva.com/MADGyJProsA/4/screen_2x/canva-man-showing-business-graph-on-wood-table-MADGyJProsA.jpg">

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
       padding-bottom: 10px;">Business</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   
                    padding-top : 10px;  
                    padding-left : 10px; 
                    padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
              <div style="padding : 16px;">

<p>Putting up a business is no joke. There are many things to consider. One of the most important considerations is the capital. It is the money one needs to start a business. Your profit or financial gain should be more than your capital or else you will be bankrupt and would need to close down. Advertisement and marketing should also be thought about. People should feel interested in visiting your shop and buying your products. Expenses such as electric bills, rental and employees' salary should all be settled with still enough profit. It is highly recommended that your business should be in line with your interests.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Put up(v)</u> -  to build <span class = "korean">보이다, 내놓다[제시하다], ~를 묵어가게 하다[재워 주다]</span>
</li>
 
<li style="list-style-type: none;"><u>Financial(adj)</u> -   connected with money <span class = "korean">금융[재정]의, 돈이 있는</span>
</li>

<li style="list-style-type: none;"><u>Bankrupt(adj)</u> -  unable to pay debts <span class = "korean">파산한, 결핍된, 파산자, 파산 선고를 받은 사람</span>
</li>

<li style="list-style-type: none;"><u>Expense(n)</u> -   money spent on something <span class = "korean">돈, 비용, 돈[비용]이 드는 일, 비용[경비], 경비</span>
</li>

<li style="list-style-type: none;"><u>Rental(n)</u> - rent payment <span class = "korean">사용료, 임대료, 임대, 임차, 대여</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li>Our landlady is very angry because we have not paid our apartment's ____________.
 </li>

 <li>He went __________ and had to close down his business.
 </li>

 <li>My total _________ for today's shopping is about two hundred dollars!
 </li>

 <li>When putting up a business, you should think about the __________ risks.
 </li>

 <li>Because you like fashion, you should __________ a clothing business.
 </li>


</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Why is putting up a business not a joke?
</li>

<li>What is capital?
</li>

<li>What is profit?
</li>

<li>Why should your profit be more than your capital?
</li>

<li>What should be settled with still enough profit?
</li>

<li>What is highly recommended in putting up a business?
</li>
</ol>
</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">
  <p>장사하는 것은 장난이 아니다. 고려해야 할 것이 많다. 가장 중요한 고려사항 중 하나는 자본이다. 창업에 필요한 돈이 바로 그 것이다. 당신의 이익이나 재정적인 이득은 당신의 자본보다 더 많아야 한다. 그렇지 않으면 당신은 파산할 것이고 문을 닫아야 할 것이다. 광고와 마케팅도 생각해야 한다. 사람들은 당신의 가게를 방문하고 당신의 제품을 사는 것에 흥미를 느껴야 한다. 전기요금, 임대료, 직원 월급 등 비용은 모두 충분한 수익으로 해결해야 한다. 당신의 사업은 당신의 이익에 부합하는 것을 강력히 추천한다.
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
