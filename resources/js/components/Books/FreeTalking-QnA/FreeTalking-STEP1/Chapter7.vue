<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/abjw8/MADyQ3abjw8/1/s2/canva-people-working-in-front-of-the-computer-MADyQ3abjw8.jpg">

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
        padding-bottom: 10px;">Gender Roles</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       In your home who usually takes out the trash, puts away the laundry, takes care of the children, cleans the house? Why?<br />
       <br />
     </li>
     <li class="mb-2">
       What's a man's role in your country? (What does society expect him to do?)
       <ul>
         <li class="mt-2">What's a woman's role in your country? (What does society expect her to do?)</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do men and women always get equal pay for the same job in your country? Explain.<br />
       <br />
     </li>
     <li class="mb-2">
       Do you think that the women's rights movement has helped women? Men?
       <ul>
         <li class="mt-2">Society in general? Explain your answers.</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What has been the greatest accomplishment a woman has made in your country?
       <ul>
         <li class="mt-2">Who was she?</li>
         <li>
           What did she do?
         </li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신의 집에서는 보통 쓰레기를 치우고, 빨래를 치우고, 아이들을 돌보고, 집을 청소하는 사람은 누구입니까? 왜 할까요?
     </li>
     <br />
     <li class="mb-2">
       당신 나라에서 남자의 역할은 무엇입니까? (사회는 그가 무엇을 하기를 기대합니까?)
       <ul>
       <li class="mt-2">당신 나라에서 여자의 역할은 무엇입니까? (사회는 그녀가 무엇을 하기를 기대합니까?)</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       당신의 나라에서는 남녀가 항상 같은 직업에 대해 동일한 임금을 받나요? 설명해 주세요.
     </li>
     <br />
     <li class="mb-2">
       당신은 여성 인권 운동이 여성들, 남성들, 사회 전반적으로 도움이 되었다고 생각합니까? 설명해주세요.
     </li>
     <br />
     <li class="mb-2">
       당신의 나라에서 여자가 이룬 가장 큰 성취는 무엇입니까?
      <ul>
       <li class="mt-2">누구였나요? </li>
       <li>그녀는 무엇을 했습니까?</li>
     </ul>
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

<style scoped lang="css">

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

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

</style>
