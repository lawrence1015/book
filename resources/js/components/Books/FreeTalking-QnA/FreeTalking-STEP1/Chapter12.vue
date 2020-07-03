<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyC3w9Kg/4/screen_2x/canva-man-wearing-black-denim-jacket-in-driver%27s-seat-MADGyC3w9Kg.jpg">

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
        padding-bottom: 10px;">Cars</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Do you usually fill up when you drop by a gas station?<br />
       <br />
     </li>
     <li>
       Who do you think ought to wash your family car?<br />
       <br />
     </li>
     <li>
       When did you get your driver’s license? Was it difficult?<br />
       <br />
     </li>
     <li>
       What do you think about driving a used car?<br />
       <br />
     </li>
     <li>
       What are the advantages of buying a used car?<br />
       <br />
     </li>
     <li>
       How long did you practice before you actually drove a car on the road by yourself?<br />
       <br />
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       주유소에 들르면 보통 주유를 하시나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 누가 당신의 가족용 차를 세차해야 한다고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
       운전면허는 언제 땄나요? 어려웠나요?
     </li>
     <br />
     <li class="mb-2">
       중고차를 운전하는 것에 대해 어떻게 생각하세요?
   </li>
   <br />
   <li class="mb-2">
       중고차를 살 때의 이점은 무엇입니까?
   </li>
   <br />
   <li class="mb-2">
       실제로 혼자서 도로에서 차를 운전하기 전에 얼마나 연습했나요?
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

<style lang="css">

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

</style>
