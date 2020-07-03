<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGx9Gy8EE/4/screen_2x/canva-people-on-the-beach-photography-MADGx9Gy8EE.jpg">

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
        padding-bottom: 10px;">Vacation</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Where do you most want to go?<br />
       <br />
     </li>
     <li>
       In the summer, which place do you prefer-the mountains or the sea?<br />
       <br />
     </li>
     <li>
       What do you think about visiting the seaside in winter?<br />
       <br />
     </li>
     <li>
        Would you say "yes" if your boss asked you to sacrifice your vacation? "Work comes first," doesn't it?<br />
       <br />
     </li>
     <li>
       Describe your ideal vacation.
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 어디를 가장 가고 싶습니까?
     </li>
     <br />
     <li class="mb-2">
       여름에는 산과 바다 중 어느 곳을 더 좋아하세요?
     </li>
     <br />
     <li class="mb-2">
       겨울에 바닷가를 방문하는 것에 대해 어떻게 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       만약 당신의 상사가 당신에게 휴가를 희생하라고 한다면 당신은 "그렇다"고 말할 건가요? "일이 먼저죠" 안 그래요?
     </li>
     <br>
     <li class="mb-2">
       당신의 이상적인 휴가에 대해 설명하세요.
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
