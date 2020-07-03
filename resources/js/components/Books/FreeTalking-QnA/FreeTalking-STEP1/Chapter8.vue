<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/9IGJQ/MAD6qu9IGJQ/1/s2/canva-woman-and-child-watching-television-MAD6qu9IGJQ.jpg">

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
        padding-bottom: 10px;">Television</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What are the good and bad points about television?<br />
       <br />
     </li>
     <li class="mb-2">
       Do you think television harms young children?<br />
       Why? Why not?<br />
       <br />
     </li>
     <li class="mb-2">
       What do you think about TV shopping channels?
       <ul>
         <li class="mt-2">Have you ever done any TV shopping?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Could you live without a TV?
       <ul>
         <li class="mt-2">What would you do instead?</li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       텔레비전의 장단점은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 텔레비전이 어린 아이들에게 해를 끼친다고 생각하나요?
       <ul>
       <li class="mt-2">왜 그렇게 생각하나요? 왜 그렇지 않다고 생각하나요?</li>
     </ul>
     </li>
     <br />
     <li class="mb-2">
       TV 쇼핑 채널에 대해 어떻게 생각하세요?
       <ul>
       <li class="mt-2">TV 쇼핑 해본 적 있어요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       TV 없이 살 수 있나요?
      <ul>
       <li class="mt-2">그 대신 무엇을 하시겠어요?</li>
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
