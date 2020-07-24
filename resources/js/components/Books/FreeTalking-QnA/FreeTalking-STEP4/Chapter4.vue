<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyBFfgq4/4/screen_2x/canva-four-person-standing-on-cliff-in-front-of-sun-MADGyBFfgq4.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Friends</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Why do people need to make friends?
     </li>
     <br />
     <li class="mb-2">
       Is it okay for your spouse to have friends of the opposite sex?
     </li>
     <br />
     <li class="mb-2">
       How did you meet your best friend?
     </li>
     <br />
     <li class="mb-2">
       What usually causes trouble between friends?
     </li>
     <br />
     <li class="mb-2">
       Do you believe the saying, “Out of sight, out of mind”?
     </li>
     <br />
     <li class="mb-2">
       What’s the difference between having male and female friends?
     </li>
     <br />
     <li class="mb-2">
       What’s the difference between the friends you made in elementary, middle and high school, and college?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       왜 사람들은 친구를 사귈 필요가 있을까요?
     </li>
     <br />
     <li class="mb-2">
       당신의 배우자는 이성 친구를 사귀어도 괜찮습니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 당신의 가장 친한 친구를 어떻게 만났나요?
     </li>
     <br />
     <li class="mb-2">
       보통 친구 사이에 문제를 일으키는 것은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       "눈에서 멀어지면 마음에서 멀어진다"는 말을 믿으세요?
     </li>
     <br />
     <li class="mb-2">
       남자 친구가 있는 것과 여자 친구가 있는 것의 차이점은 무엇인가요?
     </li>
     <br />
     <li class="mb-2">
       초, 중, 고등학교 때 사귄 친구랑 대학교 때 사귄 친구랑 뭐가 달라요?
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

.format{
  margin-top: 0px;
}

</style>
