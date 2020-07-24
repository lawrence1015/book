<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv3B2vds/6/screen_2x/canva-four-women-sitting-on-benches-outside-building-MADGv3B2vds.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Life style</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What types of social activities do you engage in?<br />
     </li>
     <br />
     <li class="mb-2">
       How do you spend your free time?
       <ul>
      <li class="mt-2">Do you prefer spending it alone or with friends?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What would you think about become a priest, monk, or nun?
     </li>
     <br />
     <li class="mb-2">
       Do you think the quality of your life is improving or getting worse?
     </li>
     <br />
     <li class="mb-2">
       What musical instruments can you play?
     </li>
     <br />
     <li class="mb-2">
       Have you ever done any volunteer work?
     </li>
     <br />
     <li class="mb-2">
       Are you usually on time for appointments?
     </li>
     <br />
     <li class="mb-2">
       How do you relieve your stress?
     </li>
     <br />
     <li class="mb-2">
       Do you think you are happy? Why or why not?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 어떤 종류의 사회 활동을 합니까?<br />
     </li>
     <br />
     <li class="mb-2">
       당신은 여가 시간을 어떻게 보내나요?
       <ul>
      <li class="mt-2">당신은 혼자 보내는 것을 좋아하나요 아니면 친구들과 보내는 것을 좋아하나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       신부, 수도사, 수녀가 되는 것에 대해 어떻게 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       여러분은 삶의 질이 향상되고 있다고 생각하나요 아니면 나빠지고 있다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 어떤 악기를 연주할 수 있습니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 자원봉사 활동을 해 본 적이 있어요?
     </li>
     <br />
     <li class="mb-2">
       당신은 보통 약속 시간을 잘 지키나요?
     </li>
     <br />
     <li class="mb-2">
       스트레스를 어떻게 푸세요?
     </li>
     <br />
     <li class="mb-2">
       당신은 당신이 행복하다고 생각하나요? 왜 그렇게 생각하나요, 아니라면 왜 아니라고 생각하나요?
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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
