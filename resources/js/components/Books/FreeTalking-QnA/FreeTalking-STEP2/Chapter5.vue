<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/6nRQA/MAD7c46nRQA/1/s2/canva-spooky-ghost-MAD7c46nRQA.jpg">

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
        padding-bottom: 10px;">Ghosts and the Supernatural</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What are ghosts? Do you believe they exist? Why or why not?<br />
       <br />
     </li>
     <li>
       Where do people usually see ghosts? Have you ever seen a ghost? <br />
       <br />
     </li>
     <li>
       Do you believe that UFOs or creatures from other planets exist? Why or why not?<br />
       <br />
     </li>
     <li>
       Has any mysterious or supernatural event taken place in your country?<br />
       <br />
     </li>
     <li>
       Imagine you are an "eye witness" to a ghost, a UFO, or a supernatural phenomenon. What should you do? Should you tell your friends and family? Should you call the police? Will people believe you? Discuss.
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       유령이란 무엇일까요? 당신은 그들이 존재한다고 믿나요? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       사람들은 보통 어디에서 귀신을 보나요? 귀신을 본 적이 있나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 UFO나 다른 행성에서 온 생명체가 존재한다고 믿습니까? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       당신의 나라에서 신비롭고 초자연적인 사건이 일어난 적이 있나요?
     </li>
     <br>
     <li class="mb-2">
      여러분이 유령, UFO 또는 초자연적인 현상의 "목격자"라고 상상해 보세요. 당신은 어떻게 해야 합니까? 당신은 당신의 친구들과 가족들에게 말해야 하나요? 경찰을 불러야 하나요? 사람들이 당신을 믿을까요? 토론해보세요.
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
