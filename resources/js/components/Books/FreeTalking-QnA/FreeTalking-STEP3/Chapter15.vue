<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/portrait-happy-bearded-man-celebrating-success_171337-4895.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">What would you Do If...</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       If you won $100,000,000, what would you buy? Name at least three things.
     </li>
     <br />
     <li class="mb-2">
        If you were allowed to be the leader of any country in the world, which country would you choose? Why?
        <ul>
        <li class="mt-2"> What changes would you make in that country?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         If you had been an animal instead of a human being, which animal do you think you would have been? Why?
     </li>
     <br />
     <li class="mb-2">
          During lunch in a local restaurant, you overhear someone admit to killing another person. You turn around to see who it is, and you know that person.
        <ul>
        <li class="mt-2"> Would you notify the police? Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever wished you were born in another place or time?
        <ul>
        <li class="mt-2"> Where and when did you wish you had been born? why?</li>
       </ul>
     </li>
   </ol>



</div>


<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       만약 당신이 1억 달러를 땄다면, 무엇을 살 것입니까? 적어도 세 가지를 말하세요.
     </li>
     <br />
     <li class="mb-2">
        만약 당신이 세계 어느 나라의 지도자가 될 수 있다면, 어느 나라를 선택하겠습니까? 왜요?
        <ul>
        <li class="mt-2">그 나라에서 어떤 변화를 만들겠습니까?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         만약 당신이 사람 대신에 동물이 되었다면, 당신은 어떤 동물이 되었을 것이라고 생각합니까? 왜 그렇습니까?
     </li>
     <br />
     <li class="mb-2">
          지역 식당에서 점심식사를 하는 동안, 다른 사람을 죽인 것을 인정하는 다른 사람의 말을 엿듣게 됩니다. 누군지 보려고 뒤돌아보았고 당신은 그 사람을 알고 있습니다.
        <ul>
        <li class="mt-2">경찰에 알려 주시겠어요? 왜 그럴까요, 아니면 왜 아닐까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        여러분은 다른 장소나 시간에 태어나기를 바란 적이 있나요?
        <ul>
        <li class="mt-2">당신은 언제 어디서 태어났으면 좋았을까요? 왜죠?</li>
       </ul>
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
