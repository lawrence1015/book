<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyZmyE00/4/screen_2x/canva-white-tealight-candles-lit-during-nighttime-MADGyZmyE00.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Science&amp;Religion</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you believe in God?
     </li>
     <br />
     <li class="mb-2">
       What religion do you have?
     </li>
     <br />
     <li class="mb-2">
       What benefits do you think religion gives us?
     </li>
     <br />
     <li class="mb-2">
        Do you think religious people are happier than the non-religious?
     </li>
     <br />
     <li class="mb-2">
       Do you think religion is for our current life of for our next one?
     </li>
     <br />
     <li class="mb-2">
       Do you think religion can solve our current problems?
     </li>
     <br />
     <li class="mb-2">
       Talk about the positive and the negative, aspects of religion.
     </li>
     <br />
     <li class="mb-2">
       Discuss the positive and negative effects of science.
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 신을 믿나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 어떤 종교를 가지고 있습니까?
     </li>
     <br />
     <li class="mb-2">
       종교가 우리에게 어떤 혜택을 준다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       당신은 종교인이 비종교인보다 더 행복하다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 종교가 우리의 현재 삶을 위한 것이라고 생각하나요 아니면 다음 삶을 위한 것이라고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 종교가 우리의 현재 문제를 해결할 수 있다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       종교의 긍정적인 면과 부정적인 면에 대해 이야기하세요.
     </li>
     <br />
     <li class="mb-2">
       과학의 긍정적인 효과와 부정적인 효과를 토론하세요.
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

.format{
  margin-top: 0px;
}

</style>
