<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxgHKuwk/4/screen_2x/canva-red-fire-extinguisher-beside-hose-reel-inside-the-room-MADGxgHKuwk.jpg">

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
        padding-bottom: 10px;">Emergency</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Are you willing and able to help people in an emergency?<br />
       <br />
     </li>
     <li class="mb-2">
       If you saw someone being mugged, would you risk your life to help?<br />
       <br />
     </li>
     <li class="mb-2">
       How could you prepare for a possible earthquake?<br />
       <br />
     </li>
     <li class="mb-2">
       Have you ever called the fire department? 
       <ul>
         <li class="mt-2">The police department?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       If you had a flat tire on the road, what would you do?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 위급한 상황에 처한 사람들을 도울 의지와 능력이 있습니까?
     </li>
     <br />
     <li class="mb-2">
       만약 누군가가 강도를 당하는 것을 보았다면, 당신은 목숨을 걸고 돕겠습니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 어떻게 지진에 대비할 수 있습니까?
     </li>
     <br />
     <li class="mb-2">
       소방서에 전화한 적 있나요?
       <ul>
       <li class="mt-2">경찰서는요?</li>
       </ul>
   </li>
   <br />
   <li class="mb-2">
       만약 당신이 길에 타이어가 펑크 났다면 어떻게 하겠습니까?
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
