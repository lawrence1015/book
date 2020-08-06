<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

<div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGx3C8u_k/4/screen_2x/canva-girl-in-white-and-red-ringer-crew-neck-t-shirt-holding-metal-railing-at-daytime-MADGx3C8u_k.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean"> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>


<div style="padding : 16px;">

<p>Sunny days are bright and fun! 
   Scientists said sunlight can help people feel happier and healthier as it helps the body produce Vitamin D which helps form strong bones. 
   However, do you know that staying too long in the sun can damage the skin? 
   Fair­-skinned people can get severe sunburns if they don’t use enough protection.  
   Aside from sunburns, the excessive sun can also damage the eyes. 
   This is why people should wear hats and use umbrellas and sunscreen lotions.  Because we sweat a lot on a sunny day, we can get dehydrated so drinking a lot of water is also highly recommended.
</p>


</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Fair(adj)</u> - pale or light-colored <span class = "korean">(피부머리카락이) 옅은 색의, 금발의, 흰 피부의</span>
</li>

<li style="list-style-type: none;"><u>Severe(adj)</u> - serious <span class = "korean">극심한, 심각한, 가혹한[혹독한], 엄한, 엄격한, 아주 힘든[어려운]</span>
</li>

<li style="list-style-type: none;"><u>Excessive(adj)</u> - too much <span class = "korean">지나친, 과도한</span>
</li>

<li style="list-style-type: none;"><u>Sweat(v)</u> -  to excrete salty fluid from the skin <span class = "korean">땀, 식은땀, 진땀</span>
</li>

<li style="list-style-type: none;"><u>Dehydrate(v)</u> - lose water <span class = "korean">탈수 상태가 되다[되게 하다]</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Pastel colors look good on _____________ skinned people.
  </li>

  <li>That’s an ___________ amount of food! Can you eat all of it?
  </li>

  <li>I really ________ a lot. I have to bring an extra t-shirt.
  </li>

  <li>That looks like a ______________ injury. We should bring her to the hospital!
  </li>

  <li>In the desert, you get ___________ easily.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>How can sunlight help people?
</li>

<li>What is the use of Vitamin D?
</li>

<li>What can too long in the sun do? What can too much sun do to the eyes?
</li>

<li>What should people do to protect themselves?
</li>

<li>What should we do to avoid getting dehydrated?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">
  <p>
    화창한 날은 밝고 즐겁다! 과학자들은 햇빛은 몸이 튼튼한 뼈를 형성하는 데 도움을 주는 비타민 D를 생산하는데 도움을 주기 때문에 사람들이 더 행복하고 건강하게 느끼도록 도울 수 있다고 말했다. 하지만 햇볕에 너무 오래 있으면 피부가 손상될 수 있다는 것을 알고 있는가? 피부가 희끗희끗한 사람들은 충분한 보호 장치를 사용하지 않으면 심하게 햇볕에 그을릴 수 있다. 햇볕에 타는 것 외에도, 지나친 태양은 눈을 손상시킬 수도 있다. 이래서 모자를 쓰고 우산이나 자외선 차단 로션을 써야 한다. 햇볕이 잘 드는 날에는 땀을 많이 흘리기 때문에 탈수될 수 있으므로 물을 많이 마시는 것도 좋다.
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
