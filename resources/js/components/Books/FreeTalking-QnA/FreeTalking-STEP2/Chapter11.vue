<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv9Pmt0c/6/screen_2x/canva-woman-and-man-shoes-photography-MADGv9Pmt0c.jpg">

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
        padding-bottom: 10px;">Love</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What five characteristics do young people usually consider when they look for a boyfriend or a girlfriend?<br />
       <br />
     </li>
     <li>
       Did your parents disapprove of any of your past relationships? Why?<br />
       <br />
     </li>
     <li>
       Did you disapprove of any of your children's or sibling's relationships? Explain why.<br />
       <br />
     </li>
     <li>
       Have you ever dated someone whom you would never want to bring home to your family? If so, explain why you chose not to introduce that person to your family. If not, did you always introduce your dates to your family? Explain.<br />
       <br />
     </li>
     <li>
       How do you feel about people who don't marry someone of the same race, religion. or culture? Why? If that person were someone in your family, would you feel differently? Explain.<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       젊은 사람들이 남자친구나 여자친구를 찾을 때 보통 고려하는 5가지 특징은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       당신의 부모님이 당신의 과거 관계를 못마땅하게 여기신 적이 있나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 자녀나 형제간의 관계에 대해 불만족스러웠던 적이 있나요? 이유를 설명하세요.
     </li>
     <br />
     <li class="mb-2">
       가족들에게 절대 집에 데려오고 싶지 않은 사람과 사귀어 본 적이 있나요? 그렇다면, 왜 그 사람을 가족에게 소개하지 않았는지 설명해주세요. 그렇지 않다면, 당신은 항상 가족들에게 데이트 상대를 소개했나요? 설명해 주세요.
     </li>
     <br>
     <li class="mb-2">
       같은 종족, 종교,문화의 사람과 결혼하지 않는 사람들에 대해 어떻게 생각하세요? 왜 그렇게 생각하시나요? 만약 그 사람이 당신의 가족 중 누군가였다면, 당신은 다르게 느끼겠습니까? 설명해 주세요.
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
