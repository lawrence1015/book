<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGv26Bbok/6/screen_2x/canva-two-athletes-standing-in-a-field-MADGv26Bbok.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; margin-left: -18px; margin-right: -18px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 ) </span>
</h3>

<div style="padding : 16px;">

<p>There was an ancient Greek story about two friends named Damon and Pythias. They grew up in the same town and were childhood friends. One day when they were visiting Syracuse, Pythias was arrested because he insulted the king. He was to be killed but he begged the king to give him a chance to say goodbye to his family.
Of course, the king didn't allow him temporary freedom for the fear that he wouldn't come back. Damon volunteered to take his place. If Pythias could not return in a month, then Damon has to be killed in his place. The King was surprised at this. He thought Damon was very stupid to sacrifice himself. Meanwhile, Pythias went back home and said goodbye to his family.
</p>
<p>
  One month had passed and just about Damon was to be killed, Pythias arrived in filthy, worn-out clothes.
The king was amazed at their friendship! He withdrew his punishment and made them his counselors in the royal court.
</p>



</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Arrest(v)</u> - to capture someone for legal custody <span class = "korean">체포하다, 막다[저지하다]</span>
</li>

<li style="list-style-type: none;"><u>Insult(v)</u> - to say or do something rude to someone <span class = "korean">모욕하다</span>
</li>

<li style="list-style-type: none;"><u>Beg(v)</u> - ask something from somebody in a humbling way <span class = "korean">간청[애원]하다, 구걸하다</span>
</li>

<li style="list-style-type: none;"><u>Volunteer(v)</u> - do something by choice <span class = "korean">자원[자진]하다; 자원 봉사로 하다</span>
</li>

<li style="list-style-type: none;"><u>Filthy(adj)</u> - extremely dirty <span class = "korean">아주 더러운, 추잡한, 심술이 난, 성질 고약한</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>My friends will ________ to help in the neighborhood’s clean-up drive.
  </li>

  <li>Please, I ______ you! Please give me one more chance.
  </li>

  <li>Those are _________ socks! Please change them.
  </li>

  <li>It is wrong to ____________ anybody. You will hurt their feelings!
  </li>

  <li>The police will __________ the thieves soon!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Who were the main characters in the story?
</li>

<li>Why was Pythias arrested?
</li>

<li>What did Pythias beg the king for?
</li>

<li>Why did Damon volunteer to take his place?
</li>

<li>Did Damon die? Why or why not?
</li>

<li>What did the king do in the end?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

<p>
  데이몬과 피디아스라는 두 친구에 대한 고대 그리스 이야기가 있었다. 그들은 같은 마을에서 자랐고 어린 시절의 친구였다. 어느 날 그들이 시라큐스를 방문했을 때, 피디아스는 왕을 모욕했기 때문에 체포되었다. 그는 죽임을 당할 예정이었으나 왕에게 가족들에게 작별의 기회를 달라고 간청했다. 물론 왕은 그가 돌아오지 않을 것을 우려하여 그에게 일시적인 자유를 허락하지 않았다. 데이몬은 자진해서 그의 자리를 대신했다. 피디아스가 한 달 안에 돌아올 수 없다면 데이몬은 그 자리에서 죽어야 한다. 왕은 이것에 놀랐다. 그는 데이몬이 자신을 희생하는 것이 매우 어리석다고 생각했다. 한편 피디아스는 집으로 돌아가 가족들과 작별 인사를 했다. 한 달이 지났고 데이몬이 거의 죽을 뻔하자 피디아스는 더럽고 낡아빠진 옷을 입고 도착했다. 왕은 그들의 우정에 놀랐다! 그는 형벌을 철회하고, 그들을 궁중의 신하로 삼았다.
</p>

</div>

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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}

</style>
