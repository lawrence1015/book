<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ4-cYN5o/1/screen_2x/canva-rubbles-caused-by-an-earthquake-MADQ4-cYN5o.jpg">

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
        padding-bottom: 10px;">Disasters</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       What is a "natural" disaster? Give some examples.<br />
       <br />
     </li>
     <li>
       What was the most recent natural disaster that happened in your city? Talk about it.<br />
       <br />
     </li>
     <li>
       Have you ever lived through a major disaster? Where? Who was responsible for it? Why did it happen? How has it affected your life? Talk about it.<br />
       <br />
     </li>
     <li>
       What do you think was the world's worst disaster? Why do you think it was the worst disaster?<br />
       <br />
     </li>
     <li>
       Lack of natural resources can become a major disaster in the future. What can we do to conserve our natural resources?
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       자연 재해란 무엇일까요? 몇 가지 예를 들어 보세요.
     </li>
     <br />
     <li class="mb-2">
       당신의 도시에서 가장 최근에 일어난 자연 재해는 무엇입니까? 그것에 대해 이야기하세요.
     </li>
     <br />
     <li class="mb-2">
       당신은 큰 재난을 겪은 적이 있나요? 어디서요? 누가그것에 책임이 있었습니까? 왜 그런 일이 일어났을까요? 그것이 당신의 삶에 어떤 영향을 주었나요? 그것에 대해 이야기하세요.
     </li>
     <br />
     <li class="mb-2">
       세계 최악의 재난은 무엇이라고 생각합니까? 왜 그것이 최악의 재앙이었다고 생각합니까?
     </li>
     <br>
     <li class="mb-2">
      천연자원의 부족은 미래에 큰 재앙이 될 수 있습니다. 우리의 천연자원을 보존하기 위해 우리는 무엇을 할 수 있을까요?
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
