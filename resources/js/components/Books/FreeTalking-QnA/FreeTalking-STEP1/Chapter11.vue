<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/medium-shot-friends-taking-selfie_23-2148212344.jpg">

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
        padding-bottom: 10px;">Culture shock</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       How is Korean culture different from American or European culture?<br />
       <br />
     </li>
     <li class="mb-2">
       Do you think life in Korea is stressful for foreigners?
       <ul>
         <li class="mt-2">Do you think life in other countries is stressful for Koreans?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Can you think of some examples of Culture Shock?<br />
       <br />
     </li>
     <li class="mb-2">
       Is Korean culture becoming too Americanized?<br />
       <br />
     </li>
     <li class="mb-2">
       How can people get over Culture Shock?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       한국 문화는 미국이나 유럽 문화와 어떻게 다른가요?
     </li>
     <br />
     <li class="mb-2">
       당신은 한국 생활이 외국인들에게 스트레스를 준다고 생각하나요?
       <ul>
       <li class="mt-2">여러분은 다른 나라에서의 삶이 한국인들에게 스트레스를 준다고 생각하나요?</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       문화 충격의 몇 가지 예를 생각해 볼 수 있나요?
     </li>
     <br />
     <li class="mb-2">
      한국 문화는 너무 미국화되고 있는 것일까?
   </li>
   <br />
   <li class="mb-2">
       사람들은 문화충격을 어떻게 극복할 수 있을까요?
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
