<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxnnI69s/4/screen_2x/canva-profile-of-man-photo-MADGxnnI69s.jpg">

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
        padding-bottom: 10px;">Optimism&amp;Pessimism</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Do you expect to live longer than the national average life expectancy?<br />
       <br />
     </li>
     <li>
       Do you believe you will make enough money so that after you retire you can continue to lead a comfortable life?<br />
       <br />
     </li>
     <li>
       Do you think Korea will be reunited in the near future?<br />
       <br />
     </li>
     <li>
       How do you describe yourself, as an optimist or a pessimist?<br />
       <br />
     </li>
     <li>
       What are the biggest advantages enjoyed by an optimist? By a pessimist?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 전국 평균 수명보다 더 오래 살 것으로 예상하나요?
     </li>
     <br />
     <li class="mb-2">
       여러분은 은퇴한 후에도 편안한 삶을 계속 살 수 있도록 충분한 돈을 벌 것이라고 믿나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 한국이 가까운 미래에 통일될 것이라고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       낙관론자 또는 비관론자로써 당신 자신을 어떻게 묘사합니까?
     </li>
     <br>
     <li class="mb-2">
      낙천주의자가 누리는 가장 큰 장점은 무엇입니까? 비관주의자가 누리는 가장 큰 장점은 무엇입니까?
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
