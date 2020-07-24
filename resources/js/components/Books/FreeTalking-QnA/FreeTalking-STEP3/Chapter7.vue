<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5nQ9bkc/1/screen_2x/canva-two-gossiping-girls-MADQ5nQ9bkc.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Gossip</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        When was the last time you heard gossip from a friend or family member?
     </li>
     <br />
     <li class="mb-2">
        What gossip have you heard on the news recently?
     </li>
     <br />
     <li class="mb-2">
        Have you ever spread gossip?
        <ul>
        <li class="mt-2"> If yes, what did you say?</li>
        <li> If not, why didn't you?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Who gossips more, men or women?
        <ul>
        <li class="mt-2"> Why do you think that?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       Do you think most gossip is true or false? Why?
       <ul>
       <li class="mt-2"> Do you think that it is right or wrong to gossip? Why?</li>
       </ul>
     </li>
   </ol>



</div>

 <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        친구나 가족에게서 마지막으로 험담을 들은 것이 언제입니까?
     </li>
     <br />
     <li class="mb-2">
        최근에 뉴스에서 어떤 소문을 들었습니까?
     </li>
     <br />
     <li class="mb-2">
        당신은 소문을 퍼뜨린 적이 있나요?
        <ul>
        <li class="mt-2">만약 그렇다면, 뭐라고 했나요?</li>
        <li>그렇지 않다면, 왜 그러지 않았죠?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        남자든 여자든 누가 더 험담합니까?
        <ul>
        <li class="mt-2">왜 그렇게 생각하세요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       당신은 대부분의 가십이 진실이라고 생각하나요 아니면 거짓이라고 생각하나요? 왜죠? 
       <ul>
       <li class="mt-2">당신은 험담을 하는 것이 옳다고 생각하나요, 그르다고 생각하나요? 왜죠?</li>
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
