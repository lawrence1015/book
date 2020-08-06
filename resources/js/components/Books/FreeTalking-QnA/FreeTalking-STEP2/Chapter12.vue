<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ40zODvs/1/screen_2x/canva-man-trying-to-break-into-a-car-MADQ40zODvs.jpg">

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
        padding-bottom: 10px;">Stealing</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Where do most criminals steal from? Name five places.<br />
       <br />
     </li>
     <li>
       What are five common things thieves steal?<br />
       <br />
     </li>
     <li>
       Talk about a time when a thief stole something from you. What happened? How did you feel? What did you do?<br />
       <br />
     </li>
     <li>
       Why do you think people steal?<br />
       <br />
     </li>
     <li>
       You are a judge, what punishment do you give for stealing? Why?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       대부분의 범죄자들은 어디서 훔치나요? 다섯 군데의 이름을 말하세요.
     </li>
     <br />
     <li class="mb-2">
       도둑들이 훔치는 5가지 흔한 것들은 무엇인가요?
     </li>
     <br />
     <li class="mb-2">
       도둑이 당신에게서 무언가를 훔쳤던 때를 이야기해보세요. 어떻게 된 거죠? 기분이 어땠어요? 당신은 무엇을 했었나요?
     </li>
     <br />
     <li class="mb-2">
       왜 사람들이 도둑질을 한다고 생각하세요?
     </li>
     <br>
     <li class="mb-2">
       당신은 판사입니다. 도둑질하면 어떤 벌을 줄 건가요? 왜죠?
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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}



body{

  font-size: 16px;
}

</style>
