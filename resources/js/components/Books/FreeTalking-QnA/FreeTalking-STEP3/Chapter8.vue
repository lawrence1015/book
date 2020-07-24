<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/RKUBw/MADwT_RKUBw/1/s2/canva-photo-of-man-laying-on-sidewalk-MADwT_RKUBw.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">The Homeless and Welfare</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        사람들이 노숙자가 되는 몇 가지 이유를 말해보세요.
     </li>
     <br />
     <li class="mb-2">
        길거리에서 노숙자들을 본 적이 있나요?
        <ul>
        <li class="mt-2">당신은 그들을 보면 무엇을 하나요?</li>
        <li>노숙자에게 무언가를 준 적이 있나요? 무엇을 주었나요? 왜요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         노숙자를 돕는 가장 좋은 방법이 뭐라고 생각하세요? 예를 들어 보세요.
     </li>
     <br />
     <li class="mb-2">
         당신 나라에는 노숙자가 있습니까?
        <ul>
        <li class="mt-2">정부는 그들을 돕기 위해 무엇을 하나요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       만약 당신이 당신의 나라의 대통령이나 지도자라면, 당신은 가난을 어떻게 끝낼 것입니까?
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
