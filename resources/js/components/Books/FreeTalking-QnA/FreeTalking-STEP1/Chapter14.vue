<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ488f75c/1/screen_2x/canva-hand-holding-four-leaf-clover-MADQ488f75c.jpg">

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
        padding-bottom: 10px;">Superstitions</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Some people in the United States think a four-leaf clover is "lucky."
       <ul>
         <li class="mt-2">What do you think are lucky things in your country?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Many people in the United States believe if you walk under a ladder, you will have bad luck. <br />
       <ul>
         <li class="mt-2">In your country, what things do people believe to bring bad luck?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Some people in the United States believe when the 13th day of the month is on a Friday it is an unlucky day.
       <ul>
         <li class="mt-2">What numbers bring bad luck in your country?</li>
         <li>
           Are there any days, months, or years that are unlucky in your country?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do you believe in superstitions? Why or why not?<br />
       <br />
     </li>
     <li class="mb-2">
       Have you ever had a superstition come true? Talk about your experience.
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       미국의 몇몇 사람들은 네 잎 클로버가 "행운"라고 생각합니다.
       <ul>
       <li class="mt-2">너희 나라에서는 무엇이 행운이라고 생각하니?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       미국의 많은 사람들은 당신이 사다리 아래로 걸어가면, 운이 나쁠 것이라고 믿습니다.
       <ul>
       <li class="mt-2">너희 나라에서는 사람들이 불운을 가져온다고 믿는 것이 무엇이니?</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       미국의 어떤 사람들은 그 달의 13일이 금요일에 있을 때 불길한 날이라고 믿습니다.
       <ul>
       <li class="mt-2">당신 나라에서는 어떤 숫자가 불운을 가져오나요?</li>
       <li>당신의 나라에는 불운한 날, 달, 혹은 해가 있나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       미신을 믿으세요? 왜 믿나요, 아니면 왜 안믿나요?
   </li>
   <br />
   <li class="mb-2">
    미신이 실현된 적이 있는가? 네 경험에 대해 말해봐.
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
