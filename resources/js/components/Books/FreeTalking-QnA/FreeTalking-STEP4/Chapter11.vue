<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/BLS4Y/MADyRPBLS4Y/1/s2/canva-man-holding-newspaper-MADyRPBLS4Y.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Books, Newspapers&amp;Magazines</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you prefer a morning paper or an evening one? Why?
     </li>
     <br />
     <li class="mb-2">
       Which section do you read first in a newspaper?
     </li>
     <br />
     <li class="mb-2">
       What is the most important reason you read a newspaper?
     </li>
     <br />
     <li class="mb-2">
       What is the most important reason you read magazines?
     </li>
     <br />
     <li class="mb-2">
       Do you believe everything you read in the newspaper? In a magazine?
     </li>
     <br />
     <li class="mb-2">
       Do you trust what the ads say?
     </li>
     <br />
     <li class="mb-2">
       How often do you visit a bookstore?
     </li>
     <br />
     <li class="mb-2">
       Talk about the most impressive books you have ever read.
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 조간 신문과 저녁 신문 중 어느 것을 더 좋아합니까? 그 이유는요?
     </li>
     <br />
     <li class="mb-2">
       신문에서 어느 부분을 먼저 읽습니까?
     </li>
     <br />
     <li class="mb-2">
       당신이 신문을 읽는 가장 중요한 이유는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       당신이 잡지를 읽는 가장 중요한 이유는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       신문에서 읽는 모든 것을 믿으세요? 잡지에서는요?
     </li>
     <br />
     <li class="mb-2">
       광고에 나오는 말을 믿으세요?
     </li>
     <br />
     <li class="mb-2">
       당신은 얼마나 자주 서점을 방문합니까?
     </li>
     <br />
     <li class="mb-2">
       지금까지 읽은 책 중에서 가장 인상 깊었던 책에 대해 이야기해보세요.
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

.format{
  margin-top: 0px;
}

</style>
