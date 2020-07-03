<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/flat-lay-arrangement-with-book-pencil-paper-airplane_23-2148389111.jpg">

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
        padding-bottom: 10px;">Studying Abroad</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Why do people want to study abroad?<br />
       <br />
     </li>
     <li>
       What are the advantages and disadvantages of studying abroad?<br />
       <br />
     </li>
     <li>
       What do you think of Korean 'Wild Goose Fathers'(Men who stay in Korea, while their family lives in the USA or Canada and their children study there)?<br />
       <br />
     </li>
     <li>
       Is it necessary to go abroad to study English?<br />
       <br />
     </li>
     <li>
       "Overseas study will change your life. You'll come back a new person."<br />
        Do you agree with this statement? Why? Why not?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       왜 사람들은 해외에서 공부하기를 원합니까?
     </li>
     <br />
     <li class="mb-2">
       해외유학의 장점과 단점은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       여러분은 한국의 '기러기아빠들'에 대해 어떻게 생각하나요? (가족은 미국이나 캐나다에 살고 자녀들은 그곳에서 공부하는 동안 한국에 머무르는 남자들)
     </li>
     <br />
     <li class="mb-2">
       영어를 공부하기 위해 꼭 해외로 가야 하나요?
     </li>
     <br>
     <li class="mb-2">
      "해외공부가 인생을 바꿀 것입니다. 당신은 새로운 사람이 돌아올 거예요." 당신은 이 진술에 동의하나요? 왜인가요? 왜 아닌가요?
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
