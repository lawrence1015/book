<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxupGy9c/4/screen_2x/canva-success-text-MADGxupGy9c.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Success</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What is success?
       <ul>
       <li class="mt-2"> What are five ways a person can be successful?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you achieved any goals you have made for yourself?
        <ul>
        <li class="mt-2"> If so, which ones? If not, why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        How is success generally defined in your country?
        <ul>
        <li class="mt-2"> Name a world renowned successful person from your country. Why is that person so successful?</li>
        <li> What do you think that person must have done to become so successful?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
         Do you believe people must work hard to become successful? Why or why not?
     </li>
     <br />
     <li class="mb-2">
        What type of success do you think you might have in the future?
        <ul>
        <li class="mt-2"> How will you prepare for it?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       성공이란 무엇일까요?
       <ul>
       <li class="mt-2">사람이 성공할 수 있는 다섯 가지 방법은 무엇입니까?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        당신은 스스로 세운 목표를 달성했나요?
        <ul>
        <li class="mt-2">만약 그렇다면, 어떤 것인가요? 그렇지 않다면, 왜 그렇지 않았나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        당신의 나라에서는 일반적으로 성공이 어떻게 정의되나요?
        <ul>
        <li class="mt-2">당신의 나라에서 세계적으로 유명한 성공한 사람을 말하세요. 그 사람은 왜 그렇게 성공한 거죠?</li>
        <li>당신은 그 사람이 그렇게 성공하기 위해 무엇을 했을 거라고 생각하나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        여러분은 사람들이 성공하기 위해 열심히 일해야 한다고 믿나요? 왜 그런가요, 아니라면 왜 아닐까요?
     </li>
     <br />
     <li class="mb-2">
        당신은 미래에 어떤 종류의 성공을 거두게 될 것이라고 생각합니까?
        <ul>
        <li class="mt-2">어떻게 준비하실 건가요?</li>
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
