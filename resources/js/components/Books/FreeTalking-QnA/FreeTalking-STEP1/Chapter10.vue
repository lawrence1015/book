<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5BaaNS0/1/screen_2x/canva-a-path-in-a-forest-MADQ5BaaNS0.jpg">

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
        padding-bottom: 10px;">The Best of Everything</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What's the best city to visit in your country? Why?<br />
       <br />
     </li>
     <li class="mb-2">
       Who was the most important person in the history of your country?
       <ul>
         <li class="mt-2">What did that person do?</li>
         <li>
           Who is the most important person now?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What is the most popular sport in your country?
       <ul>
         <li class="mt-2">What do you think is the most popular sport in the world?</li>
         <li>
           Why do you think that sport is so popular?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       What was the most interesting place you have ever visited? Talk about it.<br />
       <br />
     </li>
     <li class="mb-2">
       What's the best thing about where you live now? Why?
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신 나라에서 방문하기에 가장 좋은 도시는 어디인가요? 왜죠?
     </li>
     <br />
     <li class="mb-2">
       당신 나라의 역사에서 가장 중요한 사람은 누구입니까?
       <ul>
       <li class="mt-2">그 사람은 무슨 일을 했습니까?</li>
       <li>지금 가장 중요한 사람은 누구입니까?</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       당신의 나라에서 가장 인기 있는 스포츠는 무엇입니까?
       <ul>
       <li class="mt-2">당신은 세계에서 제일 인기 있는 스포츠가 뭐라고 생각하세요?</li>
       <li>당신은 왜 그 스포츠가 그렇게 인기가 있다고 생각합니까?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
      당신이 가 본 가장 흥미로운 곳은 어디인가요? 그것에 대해 이야기해보세요.
   </li>
   <br />
   <li class="mb-2">
       당신이 지금 살고 있는 곳의 가장 좋은 점은 무엇입니까? 무슨이유가 있습니까?
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
