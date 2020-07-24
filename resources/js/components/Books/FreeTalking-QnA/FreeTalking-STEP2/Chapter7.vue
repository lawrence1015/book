<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5JwAaCQ/1/screen_2x/canva-person-shopping-online-using-a-cellphone-MADQ5JwAaCQ.jpg">

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
        padding-bottom: 10px;">Internet Shopping</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What are some advantages of Internet shopping? What are some disadvantages of Internet shopping?<br />
       <br />
     </li>
     <li>
       Do you think people are addicted to online shopping these days?<br />
       <br />
     </li>
     <li>
       Do you think Internet shopping encourages people to get into debt?<br />
       <br />
     </li>
     <li>
       Is the Internet improving our standard of living?<br />
       <br />
     </li>
     <li>
       What is ‘Phishing’? How can you recognize a phishing e-mail?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       인터넷 쇼핑의 장점은 무엇입니까? 인터넷 쇼핑의 단점은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       요즘 사람들이 온라인 쇼핑에 중독되어 있다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       여러분은 인터넷 쇼핑으로 사람들이 빚을 진다고 생각하나요?
     </li>
     <br />
     <li class="mb-2">
       인터넷이 우리의 생활 수준을 향상시키고 있나요?
     </li>
     <br>
     <li class="mb-2">
      '피싱'이란 무엇입니까? 피싱 전자 메일을 어떻게 알아볼 수 있습니까?
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
