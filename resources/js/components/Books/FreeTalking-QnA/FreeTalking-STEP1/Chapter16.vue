<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5LOjAnU/1/screen_2x/canva-pinocchio-toy-face-MADQ5LOjAnU.jpg">

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
        padding-bottom: 10px;">Conscience</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
      Does your conscience bother you if you lie?<br />
       <br />
     </li>
     <li>
       Do you think honesty is always the best policy, or can lying sometimes be the better option?<br />
       <br />
     </li>
     <li>
       If you picked up a little money on the street, would you report it to the police? Why or why not?<br />
       <br />
     </li>
     <li>
       If your parent and spouse were both drowning, who would you rescue first?<br />
       <br />
     </li>
     <li>
       What do you think about those people who have fled from North Korea, leaving their family behind?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
      거짓말하면 양심이 괴롭니?
     </li>
     <br />
     <li class="mb-2">
       당신은 정직이 항상 최선의 방책이라고 생각하나요, 아니면 때때로 거짓말이 더 나은 선택이 될 수 있다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       길에서 돈을 조금 주웠다면 경찰에 신고할 건가요? 왜 그럴건가요, 아니면 왜 안그럴까요?
     </li>
     <br />
     <li class="mb-2">
       만약 여러분의 부모님과 배우자가 모두 물에 빠져 있다면, 여러분은 누구를 먼저 구조할 건가요?
   </li>
   <br />
   <li class="mb-2">
       가족을 남겨두고 북한을 탈출한 사람들에 대해 어떻게 생각하세요?
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

li{


}

body{

  font-size: 16px;
}

</style>
