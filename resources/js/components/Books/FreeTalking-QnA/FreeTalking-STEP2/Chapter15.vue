<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ421HtdI/1/screen_2x/canva-untitled-MADQ421HtdI.jpg">

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
        padding-bottom: 10px;">Divorce</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Why do some people get divorced? Name a few reasons.<br />
       <br />
     </li>
     <li>
       Are any of your friends or family members divorced? How do you feel about it? How did you react when you heard the news?<br />
       <br />
     </li>
     <li>
       After a divorce, do you think people should remain friends with their ex-spouse's friends and family? Why or why not?<br />
       <br />
     </li>
     <li>
       After a divorce, children usually live with their mother. However, in joint custody agreements they split their time between their parents' homes.
       The father is usually required to pay alimony and child support to his ex-wife.
       How do you feel about joint custody? What do you think about alimony? Child support? Explain your opinions.<br />
       <br />
     </li>
     <li>
       You're having a party. Your closet friends have just gotten divorced. You'd like to invite both of them, but they're not talking to each other. Who do you invite? Why? Who do you think will attend?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       왜 어떤 사람들은 이혼을 하나요? 몇 가지 이유를 말씀해보세요.
     </li>
     <br />
     <li class="mb-2">
       당신의 친구나 가족 중에 이혼한 사람이 있나요? 그것에 대해 어떻게 느끼시나요? 그 소식을 들었을 때 당신은 어떻게 반응했나요?
     </li>
     <br />
     <li class="mb-2">
       이혼 후에, 여러분은 사람들이 전 배우자의 친구들과 가족과 친구로 남아야 한다고 생각하나요? 왜 그런가요, 아니라면 왜 아닌가요?
     </li>
     <br />
     <li class="mb-2">
       이혼 후에, 아이들은 보통 엄마와 함께 삽니다. 하지만 공동 양육권 협정에서 그들은 부모님의 집 사이에서 시간을 나눕니다. 아버지는 보통 전 부인에게 위자료와 양육비를 지급해야 합니다. 공동 양육권에 대해 어떻게 생각하세요? 위자료와 양육비에 대해 어떻게 생각하세요? 당신의 의견을 설명하세요.
     </li>
     <br>
     <li class="mb-2">
       당신은 파티를 하고 있어요. 당신의 친한 친구들은 막 이혼했어요. 둘 다 초대하고 싶은데 서로 말이 안 통하네요. 누구를 초대합니까? 왜요? 누가 참석할 것 같아요?
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
