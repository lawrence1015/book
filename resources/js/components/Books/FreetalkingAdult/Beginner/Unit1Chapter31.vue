<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

 <v-layout column>
   <v-img
          src="https://marketplace.canva.com/MADGyAa_RL8/4/screen_2x/canva-two-woman-wearing-blue-and-red-sport-shirts-and-sunglasses-lying-on-brown-surface-MADGyAa_RL8.jpg">

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
       padding-bottom: 10px;">Making Acquaintances and Friends</h1>
     </v-layout>
   </v-img>


         <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
              <div style="padding : 16px;">

<p>Technically, an acquaintance is somebody you just know slightly and a friend is someone you are very close to. However, I felt like I have to break the rules of definition when I met Becky. She is a happy-go-lucky girl I met at a friend's party. She and I did not know anybody else there so we stayed together. She was very talkative and also attentive so I did not feel shy talking to her about my life. At the end of the night we were as close as real sisters! I did not know if I should consider her as a friend or an acquaintance!  Tomorrow we are planning to eat lunch together and shop for new shoes!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Technically(adv)</u> -  in strict following of rules and words <span class = "korean">엄밀히 따지면[말하면], 기술적으로[기법상으로], 기술적으로</span> 
</li>

<li style="list-style-type: none;"><u>Definition(n)</u> -   meaning <span class = "korean">정의, 의미[정의], 선명도</span>
</li>

<li style="list-style-type: none;"><u>Happy-go-lucky(adj)</u> -  cheerful <span class = "korean">태평스러운</span>
</li>

<li style="list-style-type: none;"><u>Attentive(adj)</u> -   giving close attention such as by listening and watching <span class = "korean">주의[귀]를 기울이는, 배려하는, 신경을 쓰는</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
 <li>The _____________ of the word "mother" is "a woman who has a child.
 </li>

 <li>Her _____________ attitude makes her an instant favorite in social events.
 </li>

 <li>Her _____________ attitude makes her an instant favorite in social events.
 </li>

 <li>To produce high-quality products, we have to follow the rules very ____________.
 </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What is an acquaintance?
</li>

<li>What is a friend?
</li>

<li>Who is Becky?
</li>

<li>Why did they stay together?
</li>

<li>Why does the author like her?
</li>

<li>What are they planning to do together?
</li>

<li>What are they doing tomorrow?
</li>

<li>If you are a writer, would you consider Becky as a friend or an acquaintance?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">

  <p>엄밀히 말하면, 아는 사람은 조금밖에 모르는 사람이고 친구는 아주 친한 사람이다. 그러나 베키를 만나자 정의의 룰을 어겨야 한다는 생각이 들었다. 친구 파티에서 만난 그녀는 행복하고 쾌활한 여자다. 그녀와 나는 그곳에 아는 사람이 없어서 함께 지냈다. 그녀는 매우 수다스럽고 또한 세심해서 나는 그녀에게 내 삶에 대해 말하는 것을 부끄러워하지 않았다. 밤이 끝날 무렵 우리는 친자매처럼 친해졌다! 나는 그녀를 친구로 생각해야 할지 지인으로 생각해야 할지 몰랐다! 내일 우리는 점심을 같이 먹고 새 신발을 살 계획이다!
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
