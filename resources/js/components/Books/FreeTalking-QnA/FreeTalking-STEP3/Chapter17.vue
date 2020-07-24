<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv3e9Qww/7/screen_2x/canva-1-movie-2-signage-under-white-clouds-MADGv3e9Qww.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Movies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       When did you last see a movie?
     </li>
     <br />
     <li class="mb-2">
        What do you think of Hollwood movies?
        <ul>
        <li class="mt-2"> What do you think of Korean movies?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        What do you think about movie copyright?
        <ul>
        <li class="mt-2"> Is it OK to make copies of DVDs?</li>
        <li> Is it OK to download movies from free websites?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Do you think movie stars make too much money?
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       마지막으로 영화를 본 게 언제입니까?
     </li>
     <br />
     <li class="mb-2">
        할리우드 영화에 대해 어떻게 생각하세요?
        <ul>
        <li class="mt-2">한국 영화에 대해 어떻게 생각하세요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        영화 저작권에 대해 어떻게 생각하세요?
        <ul>
        <li class="mt-2">DVD를 복사해도 괜찮습니까?</li>
        <li>무료 웹사이트에서 영화를 다운로드해도 괜찮을까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        영화배우들이 돈을 너무 많이 번다고 생각하세요?
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

.format{
  margin-top: 0px;
}

</style>
