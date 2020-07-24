<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/beautiful-young-woman-making-selfie-by-smart-phone-while-lying-couch-home_231208-1295.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Excuses and Lies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Who lied to you last? When?
       <ul>
       <li class="mt-2"> How did you feel when you found out the truth?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        When have you lied or made up an excuse?
        <ul>
        <li class="mt-2"> Why did you do it?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever told a "white lie"?
        <ul>
        <li class="mt-2"> How is this different from any other lie (or excuse)?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever been caught in a lie? When? What did you say?
     </li>
     <br />
     <li class="mb-2">
        Why do you think some people frequently lie or make up excuses instead of telling the truth?
     </li>
     <br />
     <li class="mb-2">
        Imagine a world where everyone must always tell the truth. Describe this world.
        <ul>
        <li class="mt-2">  Do you think that in some situations it is better to lie or make up an excuse? Why or why not?</li>
       </ul>
     </li>
   </ol>



</div>

<h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       누가 마지막으로 당신에게 거짓말을 했나요? 언제요?
       <ul>
       <li class="mt-2">진실을 알았을 때 기분이 어땠나요?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        언제 거짓말을 했거나 변명을 했나요?
        <ul>
        <li class="mt-2">왜 그랬어요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        선의의 거짓말을 한 적이 있나요?
        <ul>
        <li class="mt-2">이것은 다른 어떤 거짓말과 어떻게 다른가요? (또는 변명과)</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        당신은 거짓말을 들킨 적이 있습니까? 언제요? 뭐라고 하셨어요?
     </li>
     <br />
     <li class="mb-2">
        당신은 왜 몇몇 사람들이 진실을 말하는 대신 거짓말을 하거나 변명을 자주 한다고 생각합니까?
     </li>
     <br />
     <li class="mb-2">
        모두가 항상 진실을 말해야 하는 세상을 상상해 보세요. 이 세상을 묘사해보세요.
        <ul>
        <li class="mt-2">당신은 어떤 상황에서는 거짓말을 하는 것이 더 낫다고 생각하나요? 아니면 핑계를 대는 것이 더 낫다고 생각하나요? 왜 그런가요, 아니면 왜 아닌가요?</li>
       </ul>
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
