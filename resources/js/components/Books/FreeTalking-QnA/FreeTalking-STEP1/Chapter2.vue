<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADFFIeZRMc/1/screen_2x/canva-woman-at-art-exhibit-MADFFIeZRMc.jpg">

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
        padding-bottom: 10px;">Success and Happiness</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Who is the most successful person you know?<br />
       <br />
     </li>
     <li>
       What was the happiest time in your life?<br />
       <br />
     </li>
     <li>
      What does success mean for you?<br />
       <br />
     </li>
     <li>
       Does money equal happiness?<br />
       <br />
     </li>
     <li>
       What do you need to do to be successful?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신이 아는 가장 성공한 사람은 누구입니까?
     </li>
     <br />
     <li class="mb-2">
       당신의 인생에서 가장 행복했던 시간은 언제입니까?
     </li>
     <br />
     <li class="mb-2">
       성공이 당신에게 무엇을 의미합니까?
     </li>
     <br />
     <li class="mb-2">
      돈이 행복과 같습니까?
     </li>
     <br />
     <li class="mb-2">
       성공하기 위해 당신은 무엇을 해야 합니까?
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
