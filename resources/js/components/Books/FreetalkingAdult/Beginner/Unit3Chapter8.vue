<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">


      <h3 style="padding-top: 7px;
      margin-left: -18px;
      margin-right: -18px;
      padding-left: 10px;
      padding-bottom: 10px;
      padding-top: 15px;
      margin-top: 40px;
      background-color: #a7d7c5;">Conversation Samples <span style="font-size:18px">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
      <div style="padding : 16px;">

<p>
<b>A.</b>
<br>
<b>Damon</b>: Do not worry about me Pythias! Just go back to your family.
<br>
<b>Pythias</b>: You can trust me to be back Damon! I may be delayed but I will return. I cannot let you die!
You are my greatest friend.
<br>
<b>Damon</b>: I will count on your words my friend. I know that you are an honest man. Please send my family my words of love!
<br>
<b>Pythias</b>: I will do that and I will be back within a month.
<br>
<b>Damon</b>: Hurry on my friend! Farewell!
<br>
<b>Pythias</b>: Farewell my good friend! I will see you soon.
</p>

<p>
<b>B.</b>
<br>
<b>F</b>: Do you have friends? M: Of course! All people should have friends.
<br>
<b>F</b>: How many friends do you have?
<br>
<b>M</b>: Hmmm. Maybe I can say I have 20 close friends.
<br>
<b>F</b>: Wow! That's a lot. How many best friends do you have?
<br>
<b>M</b>: Best friends? What's the difference?
<br>
<b>F</b>: Friends are people you get easily along with. Best friends are the very close ones whom you share your deepest secrets and feelings with.
<br>
<b>M</b>: Oh! I only then have one very best friend!
</p>

</div>



<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What do you think about Damon and Pythias?
  </li>

  <li>Will you do the same thing for your friend? Why or why not?
  </li>

  <li>What is friendship to you?
  </li>

  <li>How many friends do you have?
  </li>

  <li>How did you become friends with them?
  </li>

  <li>How many best friends do you have?
  </li>

  <li>How did you meet them?
  </li>

  <li>Describe one of your closest friends.
  </li>

  <li>Can you recall an unforgettable situation with your friends?
  </li>

  <li>Are you still friends with your childhood buddies?
  </li>

  <li>Do you have friends from other countries?
  </li>

  <li>How have your friends helped you?
  </li>

  <li>How will you feel if you have no friends?
  </li>

  <li>Is friendship important to you? Why or why not?
  </li>

  <li>If you can give one friendship award, to whom will you give it?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

<p>
<b>A.</b>
<br>
<b>데이먼</b>: 내 걱정은 하지 마! 피디아스! 그냥 가족들에게 돌아가.
<br>
<b>피디아스</b>: 날 믿어도 돼 데이먼! 늦어질지 모르지만 돌아올게. 널 죽게 내버려 둘 순 없어! 너는 나의 가장 좋은 친구야.
<br>
<b>데이면</b>: 내 친구야, 너의 말을 믿을게. 나는 네가 정직한 사람이라는 것을 알아. 나의 가족에게 나의 사랑의 말을 전해줘!
<br>
<b>피디아스</b>: 그렇게 하고 한 달 안에 돌아올 거야.
<br>
<b>데이먼</b>: 어서가! 안녕!
<br>
<b>피디아스</b>: 안녕, 나의 좋은 친구야! 곧 보자.
</p>

<p>
<b>B.</b>
<br>
<b>F</b>: 친구 있어?
<br>
<b>M</b>: 물론이지! 모든 사람은 친구가 있어야 해
<br>
<b>F</b>: 친구가 몇 명 있어?
<br>
<b>M</b>: 음. 아마도 나는 20명의 친한 친구가 있다고 말할 수 있을 것 같아.
<br>
<b>F</b>: 와우! 엄청 많네. 너는 가장 친한 친구가 몇 명 있니?
<br>
<b>M</b>: 가장 친한 친구? 뭐가 다른데?
<br>
<b>F</b>: 친구는 너와 함께하는 사람이야. 가장 친한 친구들은 당신이 가장 깊은 비밀과 감정을 공유하는 사람들이야.
<br />
<b>M</b>: 오! 난 그러면 아주 친한 친구가 한명 있어!
</p>

</div>









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
