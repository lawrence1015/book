<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/_C4yc/MADy8T_C4yc/1/s2/canva-photo-of-smiling-woman-in-floral-dress-sitting-on-wooden-platform-while-petting-a-dog-MADy8T_C4yc.jpg">

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
        padding-bottom: 10px;">Pets</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Have you ever had a pet? Talk about it.<br />
       <br />
     </li>
     <li>
       Why do people have pets? Why do some people dislike pets?<br />
       <br />
     </li>
     <li>
       Did you find your pet, get it from a shelter, or buy it in a store? Explain.<br />
       <br />
     </li>
     <li>
       What are some unusual pets that you have seen in your native country?<br />
       <br />
     </li>
     <li>
       What do you think about people who believe pets are part of their family? Have you ever had a pet that you felt was part of your family?<br />
       <br />
     </li>
     <li>
       Does your country have sporting events that use animals (chicken fights, horse races, bullfights, dog races, or horse tripping)? Have you ever gone to one of those events? What do you think about them?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 반려동물을 키워본 적이 있나요? 그것에 대해 이야기해보세요.
     </li>
     <br />
     <li class="mb-2">
       왜 사람들은 반려동물을 기르나요? 왜 어떤 사람들은 반려동물을 싫어할까요?
     </li>
     <br />
     <li class="mb-2">
       반려동물을 발견했나요, 보호소에서 구했나요, 아니면 가게에서 샀나요? 설명해 주세요.
     </li>
     <br />
     <li class="mb-2">
      당신의 나라에서 본 특이한 반려동물들은 무엇인가요?
     </li>
     <br />
     <li class="mb-2">
       여러분은 반려동물이 가족의 일부라고 믿는 사람들에 대해 어떻게 생각하나요? 여러분은 가족의 일부라고 느낀 반려동물을 키워본 적이 있나요?    
     </li>
     <br />
     <li class="mb-2">
      당신의 나라에는 동물을 이용한 스포츠 행사가 있나요 (닭싸움, 경마, 투우, 강아지 경주)? 당신은 그 행사들 중 하나에 가본 적 있나요? 여러분은 그것들에 대해 어떻게 생각하나요?
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
