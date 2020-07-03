<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/uKmiQ/MAD7JZuKmiQ/1/s2/canva-young-positive-woman-helping-senior-man-using-laptop-MAD7JZuKmiQ.jpg">

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
        padding-bottom: 10px;">Generation Gap</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you always agree with your parents and grandparents?
       <ul>
         <li class="mt-2">How are you different?</li>
         <li>
           How are you similar?
         </li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Why don't older people understand young people?
       <ul>
         <li class="mt-2">Why don't young people understand older people?</li>
       </ul>
       <br />
     </li>
     <li class="mb-2">
       Do you think your ancestors had generation gaps?<br />
       <br />
     </li>
     <li class="mb-2">
       Do people change their ideas when they get older?<br />
       <ul>
         <li class="mt-2">How do they change?</li>
         <li>
           Why do they change?
         </li>
       </ul>
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 항상 부모님과 조부모님의 의견에 동의하나요?
       <ul>
       <li class="mt-2">어떻게 달라요?</li>
       <li>어떻게 비슷해요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       왜 나이든 사람들은 젊은 사람들을 이해하지 못하는 걸까요?
       <ul>
       <li class="mt-2">왜 젊은 사람들은 나이든 사람들을 이해하지 못하는 걸까요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       당신의 조상들이 세대 차이가 있었다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       사람들은 나이가 들면 생각을 바꾸나요?
      <ul>
       <li class="mt-2">그들은 어떻게 변할까요?</li>
       <li>그들은 왜 변할까요?</li>
      </ul >
     </li>
     <br />
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
