<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyFZXrtw/4/screen_2x/canva-woman-holding-baby-while-sitting-on-fur-bean-bag-MADGyFZXrtw.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Love</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you believe that the first love is bound to fail?
     </li>
     <br />
     <li class="mb-2">
       How often do you kiss and hug your children?
     </li>
     <br />
     <li class="mb-2">
       Is there any difference between Daddy’s love and Mama’s love?
     </li>
     <br />
     <li class="mb-2">
       Do you think you have to marry if you are in love?
     </li>
     <br />
     <li class="mb-2">
       Do you think platonic love can exist between a man and a woman?
       <ul>
       <li class="mt-2"> Do you have any personal experience?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 첫사랑이 반드시 실패한다고 믿나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 얼마나 자주 당신의 아이들에게 키스하고 포옹하나요?
     </li>
     <br />
     <li class="mb-2">
       아빠의 사랑과 엄마의 사랑에는 어떤 차이가 있나요?
     </li>
     <br />
     <li class="mb-2">
       사랑에 빠지면 꼭 결혼해야 한다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       당신은 플라토닉한 사랑이 남자와 여자 사이에 존재할 수 있다고 생각하나요?
       <ul>
       <li class="mt-2">개인적인 경험이 있습니까?</li>
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
