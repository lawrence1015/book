<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/QReGs/MADyQ9QReGs/1/s2/canva-family-of-four-walking-at-the-street-MADyQ9QReGs.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Parents &amp; Children</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Would you prefer being part of a big extended family or a small nuclear one?
     </li>
     <br />
     <li class="mb-2">
       If your wife were opposed to living with your parents, what would you do?
     </li>
     <br />
     <li class="mb-2">
       How often do you see your parents?
     </li>
     <br />
     <li class="mb-2">
       Do you think it’s your duty to take care of your parents when they get old?
     </li>
     <br />
     <li class="mb-2">
       Would you spank your children if they went astray?
     </li>
     <br />
     <li class="mb-2">
       How many children do you want to have?
     </li>
     <br />
     <li class="mb-2">
       If you had two daughters, would you try again to have a son?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       대가족과 소핵가족 중 어느 쪽을 더 좋아하세요?
     </li>
     <br />
     <li class="mb-2">
       만약 당신의 아내가 부모님과 함께 사는 것에 반대한다면, 당신은 어떻게 하겠습니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 부모님을 얼마나 자주 만납니까?
     </li>
     <br />
     <li class="mb-2">
       부모님이 늙었을 때 돌보는 것이 당신의 의무라고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       아이들이 잘못된 길에 빠지면 때릴 건가요?
     </li>
     <br />
     <li class="mb-2">
       아이는 얼마나 낳고 싶은가요?
     </li>
     <br />
     <li class="mb-2">
       만약 당신에게 딸이 둘 있다면, 다시 아들을 갖도록 노력하겠습니까?
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
