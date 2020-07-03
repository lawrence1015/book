<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGvoTU9aU/7/screen_2x/canva-man-and-woman-sitting-on-brown-wooden-bench-MADGvoTU9aU.jpg">

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
        padding-bottom: 10px;">Retirement</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What plans do you have for your retirement?<br />
       <br />
     </li>
     <li>
       How are you preparing for your retirement?<br />
       <br />
     </li>
     <li>
       Do you want to live with your grown-up children when you retire? Or do you want to live with your spouse only? Or by yourself?<br />
       <br />
     </li>
     <li>
       Will you ask your children to give you money every month when you retire?<br />
       <br />
     </li>
     <li>
       What would you do if the retirement fund went bust in the future?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 은퇴를 위해 어떤 계획을 가지고 있나요?
     </li>
     <br />
     <li class="mb-2">
       은퇴 준비는 어떻게 하고 있나요?
     </li>
     <br />
     <li class="mb-2">
       은퇴할 때 다 큰 아이들과 함께 살고 싶나요? 아니면 배우자와만 살고 싶으신가요? 아니면 혼자서요?
     </li>
     <br />
     <li class="mb-2">
       당신은 은퇴할 때 아이들에게 매달 돈을 달라고 할 건가요?
     </li>
     <br>
     <li class="mb-2">
       만약 나중에 퇴직자금이 파산한다면 어떻게 하시겠어요?
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
