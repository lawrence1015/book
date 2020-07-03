<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5Qi82Kg/1/screen_2x/canva-dumbells%2C-tape-measure%2C-vegetables-MADQ5Qi82Kg.jpg">

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
        padding-bottom: 10px;">Diet and Exercise</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What is a balanced diet? Give an example.<br />
       <br />
     </li>
     <li class="mb-2">
       What nutritious foods do you eat?
       <ul>
         <li class="mt-2">Talk about a healthy meal that you have eaten recently.</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do you eat any low-fat foods?
       <ul>
         <li class="mt-2">If so, what are they? If not, why not?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What fast foods do you eat?
       <ul>
         <li class="mt-2">Do you think fast foods are junk foods?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What is a vegetarian?
       <ul>
         <li class="mt-2">Name three reasons people are or become vegetarians.</li>
         <li>
           Do you think it is healthy to be a vegetarian?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       How can people lose weight and stay healthy?
       <ul>
         <li class="mt-2">Discuss your ideas about the perfect balancing of diet and exercise.</li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       균형 잡힌 식단은 무엇인가요? 예를 들어주세요.
     </li>
     <br />
     <li class="mb-2">
       어떤 영양가 있는 음식을 먹습니까?
       <ul>
       <li class="mt-2">최근에 드신 건강식에 대해 말씀해보세요.</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 저지방 음식을 먹나요?
       <ul>
       <li class="mt-2">만약 그렇다면, 그것들은 무엇인가요?</li>
       <li>그렇지 않다면, 왜 그러지 않나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 어떤 패스트푸드를 먹습니까?
      <ul>
       <li class="mt-2">패스트푸드가 정크푸드라고 생각하세요?</li>
     </ul>
   </li>
   <br />
   <li class="mb-2">
       채식주의자가 무엇인가요?
      <ul>
       <li class="mt-2">사람들이 채식주의자가 되거나 채식주의자가 되는 세 가지 이유를 말하세요.</li>
       <li>채식주의자가 되는 것이 건강하다고 생각하세요?</li>
     </ul>
   </li>
   <br />
   <li class="mb-2">
       어떻게 하면 살을 빼고 건강을 유지할 수 있을까요?
      <ul>
       <li class="mt-2">다이어트와 운동의 완벽한 균형에 대한 당신의 생각을 토론하세요.</li>
     </ul>
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

<style scoped lang="css">

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

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

</style>
