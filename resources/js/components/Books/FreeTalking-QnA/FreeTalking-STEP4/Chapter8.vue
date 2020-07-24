<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGx44SSKM/4/screen_2x/canva-six-20-pound-euro-MADGx44SSKM.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Money</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       How does money make you happy?
     </li>
     <br />
     <li class="mb-2">
       How powerful do you think money is?
     </li>
     <br />
     <li class="mb-2">
       Do you think money can buy love?
     </li>
     <br />
     <li class="mb-2">
       Who takes care of the money in your family?
       <ul>
      <li class="mt-2"> You or your spouse?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       How many credit cards do you have?
     </li>
     <br />
     <li class="mb-2">
       Do you think a credit card is convenient?
       <ul>
      <li class="mt-2"> Or does it just encourage extra spending?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Have you ever gotten a loan from a bank?
       <ul>
      <li class="mt-2"> Was it hard or easy?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Would you take a friend to court if you couldn’t get your money back?
     </li>
     <br />
     <li class="mb-2">
       Have you ever lost a large amount of cash?
       <ul>
      <li class="mt-2"> Did you get it back?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       돈이 당신을 어떻게 행복하게 만드나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 돈이 얼마나 강력하다고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
       돈으로 사랑을 살 수 있다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       당신의 가족 중 누가 돈을 관리하나요?
       <ul>
      <li class="mt-2">당신인가요 아니면 당신의 배우자인가요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       신용카드는 몇 장이나 가지고 있습니까?
     </li>
     <br />
     <li class="mb-2">
       신용카드가 편리하다고 생각하세요?
       <ul>
      <li class="mt-2">아니면 단순히 추가 지출을 장려하는 것일까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       은행에서 대출을 받은 적이 있습니까?
       <ul>
      <li class="mt-2">그것은 힘들었나요, 쉬웠나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       돈을 돌려받을 수 없다면 친구를 법정에 세우겠어요?
     </li>
     <br />
     <li class="mb-2">
       당신은 많은 양의 현금을 잃어버린 적이 있나요?
       <ul>
      <li class="mt-2">돌려받았나요?</li>
       </ul>
     </li>
   </ol>



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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
