<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGx-V23ss/4/screen_2x/canva-brass-round-7-stack-coins-MADGx-V23ss.jpg">

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
        padding-bottom: 10px;">Money Management</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What are the basic monthly bills most people have to pay?<br />
       <br />
     </li>
     <li>
       What necessary items do you buy frequently?<br />
       <br />
     </li>
     <li>
       Have you ever saved money for a major purchase? If yes, for what? If not, why not?<br />
       <br />
     </li>
     <li>
       Do you think if you earned more money you would be able to save more, or do you think you would spend more? Why?<br />
       <br />
     </li>
     <li>
       Do you think most people budget their money wisely? Why or why not?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       대부분의 사람들이 지불해야 하는 5개의 기본 월 청구서는 무엇인가요?
     </li>
     <br />
     <li class="mb-2">
       당신은 어떤 필요한 물건을 자주 사나요?
     </li>
     <br />
     <li class="mb-2">
       주요 구매를 위해 돈을 저축한 적이 있나요? 만약 그렇다면, 무엇을 위해서요? 그렇지 않다면, 왜 그렇지 않았나요?
     </li>
     <br />
     <li class="mb-2">
       더 많은 돈을 벌면 더 많이 저축할 수 있을 거라고 생각하나요, 아니면 더 많이 쓸 거라고 생각하나요? 왜 그런가요?
     </li>
     <br>
     <li class="mb-2">
       여러분은 대부분의 사람들이 돈을 현명하게 예산한다고 생각하나요? 왜 그런가요, 아니라면 왜 아닌가요?
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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}

</style>
