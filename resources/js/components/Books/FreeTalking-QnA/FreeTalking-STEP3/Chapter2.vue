<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyOMOmi8/4/screen_2x/canva-gray-plane-wing-under-white-clouds-MADGyOMOmi8.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Transportation Systems</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What kind of transportation do you use the most? Why?
     </li>
     <br />
     <li class="mb-2">
       What kinds of transportation did your native country have ten years ago?
     </li>
     <br />
     <li class="mb-2">
       Have you ridden in a subway?
       <ul>
       <li class="mt-2"> On a plane?</li>
       <li> In a train?</li>
       <li> On a bus?</li>
       <li> Talk about your experiences.</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       How do you think we can improve today's transportation systems?
     </li>
     <br />
     <li class="mb-2">
       Imagine what the world will be like in twenty years.
       <ul>
       <li class="mt-2"> What kinds of transportation do you think we might have?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 어떤 종류의 교통수단을 가장 많이 이용합니까? 그 이유는요?
     </li>
     <br />
     <li class="mb-2">
       당신의 조국은 10년 전에 어떤 종류의 교통수단을 가지고 있었나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 지하철을 타 본 적이 있습니까?
       <ul>
       <li class="mt-2">비행기는요?</li>
       <li>기차는요?</li>
       <li>버스는요?</li>
       <li>당신의 경험에 대해 이야기해보세요.</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       오늘날의 교통 시스템을 어떻게 개선할 수 있다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       20년 후 세상이 어떨지 상상해 보세요.
       <ul>
       <li class="mt-2">어떤 종류의 교통수단이 있을 것 같습니까?</li>
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
