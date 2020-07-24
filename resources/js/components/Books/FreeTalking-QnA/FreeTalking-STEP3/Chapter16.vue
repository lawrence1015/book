<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/NDjNc/MADyQzNDjNc/1/s2/canva-man-working-on-laptop-while-woman-takes-notes-MADyQzNDjNc.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Employment Issues</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What do you think you should do if you have more than one supervisor and each one gives you different directions?
     </li>
     <br />
     <li class="mb-2">
        Imagine you and your friend work at the same company. You know you work harder and do a better job than your friend.
        <ul>
        <li class="mt-2"> To your surprise, your friend gets a promotion and is now your supervisor. What do you do?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Imagine your supervisor is making poor decisions for the company.
        <ul>
        <li class="mt-2"> Do you say anything? Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        If the same salary and benefits were offered by all available employers for all jobs, which job would you choose? why?
     </li>
     <br />
     <li class="mb-2">
        If you had known when you were younger what you now know about jobs and careers, what might you have done differently to be better prepared for the career you want?
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       만약 여러분이 한 명 이상의 감독관이 있고 각각의 감독관이 여러분에게 다른 방향을 준다면 어떻게 해야 한다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
        당신과 당신의 친구가 같은 회사에서 일한다고 상상해 보세요. 당신은 당신이 친구보다 더 열심히 일하고 더 잘 한다는 것을 알고 있습니다.
        <ul>
        <li class="mt-2">놀랍게도, 당신의 친구는 승진해서 이제는 당신의 감독관이에요. 당신은 무엇을 합니까?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        상사가 회사를 위해 나쁜 결정을 내리고 있다고 상상해 보세요.
        <ul>
        <li class="mt-2">아무말도 하지 않을 건가요? 왜 그럴까요, 아니면 왜 아닐까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        만약 모든 직장에 대해 고용 가능한 모든 고용주들이 동일한 급여와 급여를 제공했다면, 어떤 직업을 선택하겠습니까? 그 이유는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
        만약 여러분이 어렸을 때 직업과 경력에 대해 현재 알고 있는 것을 알았다면, 여러분이 원하는 직업에 더 잘 대비하기 위해 무엇을 다르게 했을까요?
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
