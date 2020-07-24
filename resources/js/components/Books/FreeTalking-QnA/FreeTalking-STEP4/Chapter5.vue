<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxw2fKq8/4/screen_2x/canva-seated-woman-typing-on-apple-mighty-keyboard-in-front-of-turned-on-silver-imac-MADGxw2fKq8.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Jobs</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Would you want to be a businessman or an employee?
     </li>
     <br />
     <li class="mb-2">
       Are you satisfied with your job?
     </li>
     <br />
     <li class="mb-2">
       Would you want your children to do your job?
     </li>
     <br />
     <li class="mb-2">
       What are your priorities in getting a job?
     </li>
     <br />
     <li class="mb-2">
       Would you take a night job if it were better paid?
     </li>
     <br />
     <li class="mb-2">
       When do you feel like giving up your job?
     </li>
     <br />
     <li class="mb-2">
       Do you have any idea of starting a new business?
     </li>
     <br />
     <li class="mb-2">
       What are the obstacles to starting your own business?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 사업가가 되고 싶나요, 아니면 직원이 되고 싶나요?
     </li>
     <br />
     <li class="mb-2">
       지금 직업에 만족하세요?
     </li>
     <br />
     <li class="mb-2">
       당신은 당신의 아이들이 당신의 일을 하기를 원합니까?
     </li>
     <br />
     <li class="mb-2">
       직업을 갖는데 있어서 당신의 우선순위는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       급여가 더 좋다면 야간 근무를 하시겠어요?
     </li>
     <br />
     <li class="mb-2">
       언제 직장을 그만두고 싶어요?
     </li>
     <br />
     <li class="mb-2">
       새로운 사업을 시작할 생각이 있으세요?
     </li>
     <br />
     <li class="mb-2">
       창업을 하는데 어떤 장애물이 있나요?
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
