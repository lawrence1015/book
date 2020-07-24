<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADFFBN599U/1/screen_2x/canva-woman-on-phone-MADFFBN599U.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Computer&amp;Internet</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What do you use computers for?
     </li>
     <br />
     <li class="mb-2">
       What effect has the internet had on your life?
     </li>
     <br />
     <li class="mb-2">
       What bad effects has the computer had on your life?
       <ul>
       <li class="mt-2">What are the dangers in general?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       How can we end computer illiteracy in our society? Should we?
     </li>
     <br />
     <li class="mb-2">
       What would be the result of a sudden crash of all computer systems?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 컴퓨터를 무엇에 사용합니까?
     </li>
     <br />
     <li class="mb-2">
       인터넷이 당신의 삶에 어떤 영향을 끼쳤나요?
     </li>
     <br />
     <li class="mb-2">
       컴퓨터가 당신의 삶에 어떤 나쁜 영향을 끼쳤나요?
       <ul>
       <li class="mt-2">일반적으로 어떤 위험이 있습니까?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       어떻게 하면 우리 사회의 컴퓨터 문맹을 끝낼 수 있을까요? 끝내야만 할까요?
     </li>
     <br />
     <li class="mb-2">
       모든 컴퓨터 시스템이 갑자기 충돌하면 어떻게 될까요?
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
