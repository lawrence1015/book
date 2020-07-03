<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQtksZ6Ts/2/screen_2x/canva-soldiers-running-in-the-desert-MADQtksZ6Ts.jpg">

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
        padding-bottom: 10px;">War and the Military</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Is military service voluntary or mandatory? (Do people enlist on their own, or are they drafted?)<br />
       <br />
     </li>
     <li>
       Do you think all countries need militaries? Explain.<br />
       <br />
     </li>
     <li>
       Were you or was anyone close to you serving in the military during the last major war in your country? Talk about it.<br />
       <br />
     </li>
     <li>
       What can soldiers do to help their country during peacetime?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       군복무는 자발적인 것입니까, 의무적인 것입니까? (사람들이 스스로 입대합니까, 아니면 징병되었습니까?)
     </li>
     <br />
     <li class="mb-2">
       당신은 모든 나라에 군대가 필요하다고 생각하나요? 설명해 주세요.
     </li>
     <br />
     <li class="mb-2">
       당신 또는 당신의 가까운 사람이 당신의 나라에서 일어난 마지막 주요 전쟁 동안 군대에서 복무한 적이 있나요? 그것에 대해 이야기하세요.
     </li>
     <br />
     <li class="mb-2">
       평화로운 시기에 군인들은 나라를 돕기 위해 무엇을 할 수 있을까요?
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
