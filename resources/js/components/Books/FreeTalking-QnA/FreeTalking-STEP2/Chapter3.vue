<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/female-legs-sneakers-rail-railway_1421-272.jpg">

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
        padding-bottom: 10px;">Moving Children Out</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       When do children usually move out of their parents' home in your country? Why?<br />
       <br />
     </li>
     <li>
       When did you move out of your parents' home? Why?<br />
       <br />
     </li>
     <li>
       What was your family's reaction when you told them you were going to move out?<br />
       <br />
     </li>
     <li>
       Do you think it's right for parents to tell their children to move out when they are over eighteen years old?<br />
       Why or why not? When should adult children move out? Why?<br />
       <br />
     </li>
     <li>
       Would you ever tell your children to move out? For what reasons, if any? (If you don't have children, imagine what you might do.)
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신의 나라에서는 아이들이 보통 언제 부모님의 집에서 나오나요? 왜죠?
     </li>
     <br />
     <li class="mb-2">
       언제 부모님 집에서 나왔나요? 왜요?
     </li>
     <br />
     <li class="mb-2">
       집을 나간다고 했을 때 가족들 반응은 어땠어요?
     </li>
     <br />
     <li class="mb-2">
       당신은 부모들이 자녀들에게 18세가 넘었을 때 집을 나가라고 말하는 것이 옳다고 생각하나요? 왜 그런가요, 아니면 왜 아닌가요? 어른, 아이들은 언제 나가야 하나요? 왜요?
     </li>
     <li class="mb-2">
      당신은 당신의 아이들에게 나가라고 말한 적이 있나요? 만약 있다면 어떤 이유로 그랬나요? (만약 아이가 없다면, 무엇을 할 수 있을지 상상해 보세요.)
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
