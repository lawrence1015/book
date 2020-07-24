<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/S3z-k/MAD68dS3z-k/1/s2/canva-fireworks-display-during-night-time-MAD68dS3z-k.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Special Days</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       How do you celebrate New Year’s Day?
     </li>
     <br />
     <li class="mb-2">
       Did you make any New Year’s resolutions this year?
       <ul>
       <li class="mt-2"> What were they?</li>
       <li> Were you able to keep them?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       How do you celebrate your birthday?
     </li>
     <br />
     <li class="mb-2">
       How do you celebrate your wedding anniversary?
     </li>
     <br />
     <li class="mb-2">
       Do you think cash is an appropriate gift?
     </li>
     <br />
     <li class="mb-2">
       Do you think it’s okay to throw a luxurious party in an expensive restaurant for your child’s birthday?
     </li>
     <br />
     <li class="mb-2">
       What if your spouse forgot your birthday or wedding anniversary?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       여러분은 어떻게 새해를 기념하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 올해 새해 결심을 했나요?
       <ul>
       <li class="mt-2">뭐였나요?</li>
       <li>당신은 그것들을 지킬 수 있었나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신의 생일을 어떻게 축하하나요?
     </li>
     <br />
     <li class="mb-2">
       결혼기념일은 어떻게 기념하나요?
     </li>
     <br />
     <li class="mb-2">
       현금이 적절한 선물이라고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       아이의 생일을 맞아 비싼 레스토랑에서 호화로운 파티를 해도 괜찮을까요?
     </li>
     <br />
     <li class="mb-2">
      만약 당신의 배우자가 당신의 생일이나 결혼기념일을 잊어버렸다면 어떻게 할 건가요?
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
