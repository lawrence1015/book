<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADFFNW3Q2w/1/screen_2x/canva-woman-blowing-bubbles-MADFFNW3Q2w.jpg">

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
        padding-bottom: 10px;">Growing Old</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       How "old" is old? Why? Explain.<br />
       <br />
     </li>
     <li>
       How can older people help younger people? How can younger people help older people? Give some examples.<br />
       <br />
     </li>
     <li>
       What plans have you made for your retirement? How do you think your lifestyle will change when you become a senior citizen?<br />
       <br />
     </li>
     <li>
       Do you think there should be mandatory retirement for people over 65? Why or Why not?<br />
       <br />
     </li>
     <li>
       What are the "golden years"? Do you think that your older years will be "golden"? why or why not?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       “몇 살”나이든 걸까요? 왜인가요? 설명해주세요.
     </li>
     <br />
     <li class="mb-2">
       어떻게 나이든 사람들이 젊은 사람들을 도울 수 있을까요? 젊은 사람들이 어떻게 나이든 사람들을 도울 수 있을까요? 몇 가지 예를 들어 보세요.
     </li>
     <br />
     <li class="mb-2">
       은퇴 후에 어떤 계획을 세우셨어요? 당신이 노인이 되면 당신의 생활방식이 어떻게 변할 것이라고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 65세 이상의 사람들에게 의무적인 은퇴가 있어야 한다고 생각하나요? 왜 그런가요, 아니라면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       "황금의 해"는 무엇입니까? 당신은 당신의 나이가 "황금"이 될 것이라고 생각하나요? 왜인가요, 아니면 왜 아닐까요?
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
