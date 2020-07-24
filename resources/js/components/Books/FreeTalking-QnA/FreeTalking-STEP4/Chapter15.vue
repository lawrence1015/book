<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/9Fo8Y/MAD7Gb9Fo8Y/1/s2/canva-crop-businessman-giving-contract-to-woman-to-sign-MAD7Gb9Fo8Y.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Insurance</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Is your life insured?
       <ul>
       <li class="mt-2"> Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Are you insured against cancer?
       <ul>
       <li class="mt-2"> Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Is your car insured?
       <ul>
       <li class="mt-2"> Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Would you recommend life insurance for your spouse?
     </li>
     <br />
     <li class="mb-2">
       If you have insurance, did you buy it through a relative or friend; or did you buy it based entirely on your needs and perceived benefits?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       생명보험에 가입되어 있습니까?
       <ul>
       <li class="mt-2">왜 그런가요, 아니라면 왜 아닌가요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 암에 대한 보험에 가입되어 있습니까?
       <ul>
       <li class="mt-2">왜 그런가요, 아니면 왜 아닌가요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신의 차는 보험에 가입되어 있습니까?
       <ul>
       <li class="mt-2">왜 그런가요, 아니면 왜 아닌가요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       배우자에게 생명보험을 추천해 주시겠어요?
     </li>
     <br />
     <li class="mb-2">
       보험에 가입했다면 친척이나 친구를 통해 가입하셨나요, 아니면 전적으로 필요와 인지된 혜택에 근거해서 가입하셨나요?
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
