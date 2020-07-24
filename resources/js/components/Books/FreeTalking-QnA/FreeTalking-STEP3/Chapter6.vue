<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/U6vog/MAD80kU6vog/1/s2/canva-sick-little-girl-blowing-nose-with-tissue-lying-in-bed-MAD80kU6vog.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Disease</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you believe in faith healing?
     </li>
     <br />
     <li class="mb-2">
        How often do you have a cold?
        <ul>
        <li class="mt-2"> What do you do to cure it?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       What disease or ailment do you commonly have trouble with?
     </li>
     <br />
     <li class="mb-2">
       What do many people complain about concerning doctors?
     </li>
     <br />
     <li class="mb-2">
       Do you think cancer and AIDS will be conquered in the near future?
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 신앙치유를 믿나요?
     </li>
     <br />
     <li class="mb-2">
        당신은 얼마나 자주 감기에 걸리나요?
        <ul>
        <li class="mt-2">당신은 그것을 치료하기 위해 무엇을 합니까?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        어떤 질병이나 질병에 자주 문제가 있습니까? 
     </li>
     <br />
     <li class="mb-2">
       많은 사람들이 의사들에 대해 불평하는 것은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       여러분은 암과 에이즈가 가까운 미래에 정복될 것이라고 생각하나요?
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
