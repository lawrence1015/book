<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/mhiOo/MAD2rUmhiOo/1/s2/canva-person-in-white-and-black-striped-long-sleeve-shirt-writing-on-white-paper-MAD2rUmhiOo.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Professionalism</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What job did you have in your country?
       <ul>
       <li class="mt-2"> Did you like it? Why or why not?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        What is your profession now?
        <ul>
        <li class="mt-2"> How do most people view what you do for a living?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        When you were a child, what career did you think you would pursue when you grew up?
        <ul>
        <li class="mt-2"> Do you have that job now?</li>
        <li> Are you currently trying to get that job? Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever met a dishonest professional?
        <ul>
        <li class="mt-2">  Have you ever been taken advantage of in a business transaction?</li>
        <li>  Talk about your experience.</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신 나라에서 당신은 어떤 일을 했나요?
       <ul>
       <li class="mt-2">마음에 들었나요? 왜요 아니라면 왜 아니였나요?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        당신의 직업은 무엇입니까?
        <ul>
        <li class="mt-2">대부분의 사람들은 당신이 하는 일을 어떻게 생각하나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        당신이 어렸을 때, 당신은 자라서 어떤 직업을 추구할 것이라고 생각했나요?
        <ul>
        <li class="mt-2">당신은 지금 그 직업을 가지고 있나요?</li>
        <li>당신은 현재 그 직장을 잡으려고 노력하고 있나요? 왜 그런가요, 아니면 왜 아닌가요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 부정한 전문가를 만난 적이 있습니까?
        <ul>
        <li class="mt-2">당신은 사업 거래에서 이용당한 적이 있습니까?</li>
        <li>당신의 경험에 대해 이야기하세요.</li>
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
