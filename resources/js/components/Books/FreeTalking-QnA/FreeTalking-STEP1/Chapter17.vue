<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/ZO5_0/MAD8QOZO5_0/1/s2/canva-stressed-woman-looking-at-a-laptop-MAD8QOZO5_0.jpg">

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
        padding-bottom: 10px;">Stress</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What are five positive ways people deal with stress?<br />
       <br />
     </li>
     <li class="mb-2">
       Talk about the most stressful day that you have ever had.
       <ul>
         <li class="mt-2">How did you handle the stress?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Would you take a very stressful job if you were paid a high salary? Why or why not?<br />
       <br />
     </li>
     <li class="mb-2">
       How can people reduce stress in their lives?
       <ul>
         <li class="mt-2">What are some things people do to relax?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do you think it is more stressful to work at a job that is physically or mentally challenging? Why?<br />
       <br />
     </li>
     <li class="mb-2">
       Are you an optimist or a pessimist?
       <ul>
         <li class="mt-2">Why is it better to be an optimist when negative events occur in your life?</li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       사람들이 스트레스를 다루는 다섯 가지 긍정적인 방법은 무엇인가요?
     </li>
     <br />
     <li class="mb-2">
       지금까지 가장 스트레스를 많이 받았던 날에 대해 말해보세요. 
       <ul>
       <li class="mt-2">스트레스를 어떻게 해결했나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       높은 연봉을 받는다면 스트레스를 많이 받는 직업을 택하겠습니까? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
      사람들은 어떻게 그들의 삶에서 스트레스를 줄일 수 있을까요?
       <ul>
       <li class="mt-2">사람들이 휴식을 취하기 위해 하는 일에는 무엇이 있나요?</li>
       </ul>
   </li>
   <br />
   <li class="mb-2">
       육체적으로나 정신적으로 힘든 직장에서 일하는 것이 더 스트레스 받는다고 생각하나요? 왜 그럴까요?
   </li>
   <br />
     <li class="mb-2">
      당신은 낙관주의자입니까, 비관주의자입니까?
       <ul>
       <li class="mt-2">살면서 부정적인 일이 일어날 때 왜 낙관론자가 되는 것이 더 나은가요?</li>
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
