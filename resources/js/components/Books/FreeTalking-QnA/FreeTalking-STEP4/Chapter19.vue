<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/portrait-cheerful-bearded-man-celebrating-success_171337-4282.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Lottery</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you evey buy lottery tickets?
       <ul>
       <li class="mt-2"> Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       If you won a fortune, what would you do with the money?
     </li>
     <br />
     <li class="mb-2">
       Would you continue your job if you won the lottery?
     </li>
     <br />
     <li class="mb-2">
        People say you’ll be poor 10 years after you win the lottery.
       <ul>
       <li class="mt-2"> Do you think that’s true?</li>
       <li> Why or why not?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 복권을 사 본 적이 있나요?
       <ul>
       <li class="mt-2">왜 샀나요, 아니라면 왜 안샀나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       만약 당신이 거액을 얻었다면, 그 돈으로 무엇을 하겠습니까?
     </li>
     <br />
     <li class="mb-2">
       복권에 당첨되면 일을 계속할 건가요?
     </li>
     <br />
     <li class="mb-2">
        사람들은 복권에 당첨된 지 10년이 지나면 가난해질 거라고 말해요.
       <ul>
       <li class="mt-2">그게 사실이라고 생각하세요?</li>
       <li>왜 그럴까요, 아니라면 왜 아닐까요?</li>
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
