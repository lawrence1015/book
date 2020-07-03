<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5OJhKqQ/1/screen_2x/canva-stock-market-graph-on-laptop-MADQ5OJhKqQ.jpg">

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
        padding-bottom: 10px;">Stock Market</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Why do many people invest when markets are erratic?<br />
       <br />
     </li>
     <li>
       Do you own stock? Do you plan on buying any? Why or why not?<br />
       <br />
     </li>
     <li>
       Why do some people sell their stock for less money than they paid for it?<br />
       <br />
     </li>
     <li>
       What is your opinion of people who never invest?<br />
       <br />
     </li>
     <li>
       Is it possible to buy stocks that are guaranteed to make money?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       시장이 불규칙한데 왜 많은 사람들이 투자를 하나요?
     </li>
     <br />
     <li class="mb-2">
       주식 있으세요? 당신은 살 계획이 있나요? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       왜 어떤 사람들은 그들이 지불한 것보다 더 적은 돈으로 주식을 팔까요?
     </li>
     <br />
     <li class="mb-2">
       투자하지 않는 사람들에 대한 당신의 의견은 어떻습니까?
   </li>
   <br />
   <li class="mb-2">
       돈벌이가 보장된 주식을 살 수 있나요?
   </li>
   </ol>

</div>


       </v-layout>
     </v-container>
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

li{


}

body{

  font-size: 16px;
}

</style>
