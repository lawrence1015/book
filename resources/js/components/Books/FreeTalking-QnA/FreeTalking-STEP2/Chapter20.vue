<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxJSk61Y/5/screen_2x/canva-white-house-MADGxJSk61Y.jpg">

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
        padding-bottom: 10px;">Forms of Government</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Who was the leader, president, prime minister, or ruler of your native country five years ago? Was that person a good leader? Why or why not? Who's the leader of your country today?<br />
       <br />
     </li>
     <li>
       Who are some other important leaders in your country? What issues do they stand for? Do you approve of their leadership? Why or why not?<br />
       <br />
     </li>
     <li>
       What positive or negative decisions has the president of the country you are living in now made recently? Were they major decisions? Have they affected your life?<br />
       <br />
     </li>
     <li>
        Who do you think has been a great world leader? Why?<br />
       <br />
     </li>
     <li>
       If you were the leader of the country that you're now living in, what three things would you change first? Why?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       5년 전 당신 조국의 지도자, 대통령, 총리 또는 통치자는 누구였습니까? 그 사람은 좋은 리더였나요? 왜 그렇게 생각하나요, 아니라면 왜 아나라고 생각하나요? 오늘 당신 나라의 지도자는 누구입니까?
     </li>
     <br />
     <li class="mb-2">
       당신의 나라에서 다른 중요한 지도자들은 누구입니까? 그들은 어떤 이슈를 나타냅니까? 당신은 그들의 리더십을 인정합니까? 왜 그런가요, 아니면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       당신이 살고 있는 나라의 대통령이 최근에 어떤 긍정적인 혹은 부정적인 결정을 했습니까? 중요한 결정이었나요? 그것들이 당신의 삶에 영향을 주었나요?
     </li>
     <br />
     <li class="mb-2">
       당신은 누가 위대한 세계 지도자가 되었다고 생각합니까? 왜 그렇게 생각합니까?
     </li>
     <br>
     <li class="mb-2">
       만약 당신이 지금 살고 있는 나라의 지도자라면, 어떤 세 가지를 먼저 바꾸겠습니까? 왜죠?
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
