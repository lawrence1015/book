<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5PYIRao/1/screen_2x/canva-untitled-MADQ5PYIRao.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Studying English</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Why do you study English?
     </li>
     <br />
     <li class="mb-2">
       What is the most difficult thing in your English studies?
     </li>
     <br />
     <li class="mb-2">
       What do you think is the best way to study English?
     </li>
     <br />
     <li class="mb-2">
       What do you think about current English teaching methods in middle and high school?
     </li>
     <br />
     <li class="mb-2">
        Have you ever studied any other foreign language?
       <ul>
       <li class="mt-2"> What is the difference between it and English?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Which do you think is more difficult, speaking or writing English?
     </li>
     <br />
     <li class="mb-2">
       Have you ever written a letter or a diary in English?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 왜 영어를 공부합니까?
     </li>
     <br />
     <li class="mb-2">
       당신의 영어 공부에서 가장 어려운 것은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       영어를 공부하는 가장 좋은 방법은 무엇이라고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 현재의 중고등학교 영어 교수법에 대해 어떻게 생각하나요?
     </li>
     <br />
     <li class="mb-2">
        다른 외국어를 공부해 본 적이 있나요?
       <ul>
       <li class="mt-2">그것과 영어의 차이점은 무엇입니까?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 영어를 말하는 것과 쓰는 것 중 어느 것이 더 어렵다고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
       영어로 편지나 일기를 써본 적이 있나요?
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
