<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/GBYK4/MAD36tGBYK4/1/s2/canva-photo-of-man-playing-with-child-MAD36tGBYK4.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Men&amp;Women</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Are men and women equal in our society?
     </li>
     <br />
     <li class="mb-2">
       Do you think men are stronger than women?
     </li>
     <br />
     <li class="mb-2">
       Would you vote for a female candidate for President?
     </li>
     <br />
     <li class="mb-2">
       Who do you think finds it harder to live in our society,males or females?
     </li>
     <br />
     <li class="mb-2">
       What would you think if you had a househusband who managed all the household affairs including child care while you pursued a career?
     </li>
     <br />
     <li class="mb-2">
       Is being a househusband the proper thing for a man to do? Would you ever consider being a househusband?
     </li>
   </ol>



</div>

 <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       우리 사회에서 남자와 여자는 평등합니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 남자가 여자보다 강하다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 여성 대통령 후보에게 투표할 건가요?
     </li>
     <br />
     <li class="mb-2">
       당신은 누가 우리 사회에서 사는 것이 더 어렵다고 생각합니까? 남성 또는 여성?
     </li>
     <br />
     <li class="mb-2">
       당신이 직장생활을 하는 동안 육아 등 집안일을 모두 관리하는 가정 남편이 있다면 어떻게 생각하겠습니까?
     </li>
     <br />
     <li class="mb-2">
       가정 남편이 되는 것이 남자가 해야 할 적절한 일인가요? 당신은 가정 남편이 되는 것을 고려해 본 적이 있나요?
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
