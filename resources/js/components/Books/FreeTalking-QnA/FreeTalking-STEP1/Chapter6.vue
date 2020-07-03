<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/Rh--A/MADyQzRh--A/1/s2/canva-happy-holidays-text-MADyQzRh--A.jpg">

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
        padding-bottom: 10px;">Holidays</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Name three holidays you think are the most important in your country.
       <ul>
         <li class="mt-2">Why are they important? </li>
         <li>
           How do you celebrate them?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do you think holidays are important? Why or Why not?<br />
       <br />
     </li>
     <li class="mb-2">
       When you were a child, what holiday did you like best? Why?<br />
       <br />
     </li>
     <li class="mb-2">
       What holidays have you celebrated recently?
       <ul>
         <li class="mt-2">How did you celebrate them?</li>
         <li>
           With whom did you celebrate?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Holiday time can be lonely for some people. 
       <ul>
         <li class="mt-2">What can you do to help lonely people during holiday seasons?</li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신의 나라에서 가장 중요하다고 생각하는 세 개의 휴일을 말하세요.
       <ul>
       <li class="mt-2">그것들이 왜 중요할까요?</li>
       <li>당신은 그들을 어떻게 축하하나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       여러분은 휴일이 중요하다고 생각하나요? 왜 그런가요?, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       어렸을 때 당신은 어떤 휴일을 가장 좋아했습니까? 그 이유는?
     </li>
     <br />
     <li class="mb-2">
       최근에 어떤 휴일들을 기념했나요?
      <ul>
       <li class="mt-2">그것들을 어떻게 축하했나요? </li>
       <li>당신은 누구와 함께 축하했나요?</li>
      </ul >
     </li>
     <br />
     <li class="mb-2">
       어떤 사람들에게는 휴일 시간이 외로울 수 있습니다.
      <ul>
       <li class="mt-2">여러분은 휴가철에 외로운 사람들을 돕기 위해 무엇을 할 수 있나요?</li>
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
