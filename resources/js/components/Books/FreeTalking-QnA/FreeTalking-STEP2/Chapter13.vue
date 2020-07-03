<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyRYNCh4/4/screen_2x/canva-person-hands-on-assorted-color-plastic-lid-lot-MADGyRYNCh4.jpg">

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
        padding-bottom: 10px;">Pollution and Recycling</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What are some things that are recycled in your country?<br />
       <br />
     </li>
     <li>
       Do you think people should be forced to recycle? Why or why not?<br />
       <br />
     </li>
     <li>
       What are five things that cause pollution? What can be done to eliminate pollution?<br />
       <br />
     </li>
     <li>
       What is carpooling? Why do most people drive alone instead of carpooling?<br />
       <br />
     </li>
     <li>
       How do you think we can make the earth a cleaner and better place in the future?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신의 나라에서는 어떤 것들이 재활용되나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 사람들이 재활용을 강요 받아야 한다고 생각하나요? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       오염을 일으키는 다섯 가지는 무엇인가요? 오염을 제거하기 위해 무엇을 할 수 있을까요?
     </li>
     <br />
     <li class="mb-2">
       카풀이란 무엇입니까? 왜 대부분의 사람들은 카풀 대신 혼자 운전하나요?
     </li>
     <br>
     <li class="mb-2">
       어떻게 하면 우리가 지구를 더 깨끗하고 좋은 곳으로 만들 수 있다고 생각하나요?
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
