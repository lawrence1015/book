<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
             src="https://marketplace.canva.com/aW8V0/MAD0iWaW8V0/1/s2/canva-conversation-between-job-applicant-and-representative-employer-MAD0iWaW8V0.jpg">

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
        padding-bottom: 10px;">Job Interviews</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Getting a new job can be difficult. Name at least four ways people find jobs. Example-Networking is a good way to find a job.<br />
       <br />
     </li>
     <li>
       When an employer asks you if you have any questions, what do you answer? State five possible questions you can ask about the job or the company.<br />
       <br />
     </li>
     <li>
       Think about your last job interview. What questions did the employer ask you? Talk about your experience. <br />
       <br />
     </li>
     <li>
       Did you get the job at your last interview? Why do you think the employer did or didn't hire you?<br />
       <br />
     </li>
     <li>
       What do you think are some important characteristics employers look for when they are hiring people? Example-A person who comes to work on time. A reliable person.<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       새 직장을 구하는 것은 어려울 수 있습니다. 사람들이 일자리를 찾는 네 가지 방법 이상을 말하세요. 예를들어-네트워킹은 일자리를 찾는 좋은 방법입니다.
     </li>
     <br />
     <li class="mb-2">
       고용주가 당신에게 질문이 있는지 물어보면, 당신은 뭐라고 대답합니까? 직업이나 회사에 대해 물어볼 수 있는 5가지 가능한 질문을 제시하세요.
     </li>
     <br />
     <li class="mb-2">
      지난번 취업 면접을 생각해 봐. 고용주가 당신에게 어떤 질문을 했는가? 네 경험에 대해 말해봐.
     </li>
     <br />
     <li class="mb-2">
      지난번 면접 때 취직을 했나요? 왜 고용주가 당신을 고용했다고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
       고용주들이 사람들을 고용할 때 찾는 중요한 특징들은 무엇이라고 생각하나요? 예를들어-정시에 출근하는 사람입니다. 믿을 만한 사람이죠.
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
