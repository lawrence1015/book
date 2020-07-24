<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/rmivA/MAD36srmivA/1/s2/canva-sick-woman-sitting-on-chair-MAD36srmivA.jpg">

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
        padding-bottom: 10px;">Calling in Sick</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       When did you call in sick last? Why?<br />
       <br />
     </li>
     <li>
       Do you get paid for sick days at your current job? Why or why not? How about your previous jobs?<br />
       <br />
     </li>
     <li>
       Do people get paid for sick days in your country? For what jobs?<br />
       <br />
     </li>
     <li>
       How many paid sick days do you think a person should be allowed to have per year? Why?<br />
       <br />
     </li>
     <li>
       Imagine you are the manager of a company. An employee has called in sick.<br />
       Later, after work, you see that employee at a local baseball game.<br />
       Do you approach him at the game or wait until the next day to talk to him?<br />
       What will you say?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       언제 마지막으로 아프다고 전화했어요? 왜요?
     </li>
     <br />
     <li class="mb-2">
       당신은 현재 직장에서 병가일당을 받습니까? 왜 그런가요, 아니라면 왜 아닌가요? 당신의 이전 직장은 어떻습니까?
     </li>
     <br />
     <li class="mb-2">
       당신 나라에서는 아픈 날들에 대해 돈을 받나요? 무슨 일을 위해서요?
     </li>
     <br />
     <li class="mb-2">
       1년에 유급 병가는 몇일 정도 허용되어야 한다고 생각합니까? 그 이유는요?
     </li>
     <br>
     <li class="mb-2">
       당신이 회사의 관리자라고 상상해 보세요. 직원이 아프다고 전화했어요.<br>
       나중에, 퇴근 후에, 여러분은 지역 야구 경기에서 그 직원을 봅니다.<br>
       당신은 경기 중에 그에게 다가가나요 아니면 다음 날까지 기다렸다가 그와 이야기하나요?<br>
       뭐라고 하실 건가요?
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
