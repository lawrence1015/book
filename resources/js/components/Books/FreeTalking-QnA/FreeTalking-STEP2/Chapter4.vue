<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/LtYLM/MAD6oYLtYLM/1/s2/canva-therapist-giving-advice-MAD6oYLtYLM.jpg">

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
        padding-bottom: 10px;">Advice</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Can you give advice to your best friend?<br />
       <br />
     </li>
     <li>
       Can you listen to advice from your best friend?<br />
       <br />
     </li>
     <li>
       Is it easy to give and receive advice?<br />
       <br />
     </li>
     <li>
       What’s the best advice you have ever given to someone?<br />
       What’s the best advice anyone has ever given you?<br />
       <br />
     </li>
     <li>
       If someone asks you for advice, is it OK to tell a ‘white lie’ in order not to hurt him/her?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       가장 친한 친구에게 조언을 해줄 수 있나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 당신의 가장 친한 친구의 충고를 들을 수 있나요?
     </li>
     <br />
     <li class="mb-2">
       조언을 주고 받는 것이 쉬운가요?
     </li>
     <br />
     <li class="mb-2">
       당신이 누군가에게 해준 조언 중 가장 좋은 것은 무엇입니까?<br>
       지금까지 누가 당신에게 해 준 충고 중 가장 좋은 것은 무엇입니까?
     </li>
     <br>
     <li class="mb-2">
      누군가 당신에게 조언을 구한다면, 그에게 상처를 주지 않기 위해 '선의의 거짓말'을 해도 괜찮을까요?
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
