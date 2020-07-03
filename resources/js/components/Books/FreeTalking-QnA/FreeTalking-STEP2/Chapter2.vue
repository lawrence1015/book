<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/progress-word-wooden-tiles_23-2148227667.jpg">

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
        padding-bottom: 10px;">Progress</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What are the advantages and disadvantages of progress?<br />
       <br />
     </li>
     <li>
       Is the world a better place than it was 50 years ago?<br />
       <br />
     </li>
     <li>
       How can our quality of life be improved in the future? <br />
       <br />
     </li>
     <li>
       Do you think science and technology can solve every problem in the world?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       진보의 장단점은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       세상은 50년 전보다 더 나은 곳일까요?
     </li>
     <br />
     <li class="mb-2">
       어떻게 우리의 삶의 질이 미래에 향상될 수 있을까요?
     </li>
     <br />
     <li class="mb-2">
       여러분은 과학기술이 세상의 모든 문제를 해결할 수 있다고 생각하나요?
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
