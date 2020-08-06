<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyQD9iSI/4/screen_2x/canva-woman-sleeping-MADGyQD9iSI.jpg">

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
        padding-bottom: 10px;">Sleep</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What position do you usually sleep in?
       <ul>
         <li class="mt-2">How often do you sleep in that position?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       When you can't sleep, what kinds of things do you do?
       <ul>
         <li class="mt-2">Do you drink hot tea? </li>
         <li>
           How often do you do those things?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What are some unusual things people do in their sleep(scream, sleepwalk)?
       <ul>
         <li class="mt-2">Name three more. </li>
         <li>
           What unusual things do you do in your sleep?
         </li>
         <li>
           How often do you do them?
         </li>
         <li>
           How do you know?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What wakes you up in the morning?
       <ul>
         <li class="mt-2">Do you have an alarm clock?</li>
         <li>
           Have you ever overslept because you didn't hear your alarm clock ring?
         </li>
         <li>
           What happened?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Talk about a good dream that you have had recently.<br />
       <br />
     </li>
     <li class="mb-2">
       Talk about a nightmare that you have had recently.<br />
       <br />
     </li>
     <li class="mb-2">
       Do you believe that dreams come true? Why or why not?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 주로 어떤 자세로 자나요?
       <ul>
       <li class="mt-2">그런 자세로 얼마나 자주 주무세요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       잠을 잘 수 없을 때, 여러분은 어떤 종류의 일을 하나요?
       <ul>
       <li class="mt-2">당신은 뜨거운 차를 마시나요?</li>
       <li>얼마나 자주 그런 일들을 하시나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       사람들이 잠잘 때 하는 특이한 일들은 무엇인가요?
       <ul>
       <li class="mt-2">3개만 더 말씀해 주세요.</li>
       <li>당신은 잠잘 때 어떤 특이한 일을 하나요?</li>
       <li>얼마나 자주 하세요?</li>
       <li>어떻게 알아요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       아침에 무엇이 당신을 깨우나요?
       <ul>
       <li class="mt-2">자명종 있나요?</li>
       <li>자명종이 울리는 소리를 듣지 못해서 늦잠을 잔 적이 있나요?</li>
       <li>어떤 일이 있었던 거죠?</li>
       </ul>
   </li>
   <br />
   <li class="mb-2">
       당신이 최근에 꿨던 좋은 꿈에 대해 이야기하세요.
   </li>
   <br />
   <li class="mb-2">
      당신이 최근에 겪은 악몽에 대해 이야기하세요.
   </li>
   <br>
   <li class="mb-2">
      여러분은 꿈이 실현된다고 믿나요? 왜 그런가요, 아니면 왜 아닌가요?
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
